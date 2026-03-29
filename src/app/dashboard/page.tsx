"use client";

import { useState, useEffect, useCallback } from "react";
import { Lead, LeadStage } from "@/lib/types";
import AuthGate from "@/components/dashboard/AuthGate";
import StatsBar from "@/components/dashboard/StatsBar";
import FollowUpQueue from "@/components/dashboard/FollowUpQueue";
import FilterBar from "@/components/dashboard/FilterBar";
import LeadsTable from "@/components/dashboard/LeadsTable";
import ImportModal from "@/components/dashboard/ImportModal";
import Toast from "@/components/dashboard/Toast";

export default function DashboardPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [showImport, setShowImport] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  // Filters
  const [niche, setNiche] = useState("");
  const [city, setCity] = useState("");
  const [stage, setStage] = useState("");
  const [search, setSearch] = useState("");

  // Check existing auth on mount
  useEffect(() => {
    fetch("/api/leads")
      .then((r) => {
        if (r.ok) {
          setAuthenticated(true);
          return r.json();
        }
        return null;
      })
      .then((data) => {
        if (data) setLeads(data);
      })
      .catch(() => {})
      .finally(() => {
        setCheckingAuth(false);
        setLoading(false);
      });
  }, []);

  const fetchLeads = useCallback(async () => {
    const params = new URLSearchParams();
    if (niche) params.set("niche", niche);
    if (city) params.set("city", city);
    if (stage) params.set("stage", stage);
    if (search) params.set("search", search);

    const res = await fetch(`/api/leads?${params}`);
    if (res.ok) {
      const data = await res.json();
      setLeads(data);
    }
  }, [niche, city, stage, search]);

  // Refetch on filter change
  useEffect(() => {
    if (authenticated) {
      fetchLeads();
    }
  }, [authenticated, fetchLeads]);

  async function handleStageChange(leadId: string, newStage: LeadStage) {
    const res = await fetch(`/api/leads/${leadId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ stage: newStage }),
    });
    if (res.ok) {
      setLeads((prev) =>
        prev.map((l) => (l.id === leadId ? { ...l, stage: newStage } : l))
      );
    }
  }

  async function handleSendEmail(leadId: string, type: string): Promise<boolean> {
    const res = await fetch("/api/send/email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ leadId, type }),
    });
    if (res.ok) {
      setToast({ message: "Email sent successfully!", type: "success" });
      await fetchLeads();
      return true;
    }
    const data = await res.json();
    setToast({ message: data.error || "Failed to send email", type: "error" });
    return false;
  }

  async function handleMarkWaSent(leadId: string) {
    await fetch(`/api/leads/${leadId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ stage: "wa_sent", outreachAt: new Date().toISOString() }),
    });
    setLeads((prev) =>
      prev.map((l) => (l.id === leadId ? { ...l, stage: "wa_sent" as LeadStage } : l))
    );
    setToast({ message: "Marked as WhatsApp sent", type: "success" });
  }

  async function handleSaveNotes(leadId: string, notes: string) {
    await fetch(`/api/leads/${leadId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ notes }),
    });
  }

  async function handleDelete(leadId: string) {
    await fetch(`/api/leads/${leadId}`, { method: "DELETE" });
    setLeads((prev) => prev.filter((l) => l.id !== leadId));
  }

  async function handleSendFollowUp(leadId: string, type: string) {
    await handleSendEmail(leadId, type);
  }

  if (checkingAuth) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-gray-900" />
      </div>
    );
  }

  if (!authenticated) {
    return (
      <AuthGate
        onAuthenticated={() => {
          setAuthenticated(true);
          fetchLeads();
          // Run auto-stage transitions on login
          fetch("/api/stages", { method: "PUT" }).catch(() => {});
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <div>
            <h1 className="text-xl font-bold text-gray-900">RakriAI Dashboard</h1>
            <p className="text-sm text-gray-500">{leads.length} leads</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setShowImport(true)}
              className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
            >
              Import CSV
            </button>
            <button
              onClick={fetchLeads}
              className="rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50"
              title="Refresh"
            >
              ↻
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl space-y-6 px-4 py-6 sm:px-6">
        {/* Stats */}
        <StatsBar leads={leads} />

        {/* Follow-up queue */}
        <FollowUpQueue onSendFollowUp={handleSendFollowUp} />

        {/* Filters */}
        <FilterBar
          niche={niche}
          city={city}
          stage={stage}
          search={search}
          onNicheChange={setNiche}
          onCityChange={setCity}
          onStageChange={setStage}
          onSearchChange={setSearch}
        />

        {/* Leads table */}
        {loading ? (
          <div className="flex justify-center py-12">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-gray-900" />
          </div>
        ) : (
          <LeadsTable
            leads={leads}
            onStageChange={handleStageChange}
            onSendEmail={handleSendEmail}
            onMarkWaSent={handleMarkWaSent}
            onSaveNotes={handleSaveNotes}
            onDelete={handleDelete}
          />
        )}
      </main>

      {/* Import modal */}
      <ImportModal
        isOpen={showImport}
        onClose={() => setShowImport(false)}
        onImportComplete={() => {
          fetchLeads();
          setToast({ message: "Leads imported successfully!", type: "success" });
        }}
      />

      {/* Toast notification */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}
