"use client";

import { Lead, LeadStage } from "@/lib/types";
import LeadRow from "./LeadRow";

interface Props {
  leads: Lead[];
  onStageChange: (leadId: string, stage: LeadStage) => void;
  onSendEmail: (leadId: string, type: string) => Promise<boolean>;
  onMarkWaSent: (leadId: string) => void;
  onMarkFbSent: (leadId: string) => void;
  onSaveNotes: (leadId: string, notes: string) => void;
  onDelete: (leadId: string) => void;
}

export default function LeadsTable({
  leads,
  onStageChange,
  onSendEmail,
  onMarkWaSent,
  onMarkFbSent,
  onSaveNotes,
  onDelete,
}: Props) {
  if (leads.length === 0) {
    return (
      <div className="rounded-xl border border-gray-200 bg-white p-12 text-center">
        <p className="text-lg font-medium text-gray-500">No leads found</p>
        <p className="mt-1 text-sm text-gray-400">
          Import leads from CSV or run the scraper
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-white overflow-hidden">
      {/* Header */}
      <div className="hidden sm:flex items-center gap-4 border-b border-gray-200 bg-gray-50 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-gray-500">
        <div className="flex-1">Business</div>
        <div className="w-16">Demo</div>
        <div className="w-32">Stage</div>
        <div className="w-4" />
      </div>

      {/* Rows */}
      {leads.map((lead) => (
        <LeadRow
          key={lead.id}
          lead={lead}
          onStageChange={onStageChange}
          onSendEmail={onSendEmail}
          onMarkWaSent={onMarkWaSent}
          onMarkFbSent={onMarkFbSent}
          onSaveNotes={onSaveNotes}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
