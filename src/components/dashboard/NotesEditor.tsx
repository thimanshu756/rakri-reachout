"use client";

import { useState } from "react";

interface Props {
  leadId: string;
  initialNotes: string;
  onSave: (leadId: string, notes: string) => void;
}

export default function NotesEditor({ leadId, initialNotes, onSave }: Props) {
  const [notes, setNotes] = useState(initialNotes);
  const [saved, setSaved] = useState(false);

  function handleSave() {
    onSave(leadId, notes);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div>
      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Add notes about this lead..."
        rows={3}
        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
      />
      <div className="mt-2 flex items-center gap-2">
        <button
          onClick={handleSave}
          className="rounded-lg bg-gray-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-gray-800"
        >
          {saved ? "Saved!" : "Save Notes"}
        </button>
      </div>
    </div>
  );
}
