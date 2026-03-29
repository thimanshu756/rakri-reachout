export function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[''"]/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function toDemoUrl(slug: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  return `${base}/${slug}`;
}
