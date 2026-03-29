"use client";

import { Lead } from "@/lib/types";
import { useState } from "react";

interface Props {
  lead: Lead;
  onSendEmail: (leadId: string, type: string) => Promise<boolean>;
}

export default function EmailPanel({ lead, onSendEmail }: Props) {
  const [sending, setSending] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  async function handleSend() {
    setSending(true);
    await onSendEmail(lead.id, "initial");
    setSending(false);
  }

  function copyToClipboard(text: string, label: string) {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  }

  if (!lead.emailSubject && !lead.emailBody) {
    return (
      <div className="rounded-lg bg-gray-50 p-4 text-center text-sm text-gray-500">
        No email content yet. Ask Claude Code to write outreach for this lead.
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {/* Subject */}
      <div>
        <div className="flex items-center justify-between">
          <p className="text-xs font-medium uppercase text-gray-400">Subject</p>
          <button
            onClick={() => copyToClipboard(lead.emailSubject || "", "subject")}
            className="text-xs text-blue-600 hover:text-blue-800"
          >
            {copied === "subject" ? "Copied!" : "Copy"}
          </button>
        </div>
        <p className="mt-1 font-medium text-gray-900">{lead.emailSubject}</p>
      </div>

      {/* Body */}
      <div>
        <div className="flex items-center justify-between">
          <p className="text-xs font-medium uppercase text-gray-400">Body</p>
          <button
            onClick={() => copyToClipboard(lead.emailBody || "", "body")}
            className="text-xs text-blue-600 hover:text-blue-800"
          >
            {copied === "body" ? "Copied!" : "Copy"}
          </button>
        </div>
        <div className="mt-1 rounded-lg bg-gray-50 p-3 text-sm text-gray-700 whitespace-pre-wrap">
          {lead.emailBody}
        </div>
      </div>

      {/* Send button */}
      {lead.hasEmail && lead.email && (
        <button
          onClick={handleSend}
          disabled={sending || lead.stage === "email_sent"}
          className="w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700 disabled:opacity-50"
        >
          {sending
            ? "Sending..."
            : lead.stage === "email_sent"
            ? "Email Already Sent"
            : `Send via Zoho to ${lead.email}`}
        </button>
      )}

      {!lead.hasEmail && (
        <p className="text-center text-xs text-gray-400">
          No email address — use WhatsApp instead
        </p>
      )}
    </div>
  );
}
