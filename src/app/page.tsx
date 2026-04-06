import { redirect } from "next/navigation";

export default function Home() {
  const isProduction = process.env.NODE_ENV === "production";
  redirect(isProduction ? "https://rakriai.com" : "/dashboard");
}
