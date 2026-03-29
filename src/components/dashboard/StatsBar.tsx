"use client";

import { Lead } from "@/lib/types";

interface Props {
  leads: Lead[];
}

export default function StatsBar({ leads }: Props) {
  const total = leads.length;
  const sent = leads.filter((l) =>
    ["email_sent", "wa_sent", "followed_up_1", "followed_up_2", "followed_up_3"].includes(l.stage)
  ).length;
  const replied = leads.filter((l) =>
    ["replied", "call_scheduled", "client", "website_building", "website_ready", "delivered"].includes(l.stage)
  ).length;
  const clients = leads.filter((l) =>
    ["client", "website_building", "website_ready", "delivered"].includes(l.stage)
  ).length;
  const dead = leads.filter((l) => l.stage === "dead").length;
  const closeRate = sent > 0 ? ((clients / sent) * 100).toFixed(1) : "0.0";

  const stats = [
    { label: "Total", value: total, color: "bg-gray-100 text-gray-700" },
    { label: "Sent", value: sent, color: "bg-blue-100 text-blue-700" },
    { label: "Replied", value: replied, color: "bg-emerald-100 text-emerald-700" },
    { label: "Clients", value: clients, color: "bg-green-100 text-green-700" },
    { label: "Dead", value: dead, color: "bg-gray-200 text-gray-500" },
    { label: "Close %", value: `${closeRate}%`, color: "bg-purple-100 text-purple-700" },
  ];

  return (
    <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={`rounded-xl ${stat.color} p-4 text-center`}
        >
          <p className="text-2xl font-bold">{stat.value}</p>
          <p className="mt-1 text-xs font-medium uppercase tracking-wider opacity-70">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
