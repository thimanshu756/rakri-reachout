export function getWhatsAppLink(phone: string, message: string): string {
  // Strip everything except digits and leading +
  const digits = phone.replace(/[^\d+]/g, "").replace(/^\+/, "");
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${digits}?text=${encodedMessage}`;
}

export function formatPhoneDisplay(phone: string): string {
  // Return cleaned phone for display
  return phone.replace(/[^\d+\-() ]/g, "").trim();
}
