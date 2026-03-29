"use client";

import { Lead, LeadStage } from "@/lib/types";
import { useState } from "react";
import StageDropdown from "./StageDropdown";
import EmailPanel from "./EmailPanel";
import WhatsAppPanel from "./WhatsAppPanel";
import FollowUpPanel from "./FollowUpPanel";
import NotesEditor from "./NotesEditor";

interface Props {
  lead: Lead;
  onStageChange: (leadId: string, stage: LeadStage) => void;
  onSendEmail: (leadId: string, type: string) => Promise<boolean>;
  onMarkWaSent: (leadId: string) => void;
  onSaveNotes: (leadId: string, notes: string) => void;
  onDelete: (leadId: string) => void;
}

type Tab = "email" | "whatsapp" | "followups" | "notes";

export default function LeadRow({
  lead,
  onStageChange,
  onSendEmail,
  onMarkWaSent,
  onSaveNotes,
  onDelete,
}: Props) {
  const [expanded, setExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>(lead.hasEmail ? "email" : "whatsapp");

  const tabs: { key: Tab; label: string; icon: string }[] = [
    { key: "email", label: "Email", icon: "📧" },
    { key: "whatsapp", label: "WhatsApp", icon: "📱" },
    { key: "followups", label: "Follow-ups", icon: "🔄" },
    { key: "notes", label: "Notes", icon: "📝" },
  ];

  return (
    <div className="border-b border-gray-100 last:border-0">
      {/* Main row */}
      <div
        className="flex cursor-pointer items-center gap-4 px-4 py-3 transition hover:bg-gray-50"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <p className="font-semibold text-gray-900 truncate">{lead.businessName}</p>
            {lead.hasEmail && (
              <span className="rounded bg-blue-100 px-1.5 py-0.5 text-xs text-blue-600">email</span>
            )}
          </div>
          <p className="text-sm text-gray-500">
            {lead.city} &middot; {lead.niche} &middot; {lead.rating}★ ({lead.reviewCount})
          </p>
        </div>

        <div className="hidden sm:block">
          <a
            href={lead.demoUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-blue-600 hover:underline"
            onClick={(e) => e.stopPropagation()}
          >
            Demo ↗
          </a>
        </div>

        <div onClick={(e) => e.stopPropagation()}>
          <StageDropdown
            currentStage={lead.stage as LeadStage}
            onStageChange={(stage) => onStageChange(lead.id, stage)}
          />
        </div>

        <svg
          className={`h-4 w-4 text-gray-400 transition ${expanded ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* Expanded panel */}
      {expanded && (
        <div className="border-t border-gray-100 bg-gray-50 px-4 py-4">
          {/* Info row */}
          <div className="mb-4 flex flex-wrap gap-4 text-sm text-gray-600">
            <span>📞 <a href={`tel:${lead.phone}`} className="text-blue-600 hover:underline">{lead.phone}</a></span>
            {lead.email && <span>📧 {lead.email}</span>}
            {lead.address && <span>📍 {lead.address}</span>}
            <span>📅 Added {new Date(lead.createdAt).toLocaleDateString()}</span>
          </div>

          {/* Tabs */}
          <div className="mb-4 flex gap-1 border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-3 py-2 text-sm font-medium transition ${
                  activeTab === tab.key
                    ? "border-b-2 border-blue-600 text-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="min-h-[120px]">
            {activeTab === "email" && (
              <EmailPanel lead={lead} onSendEmail={onSendEmail} />
            )}
            {activeTab === "whatsapp" && (
              <WhatsAppPanel lead={lead} onMarkSent={onMarkWaSent} />
            )}
            {activeTab === "followups" && (
              <FollowUpPanel lead={lead} onSendFollowUp={onSendEmail} />
            )}
            {activeTab === "notes" && (
              <NotesEditor
                leadId={lead.id}
                initialNotes={lead.notes || ""}
                onSave={onSaveNotes}
              />
            )}
          </div>

          {/* Delete */}
          <div className="mt-4 flex justify-end">
            <button
              onClick={() => {
                if (confirm(`Delete ${lead.businessName}?`)) {
                  onDelete(lead.id);
                }
              }}
              className="text-xs text-red-500 hover:text-red-700"
            >
              Delete lead
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
