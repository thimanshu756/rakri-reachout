"use client";

import { Lead } from "@/lib/types";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { useState } from "react";

interface Props {
  lead: Lead;
  onMarkSent: (leadId: string) => void;
}

export default function WhatsAppPanel({ lead, onMarkSent }: Props) {
  const [copied, setCopied] = useState(false);

  const message = lead.waMessage || "";
  const waLink = getWhatsAppLink(lead.phone, message);

  function copyMessage() {
    navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  if (!message) {
    return (
      <div className="rounded-lg bg-gray-50 p-4 text-center text-sm text-gray-500">
        No WhatsApp message yet. Ask Claude Code to write outreach for this lead.
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {/* Phone */}
      <div className="flex items-center gap-3">
        <span className="text-xs font-medium uppercase text-gray-400">Phone</span>
        <span className="font-mono font-bold text-gray-900">{lead.phone}</span>
      </div>

      {/* Message preview */}
      <div>
        <div className="flex items-center justify-between">
          <p className="text-xs font-medium uppercase text-gray-400">Message</p>
          <button
            onClick={copyMessage}
            className="text-xs text-green-600 hover:text-green-800"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
        <div className="mt-1 rounded-lg bg-green-50 p-3 text-sm text-gray-700">
          {message}
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 rounded-lg bg-green-600 px-4 py-2.5 text-center text-sm font-medium text-white transition hover:bg-green-700"
        >
          📱 Open in WhatsApp
        </a>
        <button
          onClick={() => onMarkSent(lead.id)}
          disabled={lead.stage === "wa_sent"}
          className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 disabled:opacity-50"
        >
          {lead.stage === "wa_sent" ? "Marked Sent" : "Mark as Sent"}
        </button>
      </div>
    </div>
  );
}
