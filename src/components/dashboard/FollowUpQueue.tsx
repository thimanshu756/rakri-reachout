"use client";

import { useState, useEffect } from "react";

interface FollowUpLead {
  id: string;
  businessName: string;
  phone: string;
  email: string | null;
  hasEmail: boolean;
  followupNumber: number;
  daysSince: number;
  stage: string;
}

interface Props {
  onSendFollowUp: (leadId: string, type: string) => void;
}

export default function FollowUpQueue({ onSendFollowUp }: Props) {
  const [queue, setQueue] = useState<{
    followup1: FollowUpLead[];
    followup2: FollowUpLead[];
    followup3: FollowUpLead[];
    total: number;
  } | null>(null);

  useEffect(() => {
    fetch("/api/leads/followups")
      .then((r) => r.json())
      .then(setQueue)
      .catch(() => {});
  }, []);

  if (!queue || queue.total === 0) return null;

  const allFollowUps = [
    ...queue.followup1.map((l) => ({ ...l, fuNum: 1, type: "followup1" })),
    ...queue.followup2.map((l) => ({ ...l, fuNum: 2, type: "followup2" })),
    ...queue.followup3.map((l) => ({ ...l, fuNum: 3, type: "followup3" })),
  ];

  return (
    <div className="rounded-xl border border-orange-200 bg-orange-50 p-4">
      <h3 className="flex items-center gap-2 font-bold text-orange-800">
        <span className="text-lg">🔥</span>
        Today&apos;s Follow-ups ({queue.total})
      </h3>

      <div className="mt-3 space-y-2">
        {allFollowUps.map((lead) => (
          <div
            key={`${lead.id}-${lead.fuNum}`}
            className="flex items-center justify-between rounded-lg bg-white px-4 py-3 shadow-sm"
          >
            <div>
              <p className="font-medium text-gray-900">{lead.businessName}</p>
              <p className="text-sm text-gray-500">
                Day {lead.daysSince} &middot; Follow-up #{lead.fuNum}
              </p>
            </div>
            <div className="flex gap-2">
              {lead.hasEmail && (
                <button
                  onClick={() => onSendFollowUp(lead.id, lead.type)}
                  className="rounded-lg bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700"
                >
                  📧 Send FU-{lead.fuNum}
                </button>
              )}
              <a
                href={`https://wa.me/${lead.phone.replace(/[^\d]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-green-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-green-700"
              >
                📱 WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
