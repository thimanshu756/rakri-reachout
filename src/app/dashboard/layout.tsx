import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | RakriAI",
  description: "Manage your leads and outreach",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
