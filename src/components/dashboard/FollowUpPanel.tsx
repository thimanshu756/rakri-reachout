"use client";

import { Lead } from "@/lib/types";
import { useState } from "react";

interface Props {
  lead: Lead;
  onSendFollowUp: (leadId: string, type: string) => Promise<boolean>;
}

export default function FollowUpPanel({ lead, onSendFollowUp }: Props) {
  const [sending, setSending] = useState<string | null>(null);
  const [copied, setCopied] = useState<string | null>(null);

  const followups = [
    { key: "followup1", label: "Follow-up 1 (Day 3)", content: lead.followup1, sentAt: lead.followup1At },
    { key: "followup2", label: "Follow-up 2 (Day 7)", content: lead.followup2, sentAt: lead.followup2At },
    { key: "followup3", label: "Follow-up 3 (Day 14 — Final)", content: lead.followup3, sentAt: lead.followup3At },
  ];

  async function handleSend(type: string) {
    setSending(type);
    await onSendFollowUp(lead.id, type);
    setSending(null);
  }

  function copyContent(content: string, key: string) {
    navigator.clipboard.writeText(content);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  }

  const hasAnyContent = followups.some((fu) => fu.content);
  if (!hasAnyContent) {
    return (
      <div className="rounded-lg bg-gray-50 p-4 text-center text-sm text-gray-500">
        No follow-up content yet. Ask Claude Code to write follow-ups for this lead.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {followups.map((fu) => (
        <div key={fu.key} className="rounded-lg border border-gray-200 p-3">
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold uppercase text-gray-500">{fu.label}</p>
            {fu.sentAt && (
              <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-700">
                Sent {new Date(fu.sentAt).toLocaleDateString()}
              </span>
            )}
          </div>

          {fu.content ? (
            <>
              <div className="mt-2 rounded bg-gray-50 p-2 text-sm text-gray-700 whitespace-pre-wrap">
                {fu.content}
              </div>
              <div className="mt-2 flex gap-2">
                <button
                  onClick={() => copyContent(fu.content!, fu.key)}
                  className="text-xs text-blue-600 hover:text-blue-800"
                >
                  {copied === fu.key ? "Copied!" : "Copy"}
                </button>
                {lead.hasEmail && !fu.sentAt && (
                  <button
                    onClick={() => handleSend(fu.key)}
                    disabled={sending === fu.key}
                    className="text-xs text-blue-600 hover:text-blue-800"
                  >
                    {sending === fu.key ? "Sending..." : "Send via Zoho"}
                  </button>
                )}
              </div>
            </>
          ) : (
            <p className="mt-2 text-xs text-gray-400">Not written yet</p>
          )}
        </div>
      ))}
    </div>
  );
}
