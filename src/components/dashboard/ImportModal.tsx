"use client";

import { useState } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onImportComplete: () => void;
}

export default function ImportModal({ isOpen, onClose, onImportComplete }: Props) {
  const [csvText, setCsvText] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [importing, setImporting] = useState(false);
  const [result, setResult] = useState<{ imported: number; skipped: number; total: number } | null>(null);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  async function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (!f) return;
    setFile(f);
    const text = await f.text();
    setCsvText(text);
  }

  async function handleImport() {
    if (!csvText.trim()) {
      setError("No CSV data");
      return;
    }

    setImporting(true);
    setError("");
    setResult(null);

    const res = await fetch("/api/leads/import", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ csv: csvText }),
    });

    const data = await res.json();

    if (res.ok) {
      setResult(data);
      onImportComplete();
    } else {
      setError(data.error || "Import failed");
    }

    setImporting(false);
  }

  function handleClose() {
    setCsvText("");
    setFile(null);
    setResult(null);
    setError("");
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="mx-4 w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-900">Import Leads from CSV</h2>
          <button onClick={handleClose} className="text-gray-400 hover:text-gray-600">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="mt-4">
          {/* File upload */}
          <label className="block rounded-lg border-2 border-dashed border-gray-300 p-6 text-center cursor-pointer hover:border-blue-400 transition">
            <input
              type="file"
              accept=".csv"
              onChange={handleFileUpload}
              className="hidden"
            />
            <p className="text-sm text-gray-600">
              {file ? file.name : "Click to upload CSV or drag & drop"}
            </p>
            <p className="mt-1 text-xs text-gray-400">
              Expected: business_name, phone, city, niche, rating, review_count
            </p>
          </label>

          {/* Or paste */}
          <div className="mt-3">
            <p className="text-xs font-medium text-gray-500 mb-1">Or paste CSV data:</p>
            <textarea
              value={csvText}
              onChange={(e) => setCsvText(e.target.value)}
              rows={5}
              placeholder="business_name,phone,city,niche,rating,review_count&#10;Judd Plumbing,+1 254-290-0787,Killeen,plumber,4.6,44"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-xs font-mono text-gray-800 focus:border-blue-500 focus:outline-none resize-none"
            />
          </div>

          {/* Preview count */}
          {csvText && (
            <p className="mt-2 text-sm text-gray-600">
              {csvText.trim().split("\n").length - 1} rows detected
            </p>
          )}

          {/* Error */}
          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}

          {/* Result */}
          {result && (
            <div className="mt-2 rounded-lg bg-green-50 p-3 text-sm text-green-800">
              Imported {result.imported} leads. Skipped {result.skipped} (duplicates/invalid). Total rows: {result.total}.
            </div>
          )}

          {/* Actions */}
          <div className="mt-4 flex justify-end gap-2">
            <button
              onClick={handleClose}
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              {result ? "Done" : "Cancel"}
            </button>
            {!result && (
              <button
                onClick={handleImport}
                disabled={importing || !csvText.trim()}
                className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 disabled:opacity-50"
              >
                {importing ? "Importing..." : "Import Leads"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
