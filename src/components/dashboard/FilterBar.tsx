"use client";

import { NICHE_LIST, STAGE_LABELS, LeadStage } from "@/lib/types";

export type Channel = "" | "whatsapp" | "facebook" | "email";

interface Props {
  niche: string;
  city: string;
  stage: string;
  search: string;
  channel: Channel;
  country: string;
  onNicheChange: (v: string) => void;
  onCityChange: (v: string) => void;
  onStageChange: (v: string) => void;
  onSearchChange: (v: string) => void;
  onChannelChange: (v: Channel) => void;
  onCountryChange: (v: string) => void;
}

export default function FilterBar({
  niche,
  city,
  stage,
  search,
  channel,
  country,
  onNicheChange,
  onCityChange,
  onStageChange,
  onSearchChange,
  onChannelChange,
  onCountryChange,
}: Props) {
  return (
    <div className="flex flex-wrap gap-3">
      <input
        type="text"
        placeholder="Search business..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        className="rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 w-48"
      />

      <select
        value={channel}
        onChange={(e) => onChannelChange(e.target.value as Channel)}
        className="rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700 focus:border-blue-500 focus:outline-none"
      >
        <option value="">All Channels</option>
        <option value="whatsapp">📱 WhatsApp</option>
        <option value="facebook">📘 Facebook</option>
        <option value="email">📧 Email</option>
      </select>

      <select
        value={country}
        onChange={(e) => onCountryChange(e.target.value)}
        className="rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700 focus:border-blue-500 focus:outline-none"
      >
        <option value="">All Countries</option>
        <option value="UK">🇬🇧 UK</option>
        <option value="US">🇺🇸 US</option>
        <option value="AU">🇦🇺 Australia</option>
        <option value="CA">🇨🇦 Canada</option>
        <option value="IE">🇮🇪 Ireland</option>
        <option value="NZ">🇳🇿 New Zealand</option>
      </select>

      <select
        value={niche}
        onChange={(e) => onNicheChange(e.target.value)}
        className="rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700 focus:border-blue-500 focus:outline-none"
      >
        <option value="">All Niches</option>
        {NICHE_LIST.map((n) => (
          <option key={n} value={n}>
            {n.replace("_", " ").replace(/\b\w/g, (c) => c.toUpperCase())}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Filter city..."
        value={city}
        onChange={(e) => onCityChange(e.target.value)}
        className="rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:outline-none w-36"
      />

      <select
        value={stage}
        onChange={(e) => onStageChange(e.target.value)}
        className="rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700 focus:border-blue-500 focus:outline-none"
      >
        <option value="">All Stages</option>
        {Object.entries(STAGE_LABELS).map(([key, label]) => (
          <option key={key} value={key}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}
