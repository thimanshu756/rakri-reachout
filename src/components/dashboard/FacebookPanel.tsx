"use client";

import { Lead } from "@/lib/types";
import { useState } from "react";

interface Props {
  lead: Lead;
  onMarkSent: (leadId: string) => void;
}

export default function FacebookPanel({ lead, onMarkSent }: Props) {
  const [copied, setCopied] = useState(false);

  const fbUrl = lead.fbUrl;
  const message = lead.fbMessage || lead.waMessage || "";

  const demoUrl = lead.demoUrl || "";

  // Default FB message if none set
  const fbMessage = message || `Hi! I came across your business on Facebook — great page! I actually built a free website demo for you: ${demoUrl} — have a look, completely free!`;

  function copyMessage() {
    navigator.clipboard.writeText(fbMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="space-y-3">
      {/* FB Page Link */}
      {fbUrl ? (
        <div className="flex items-center gap-3">
          <span className="text-xs font-medium uppercase text-gray-400">Facebook Page</span>
          <a
            href={fbUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:underline truncate"
          >
            {fbUrl}
          </a>
        </div>
      ) : (
        <div className="flex items-center gap-3">
          <span className="text-xs font-medium uppercase text-gray-400">Facebook Page</span>
          <a
            href={`https://www.facebook.com/search/pages/?q=${encodeURIComponent(lead.businessName + " " + lead.city)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:underline"
          >
            Search on Facebook →
          </a>
        </div>
      )}

      {/* Message preview */}
      <div>
        <div className="flex items-center justify-between">
          <p className="text-xs font-medium uppercase text-gray-400">Message to send</p>
          <button
            onClick={copyMessage}
            className="text-xs text-blue-600 hover:text-blue-800"
          >
            {copied ? "Copied!" : "Copy Message"}
          </button>
        </div>
        <div className="mt-1 rounded-lg bg-blue-50 dark:bg-blue-950/30 p-3 text-sm text-gray-700 dark:text-gray-300">
          {fbMessage}
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        {fbUrl ? (
          <a
            href={fbUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-lg bg-blue-600 px-4 py-2.5 text-center text-sm font-medium text-white transition hover:bg-blue-700"
          >
            📘 Open Page → Send Message
          </a>
        ) : (
          <a
            href={`https://www.facebook.com/search/pages/?q=${encodeURIComponent(lead.businessName + " " + lead.city)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-lg bg-blue-600 px-4 py-2.5 text-center text-sm font-medium text-white transition hover:bg-blue-700"
          >
            📘 Find on Facebook → Message
          </a>
        )}
        <button
          onClick={() => onMarkSent(lead.id)}
          className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 disabled:opacity-50"
        >
          Mark FB Sent
        </button>
      </div>

      {/* Tip */}
      <p className="text-xs text-gray-400 text-center">
        Copy the message → Open their page → Click &quot;Message&quot; → Paste → Send
      </p>
    </div>
  );
}
