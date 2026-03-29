"use client";

import { LeadStage, STAGE_LABELS, STAGE_COLORS } from "@/lib/types";

interface Props {
  currentStage: LeadStage;
  onStageChange: (stage: LeadStage) => void;
}

export default function StageDropdown({ currentStage, onStageChange }: Props) {
  return (
    <select
      value={currentStage}
      onChange={(e) => onStageChange(e.target.value as LeadStage)}
      className={`rounded-full px-3 py-1 text-xs font-semibold ${STAGE_COLORS[currentStage]} border-0 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500`}
    >
      {Object.entries(STAGE_LABELS).map(([key, label]) => (
        <option key={key} value={key}>
          {label}
        </option>
      ))}
    </select>
  );
}
