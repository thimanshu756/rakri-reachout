export type Niche = "plumber" | "hvac" | "roofer" | "electrician" | "pest_control";

export interface LeadProps {
  businessName?: string;
  phone?: string;
  city?: string;
  rating?: number;
  reviewCount?: number;
}

export type LeadStage =
  | "new"
  | "outreach_ready"
  | "email_sent"
  | "wa_sent"
  | "followed_up_1"
  | "followed_up_2"
  | "followed_up_3"
  | "replied"
  | "call_scheduled"
  | "client"
  | "website_building"
  | "website_ready"
  | "delivered"
  | "dead";

export interface Lead {
  id: string;
  slug: string;
  businessName: string;
  phone: string;
  email: string | null;
  hasEmail: boolean;
  address: string | null;
  city: string;
  state: string | null;
  niche: string;
  rating: number;
  reviewCount: number;
  mapsUrl: string | null;
  demoUrl: string | null;
  fbUrl: string | null;
  fbFollowers: number | null;
  fbMessage: string | null;
  emailSubject: string | null;
  emailBody: string | null;
  waMessage: string | null;
  followup1: string | null;
  followup2: string | null;
  followup3: string | null;
  stage: LeadStage;
  notes: string | null;
  createdAt: Date;
  outreachAt: Date | null;
  followup1At: Date | null;
  followup2At: Date | null;
  followup3At: Date | null;
  repliedAt: Date | null;
  clientAt: Date | null;
  deliveredAt: Date | null;
}

export interface LeadStats {
  total: number;
  new: number;
  outreachReady: number;
  sent: number;
  replied: number;
  clients: number;
  dead: number;
  closeRate: number;
}

export const STAGE_LABELS: Record<LeadStage, string> = {
  new: "New",
  outreach_ready: "Ready to Send",
  email_sent: "Email Sent",
  wa_sent: "WhatsApp Sent",
  followed_up_1: "Follow-up 1",
  followed_up_2: "Follow-up 2",
  followed_up_3: "Follow-up 3",
  replied: "Replied",
  call_scheduled: "Call Scheduled",
  client: "Client",
  website_building: "Building Website",
  website_ready: "Website Ready",
  delivered: "Delivered",
  dead: "Dead",
};

export const STAGE_COLORS: Record<LeadStage, string> = {
  new: "bg-gray-100 text-gray-700",
  outreach_ready: "bg-blue-100 text-blue-700",
  email_sent: "bg-indigo-100 text-indigo-700",
  wa_sent: "bg-green-100 text-green-700",
  followed_up_1: "bg-yellow-100 text-yellow-700",
  followed_up_2: "bg-orange-100 text-orange-700",
  followed_up_3: "bg-red-100 text-red-700",
  replied: "bg-emerald-100 text-emerald-700",
  call_scheduled: "bg-purple-100 text-purple-700",
  client: "bg-green-200 text-green-800",
  website_building: "bg-cyan-100 text-cyan-700",
  website_ready: "bg-teal-100 text-teal-700",
  delivered: "bg-green-300 text-green-900",
  dead: "bg-gray-200 text-gray-500",
};

export const NICHE_LIST: Niche[] = [
  "plumber",
  "hvac",
  "roofer",
  "electrician",
  "pest_control",
];
