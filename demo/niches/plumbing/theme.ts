// Stitch Design System: "The Architectural Flow" - Premium Residential Plumbing
// Project: 9744232577303482128

export const colors = {
  primary: "#011545",
  primaryContainer: "#1A2B5A",
  onPrimary: "#ffffff",
  onPrimaryContainer: "#8493C9",

  secondary: "#7E5700",
  secondaryContainer: "#FDC668",
  onSecondary: "#ffffff",
  onSecondaryContainer: "#765100",

  tertiary: "#091B26",
  tertiaryContainer: "#1F303B",
  tertiaryFixed: "#D3E5F4",

  background: "#FEF9F1",
  surface: "#FEF9F1",
  surfaceDim: "#DED9D2",
  surfaceContainerLowest: "#FFFFFF",
  surfaceContainerLow: "#F8F3EB",
  surfaceContainer: "#F2EDE5",
  surfaceContainerHigh: "#ECE8E0",
  surfaceContainerHighest: "#E7E2DA",

  onBackground: "#1D1C17",
  onSurface: "#1D1C17",
  onSurfaceVariant: "#45464F",

  outline: "#757680",
  outlineVariant: "#C5C6D0",

  error: "#BA1A1A",
  inverseSurface: "#32302B",
  inversePrimary: "#B5C5FD",
} as const;

export const shadows = {
  ambient: "0 4px 24px rgba(26,43,90,0.06)",
  hover: "0 8px 32px rgba(26,43,90,0.10)",
  glow: "0 0 40px rgba(26,43,90,0.08)",
} as const;

export const ghostBorder = "1px solid rgba(197, 198, 208, 0.15)";

export const glassNav = {
  background: "rgba(255, 255, 255, 0.8)",
  backdropFilter: "blur(20px)",
} as const;

// Nav links for plumbing landing page
export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Emergency", href: "#contact" },
] as const;

// Services data
export const services = [
  { title: "Emergency Repairs", description: "Burst pipes, major leaks, and sudden failures handled within 30 minutes of your call.", icon: "plumbing" },
  { title: "Drain Cleaning", description: "Advanced hydro-jetting and camera inspections to clear the most stubborn blockages.", icon: "water_drop" },
  { title: "Water Heaters", description: "Expert installation and repair of traditional tanks and modern tankless systems.", icon: "heat_pump" },
  { title: "Pipe Repair", description: "Durable copper and PEX repiping solutions for aging homes and modern retrofits.", icon: "valve" },
  { title: "Bathroom Remodeling", description: "High-end fixture installation and custom plumbing for luxury bathroom upgrades.", icon: "bathtub" },
  { title: "Sewer Service", description: "Trenchless sewer repair and camera inspections to solve deep underground issues.", icon: "gas_meter" },
] as const;

// Why choose us pillars
export const pillars = [
  { title: "Unmatched Precision", description: "Every connection, seal, and fixture is installed with architectural-grade accuracy.", icon: "precision_manufacturing" },
  { title: "Smart Diagnostics", description: "Camera inspections and leak detection technology identify problems before they escalate.", icon: "troubleshoot" },
  { title: "Fixed for Life", description: "Our lifetime craftsmanship warranty means you never pay twice for the same repair.", icon: "verified" },
  { title: "VIP Support", description: "Dedicated account manager, priority scheduling, and 24/7 emergency response.", icon: "support_agent" },
] as const;

// Testimonials
export const testimonials = [
  {
    name: "Jonathan Sterling",
    location: "Homeowner, Kensington",
    text: "I have used several plumbing companies over the years, Plumbing Excellence is in a league of their own. Professional, clean, and extremely knowledgeable.",
    rating: 5,
  },
  {
    name: "Sarah Jenkins",
    location: "Westside Heights",
    text: "The response time was incredible. They fixed my burst pipe in under an hour during a Sunday evening. Truly life-savers!",
    rating: 5,
  },
  {
    name: "Robert Miller",
    location: "Downtown Lofts",
    text: "Impeccable attention to detail during our bathroom remodel. The finishes are perfect.",
    rating: 5,
  },
  {
    name: "Elena Rodriguez",
    location: "East Village",
    text: "Fair pricing and very respectful of my property. They used boot covers and cleaned up perfectly.",
    rating: 5,
  },
] as const;

// Stats
export const stats = [
  { value: "4.9/5", label: "Rating", sublabel: "2,400+ reviews" },
  { value: "4,500+", label: "Projects" },
  { value: "13,000+", label: "Customers" },
  { value: "15+", label: "Years Experience" },
  { value: "30 Min", label: "Response" },
] as const;

// FAQ items (landing page)
export const faqs = [
  { question: "Do you offer emergency 24/7 services?", answer: "Yes, our emergency dispatch team is available around the clock, 365 days a year. We guarantee a response within 30 minutes for all emergency calls." },
  { question: "How long does a typical repair take?", answer: "Most standard repairs are completed within 2-4 hours. Complex jobs like repiping or bathroom remodels are scoped during our initial consultation with a clear timeline." },
  { question: "Are your plumbers licensed and insured?", answer: "Absolutely. Every technician on our team is a licensed master plumber with full liability insurance and workers compensation coverage." },
  { question: "What is your service area?", answer: "We serve the entire metropolitan area and surrounding communities within a 30-mile radius, including Kensington, Westside Heights, Downtown, and East Village." },
] as const;

// Blog/insights
export const insights = [
  {
    title: "5 Signs Your Water Heater Needs Immediate Attention",
    description: "Don't wait for a flood. Learn how to spot early warning signs of heater failure before it becomes an emergency.",
    category: "Maintenance",
  },
  {
    title: "Innovative Ways to Reduce Home Water Consumption",
    description: "Discover modern fixtures and habits that can save you money and protect the environment simultaneously.",
    category: "Sustainability",
  },
] as const;

// Contact page FAQ
export const contactFaqs = [
  { question: "What is your typical response time?", answer: "For emergencies, our average response time is under 30 minutes. Standard appointments are typically scheduled within 24 hours of your call." },
  { question: "Can I get an estimate over the phone?", answer: "We can provide a general range over the phone, but for an accurate quote, we prefer to send a technician to assess the situation in person at no charge." },
  { question: "What does your warranty cover?", answer: "Our 1-year work guarantee covers all labor and craftsmanship. If anything we installed or repaired fails within 365 days, we fix it completely free of charge." },
] as const;

// Contact info
export const contactInfo = {
  phone: "(555) 123-4567",
  email: "info@plumbingexcellence.com",
  address: "123 Artisan Way, Kensington, NY",
  hours: {
    weekday: "Mon - Fri: 8:00 AM - 6:00 PM",
    saturday: "Saturday: 9:00 AM - 4:00 PM",
    sunday: "Sunday: Emergency Only",
    emergency: "24/7 Emergency Service Available",
  },
} as const;
