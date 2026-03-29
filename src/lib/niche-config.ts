export interface NicheTheme {
  primary: string;
  secondary: string;
  glow: string;
  dot: string;
  darkBg: string;
  darkSurface: string;
  darkSurfaceHigh: string;
  darkBorder: string;
  lightBg: string;
  lightSurface: string;
  lightSurfaceHigh: string;
  lightBorder: string;
  gradient: string;
  gradientCta: string;
  accentText: string;
  accentTextLight: string;
}

export interface NicheConfig {
  label: string;
  primaryHex: string;
  secondaryHex: string;
  theme: NicheTheme;
  heroHeadline: string;
  heroSubtext: string;
  navLinks: { label: string; href: string }[];
  services: { title: string; description: string; icon: string }[];
  trustBadges: { label: string; icon: string }[];
  testimonials: { name: string; initials: string; text: string }[];
  problemStats: { stat: string; title: string; description: string }[];
  pricing: { name: string; price: string; popular?: boolean; features: string[]; cta: string }[];
  howItWorks: { step: number; title: string; description: string; icon: string }[];
  faqs: { question: string; answer: string }[];
  stats: { value: string; label: string }[];
  // Legacy compat (used by old demo components, will be removed)
  primaryColor?: string;
  bgLight?: string;
  gradient?: string;
  trustPoints?: { title: string; description: string }[];
}

// ═══════════════════════════════════════════════════════════
// PLUMBER
// ═══════════════════════════════════════════════════════════
const plumber: NicheConfig = {
  label: "Plumbing",
  primaryHex: "#3bbffa",
  secondaryHex: "#3adffa",
  theme: {
    primary: "#3bbffa",
    secondary: "#3adffa",
    glow: "rgba(59, 191, 250, 0.4)",
    dot: "rgba(59, 191, 250, 0.05)",
    darkBg: "#060e20",
    darkSurface: "#0f1930",
    darkSurfaceHigh: "#141f38",
    darkBorder: "rgba(64, 72, 93, 0.2)",
    lightBg: "#f8fafc",
    lightSurface: "#ffffff",
    lightSurfaceHigh: "#f1f5f9",
    lightBorder: "rgba(0, 0, 0, 0.08)",
    gradient: "from-sky-400 to-cyan-400",
    gradientCta: "from-sky-500 to-cyan-500",
    accentText: "text-sky-400",
    accentTextLight: "text-blue-600",
  },
  heroHeadline: "The Plumber Your Neighbors Already Trust",
  heroSubtext: "Licensed. Insured. Available 24/7. Serving your area with precision and speed.",
  navLinks: [
    { label: "Services", href: "#services" },
    { label: "Results", href: "#results" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  trustBadges: [
    { label: "Licensed & Insured", icon: "verified" },
    { label: "24/7 Emergency", icon: "emergency" },
    { label: "Same-Day Service", icon: "calendar_today" },
  ],
  services: [
    { title: "Emergency Repairs", description: "Burst pipes, major leaks, and sudden failures. We are on-site in under 60 minutes.", icon: "warning" },
    { title: "Drain Cleaning", description: "Deep hydro-jetting and thorough inspections to clear the most stubborn blockages.", icon: "cleaning_services" },
    { title: "Water Heaters", description: "Expert installation and repair of traditional tanks and modern tankless systems.", icon: "water_heater" },
    { title: "Pipe Repair", description: "Durable copper and PEX repiping solutions for aging homes and modern retrofits.", icon: "plumbing" },
    { title: "Bathroom Remodeling", description: "High-end fixture installation and custom plumbing for luxury bathroom upgrades.", icon: "bathtub" },
    { title: "Sewer Line", description: "Trenchless sewer repair and camera inspections to solve deep underground issues.", icon: "line_style" },
  ],
  problemStats: [
    { stat: "73%", title: "Search Online First", description: "Most local homeowners find their emergency plumbing partners via digital search before making a single call." },
    { stat: "45%", title: "Market Share Lost", description: "Your local competitors are capturing the neighbors you should be serving by being more visible." },
    { stat: "100%", title: "Reliability Gap", description: "Without a professional presence, new customers struggle to trust your business over larger corporate chains." },
  ],
  testimonials: [
    { name: "Sarah Jenkins", initials: "SJ", text: "Mike arrived within 20 minutes of my call for a burst pipe. Efficient, professional, and saved my kitchen from total flood damage!" },
    { name: "Marcus Rivera", initials: "MR", text: "The only plumber I'll call from now on. Transparent pricing and the work was impeccable. No hidden fees at all." },
    { name: "David Lawson", initials: "DL", text: "We used Mike's Plumbing for a full bathroom remodel. The attention to detail and clean-up was better than any contractor we've used." },
  ],
  pricing: [
    { name: "Basic Repair", price: "Starting at $99", features: ["Single fixture repair", "Professional diagnosis", "30-day warranty"], cta: "Get Exact Quote" },
    { name: "Full Service", price: "Starting at $249", popular: true, features: ["Whole home inspection", "Priority scheduling", "1-year service guarantee", "Fixture cleaning included"], cta: "Get Exact Quote" },
    { name: "Emergency 24/7", price: "Starting at $149", features: ["Immediate dispatch", "Night/Weekend coverage", "Rapid containment"], cta: "Get Exact Quote" },
  ],
  howItWorks: [
    { step: 1, title: "Call or Text Us", description: "Reach out anytime. Our dispatchers are ready 24/7 to hear your plumbing concerns.", icon: "call" },
    { step: 2, title: "We Diagnose & Quote", description: "Our master plumber inspects the issue and provides a clear, upfront quote before any work starts.", icon: "assignment" },
    { step: 3, title: "Problem Solved", description: "Efficient repair with high-grade parts. We clean up and leave your home better than we found it.", icon: "check_circle" },
  ],
  faqs: [
    { question: "How fast can you get here?", answer: "For emergencies in the area, our average response time is under 45 minutes. We prioritize active leaks and safety hazards." },
    { question: "Are you licensed and insured?", answer: "Yes, we are fully licensed master plumbers and carry comprehensive liability insurance to protect your property." },
    { question: "Do you offer free estimates?", answer: "We provide transparent diagnostic pricing. Once on-site, we provide a firm quote before starting any work so there are never any surprises." },
    { question: "What areas do you serve?", answer: "We cover the entire metro area and surrounding communities within a 30-mile radius." },
    { question: "Do you guarantee your work?", answer: "Absolutely. All our repairs come with a standard 1-year labor guarantee, plus whatever manufacturer warranties apply to the parts used." },
  ],
  stats: [
    { value: "200+", label: "Happy Customers" },
    { value: "4.9★", label: "Google Rating" },
    { value: "15+", label: "Years Experience" },
    { value: "30m", label: "Response Time" },
  ],
};

// ═══════════════════════════════════════════════════════════
// HVAC
// ═══════════════════════════════════════════════════════════
const hvac: NicheConfig = {
  label: "Heating & Cooling",
  primaryHex: "#f97316",
  secondaryHex: "#fbbf24",
  theme: {
    primary: "#f97316",
    secondary: "#fbbf24",
    glow: "rgba(249, 115, 22, 0.4)",
    dot: "rgba(249, 115, 22, 0.05)",
    darkBg: "#0c0a09",
    darkSurface: "#1c1917",
    darkSurfaceHigh: "#292524",
    darkBorder: "rgba(87, 83, 78, 0.2)",
    lightBg: "#fffbeb",
    lightSurface: "#ffffff",
    lightSurfaceHigh: "#fef3c7",
    lightBorder: "rgba(0, 0, 0, 0.08)",
    gradient: "from-orange-400 to-amber-400",
    gradientCta: "from-orange-500 to-amber-500",
    accentText: "text-orange-400",
    accentTextLight: "text-orange-600",
  },
  heroHeadline: "Your Home's Comfort, Perfected",
  heroSubtext: "Expert heating & cooling. EPA certified. Same-day service in your area.",
  navLinks: [
    { label: "Services", href: "#services" },
    { label: "Results", href: "#results" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  trustBadges: [
    { label: "EPA Certified", icon: "verified" },
    { label: "Same-Day Available", icon: "schedule" },
    { label: "Satisfaction Guaranteed", icon: "workspace_premium" },
  ],
  services: [
    { title: "AC Install & Repair", description: "Central air, mini-splits, and window units — installed and repaired by certified techs.", icon: "ac_unit" },
    { title: "Heating System Repair", description: "Furnace, heat pump, and boiler repair to keep your family warm all winter.", icon: "local_fire_department" },
    { title: "HVAC Maintenance Plans", description: "Preventive maintenance that extends system life and cuts energy bills.", icon: "engineering" },
    { title: "Duct Cleaning & Sealing", description: "Clean ducts mean cleaner air and lower energy costs for your home.", icon: "air" },
    { title: "Smart Thermostat Install", description: "WiFi thermostat installation for remote control and energy savings.", icon: "thermostat" },
    { title: "Indoor Air Quality", description: "Air purifiers, humidifiers, and filtration for healthy home air.", icon: "psychiatry" },
  ],
  problemStats: [
    { stat: "$1,200", title: "Wasted Per Year", description: "Average homeowner wastes on inefficient heating and cooling systems annually." },
    { stat: "89%", title: "Preventable Breakdowns", description: "Of HVAC breakdowns happen because of skipped routine maintenance." },
    { stat: "60%", title: "Search Online First", description: "Of customers search online for HVAC services before calling anyone." },
  ],
  testimonials: [
    { name: "David Kim", initials: "DK", text: "AC went out in July. They had a tech here within 2 hours and fixed it same day. Our energy bill actually went down after their tune-up!" },
    { name: "Patricia Wells", initials: "PW", text: "Installed a new furnace before winter hit. Great price, clean installation, and our house has never been warmer." },
    { name: "Robert Torres", initials: "RT", text: "Been using their maintenance plan for 2 years. No breakdowns, no surprises. Worth every penny." },
  ],
  pricing: [
    { name: "AC Tune-Up", price: "$89", features: ["Full system inspection", "Filter replacement", "Performance report"], cta: "Book Now" },
    { name: "Maintenance Plan", price: "$29/mo", popular: true, features: ["Bi-annual tune-ups", "Priority scheduling", "15% off repairs", "No overtime charges"], cta: "Get Started" },
    { name: "Emergency Repair", price: "From $149", features: ["Same-day dispatch", "Night/Weekend coverage", "Diagnostic included"], cta: "Get Quote" },
  ],
  howItWorks: [
    { step: 1, title: "Call Us", description: "Tell us about your comfort issue. Our team is ready to help.", icon: "call" },
    { step: 2, title: "We Diagnose", description: "Certified technician inspects your system and provides an upfront quote.", icon: "assignment" },
    { step: 3, title: "Enjoy Comfort", description: "We fix it right the first time. Your home stays comfortable year-round.", icon: "check_circle" },
  ],
  faqs: [
    { question: "How fast can you get here?", answer: "For emergencies, we offer same-day service. Standard appointments are usually within 24 hours." },
    { question: "Are your technicians certified?", answer: "Yes, all our technicians are EPA certified and NATE certified for refrigerant handling and HVAC service." },
    { question: "Do you offer financing?", answer: "Yes, we offer flexible financing options for major installations and replacements." },
    { question: "What areas do you serve?", answer: "We cover the entire metro area and surrounding communities." },
    { question: "What's included in the maintenance plan?", answer: "Two tune-ups per year, priority scheduling, 15% off all repairs, and no overtime charges." },
  ],
  stats: [
    { value: "350+", label: "Families Served" },
    { value: "4.8★", label: "Google Rating" },
    { value: "12+", label: "Years Experience" },
    { value: "Same Day", label: "Service Available" },
  ],
};

// ═══════════════════════════════════════════════════════════
// ROOFER
// ═══════════════════════════════════════════════════════════
const roofer: NicheConfig = {
  label: "Roofing",
  primaryHex: "#ef4444",
  secondaryHex: "#dc2626",
  theme: {
    primary: "#ef4444",
    secondary: "#dc2626",
    glow: "rgba(239, 68, 68, 0.4)",
    dot: "rgba(239, 68, 68, 0.05)",
    darkBg: "#0f172a",
    darkSurface: "#1e293b",
    darkSurfaceHigh: "#334155",
    darkBorder: "rgba(71, 85, 105, 0.2)",
    lightBg: "#f8fafc",
    lightSurface: "#ffffff",
    lightSurfaceHigh: "#f1f5f9",
    lightBorder: "rgba(0, 0, 0, 0.08)",
    gradient: "from-red-500 to-red-600",
    gradientCta: "from-red-600 to-red-700",
    accentText: "text-red-400",
    accentTextLight: "text-red-600",
  },
  heroHeadline: "Your Roof. Your Shield. Our Expertise.",
  heroSubtext: "Storm damage specialists. Licensed, bonded & insured. Free inspections.",
  navLinks: [
    { label: "Services", href: "#services" },
    { label: "Results", href: "#results" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  trustBadges: [
    { label: "Licensed & Bonded", icon: "verified" },
    { label: "Insurance Claim Experts", icon: "shield" },
    { label: "Lifetime Warranty", icon: "workspace_premium" },
  ],
  services: [
    { title: "Roof Replacement", description: "Full tear-off and replacement with premium materials and lifetime warranty.", icon: "roofing" },
    { title: "Storm Damage Repair", description: "Emergency repairs after hail, wind, and storm damage. Insurance approved.", icon: "thunderstorm" },
    { title: "Free Inspection", description: "No-cost, no-obligation professional roof inspection with detailed report.", icon: "search" },
    { title: "Shingle & Tile", description: "Expert installation of asphalt shingles, tile, and metal roofing systems.", icon: "grid_view" },
    { title: "Commercial Roofing", description: "Flat roof, TPO, and commercial roofing solutions for businesses.", icon: "business" },
    { title: "Gutter Installation", description: "Seamless gutter installation and gutter guard systems.", icon: "water_drop" },
  ],
  problemStats: [
    { stat: "$10K+", title: "Damage from 1 Shingle", description: "A single missing shingle can lead to over $10,000 in water damage to your home." },
    { stat: "40%", title: "Claims Denied", description: "Insurance claims are denied 40% more often without professional documentation." },
    { stat: "24hrs", title: "Damage Spreads Fast", description: "Every day without repairs means more damage spreading through your roof structure." },
  ],
  testimonials: [
    { name: "Michael Harris", initials: "MH", text: "Hail destroyed our roof. They handled the insurance claim AND the replacement. Made a nightmare situation easy." },
    { name: "Jennifer Scott", initials: "JS", text: "Got 3 quotes. They weren't the cheapest but their quality and lifetime warranty made it a no-brainer." },
    { name: "Carlos Rodriguez", initials: "CR", text: "Quick, professional, and cleaned up perfectly. You'd never know they were here except for the beautiful new roof." },
  ],
  pricing: [
    { name: "Inspection", price: "FREE", features: ["Full roof assessment", "Detailed photo report", "Written estimate"], cta: "Schedule Now" },
    { name: "Repair", price: "From $299", popular: true, features: ["Storm damage repair", "Leak sealing", "Insurance paperwork", "5-year warranty"], cta: "Get Estimate" },
    { name: "Full Replacement", price: "From $4,999", features: ["Premium materials", "Complete tear-off", "Lifetime warranty", "$0 down available"], cta: "Get Quote" },
  ],
  howItWorks: [
    { step: 1, title: "Free Inspection", description: "We inspect your roof and document everything with photos.", icon: "search" },
    { step: 2, title: "Transparent Quote", description: "You get a detailed estimate. We handle insurance paperwork.", icon: "assignment" },
    { step: 3, title: "Expert Repair", description: "Our crew completes the work with premium materials and warranty.", icon: "check_circle" },
  ],
  faqs: [
    { question: "Do you work with insurance?", answer: "Yes, we work directly with all major insurance companies and handle the entire claims process for you." },
    { question: "How long does a roof replacement take?", answer: "Most residential roof replacements are completed in 1-3 days depending on size and complexity." },
    { question: "What warranty do you offer?", answer: "We offer a lifetime workmanship warranty on all full replacements, plus manufacturer material warranties." },
    { question: "Is the inspection really free?", answer: "Yes, 100% free with no obligation. We provide a detailed photo report regardless of whether you hire us." },
    { question: "What if I have storm damage?", answer: "Call us immediately. We provide emergency tarping and begin the insurance documentation process right away." },
  ],
  stats: [
    { value: "180+", label: "Roofs Completed" },
    { value: "4.9★", label: "Google Rating" },
    { value: "20+", label: "Years Experience" },
    { value: "$0", label: "Down Available" },
  ],
};

// ═══════════════════════════════════════════════════════════
// ELECTRICIAN
// ═══════════════════════════════════════════════════════════
const electrician: NicheConfig = {
  label: "Electrical",
  primaryHex: "#eab308",
  secondaryHex: "#facc15",
  theme: {
    primary: "#eab308",
    secondary: "#facc15",
    glow: "rgba(234, 179, 8, 0.4)",
    dot: "rgba(234, 179, 8, 0.05)",
    darkBg: "#0f172a",
    darkSurface: "#1e293b",
    darkSurfaceHigh: "#334155",
    darkBorder: "rgba(71, 85, 105, 0.2)",
    lightBg: "#fefce8",
    lightSurface: "#ffffff",
    lightSurfaceHigh: "#fef9c3",
    lightBorder: "rgba(0, 0, 0, 0.08)",
    gradient: "from-yellow-400 to-amber-400",
    gradientCta: "from-yellow-500 to-amber-500",
    accentText: "text-yellow-400",
    accentTextLight: "text-yellow-600",
  },
  heroHeadline: "Safe. Reliable. Always On.",
  heroSubtext: "Master licensed electrician. Residential & commercial. 24/7 emergencies.",
  navLinks: [
    { label: "Services", href: "#services" },
    { label: "Results", href: "#results" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  trustBadges: [
    { label: "Master Licensed", icon: "verified" },
    { label: "24/7 Emergency", icon: "emergency" },
    { label: "Upfront Pricing", icon: "payments" },
  ],
  services: [
    { title: "Panel Upgrades", description: "Upgrade your electrical panel to safely handle modern power demands.", icon: "electrical_services" },
    { title: "Wiring & Rewiring", description: "New wiring, rewiring, and whole-home electrical system updates.", icon: "cable" },
    { title: "Lighting Installation", description: "Indoor, outdoor, recessed, and landscape lighting by certified pros.", icon: "lightbulb" },
    { title: "EV Charger Install", description: "Level 2 electric vehicle charger installation for your home garage.", icon: "ev_station" },
    { title: "Smart Home Wiring", description: "Smart switches, outlets, and home automation wiring.", icon: "smart_toy" },
    { title: "Emergency Repair", description: "24/7 emergency electrical service for outages, sparks, and hazards.", icon: "bolt" },
  ],
  problemStats: [
    { stat: "1,000+", title: "House Fires Per Year", description: "Caused by faulty wiring and outdated electrical systems across the country." },
    { stat: "40yr", title: "Panels Need Upgrading", description: "Electrical panels over 40 years old cannot safely handle modern power loads." },
    { stat: "Void", title: "Insurance Risk", description: "Unlicensed electrical work can void your homeowner's insurance coverage." },
  ],
  testimonials: [
    { name: "Tom Bradley", initials: "TB", text: "Upgraded our 1970s panel to 200 amps. Professional, passed inspection first try, and priced fairly. Highly recommend." },
    { name: "Lisa Nguyen", initials: "LN", text: "Installed an EV charger in our garage. Clean work, explained everything, and finished in half a day." },
    { name: "Kevin Drake", initials: "KD", text: "Had a scary electrical issue at midnight. They answered, came out, and fixed a faulty breaker. Lifesavers." },
  ],
  pricing: [
    { name: "Service Call", price: "$79", features: ["On-site diagnosis", "Safety assessment", "Written quote"], cta: "Book Now" },
    { name: "Panel Upgrade", price: "From $1,499", popular: true, features: ["200-amp upgrade", "Code compliant", "Permit included", "Lifetime warranty"], cta: "Get Quote" },
    { name: "EV Charger", price: "From $899", features: ["Level 2 charger", "Dedicated circuit", "Permit & inspection"], cta: "Get Quote" },
  ],
  howItWorks: [
    { step: 1, title: "Call or Text", description: "Describe your electrical issue. We're available 24/7.", icon: "call" },
    { step: 2, title: "Inspect & Quote", description: "Master electrician diagnoses the issue and provides an upfront quote.", icon: "assignment" },
    { step: 3, title: "Done Right", description: "Code-compliant work, passed inspection, and your home is safe.", icon: "check_circle" },
  ],
  faqs: [
    { question: "Are you a licensed master electrician?", answer: "Yes, we hold a master electrician license and all work is performed to code with proper permits." },
    { question: "Do you handle emergencies?", answer: "Yes, we provide 24/7 emergency electrical service. Call us anytime for sparking, outages, or burning smells." },
    { question: "How long does an EV charger install take?", answer: "Most Level 2 EV charger installations are completed in 4-6 hours, including the dedicated circuit." },
    { question: "Is your pricing upfront?", answer: "Always. You get a written quote before any work begins. No surprises, no hidden fees." },
    { question: "Do you pull permits?", answer: "Yes, all work that requires a permit is properly filed and inspected. We handle the entire process." },
  ],
  stats: [
    { value: "250+", label: "Jobs Completed" },
    { value: "4.9★", label: "Google Rating" },
    { value: "15+", label: "Years Experience" },
    { value: "100%", label: "Code Pass Rate" },
  ],
};

// ═══════════════════════════════════════════════════════════
// PEST CONTROL
// ═══════════════════════════════════════════════════════════
const pest_control: NicheConfig = {
  label: "Pest Control",
  primaryHex: "#22c55e",
  secondaryHex: "#16a34a",
  theme: {
    primary: "#22c55e",
    secondary: "#16a34a",
    glow: "rgba(34, 197, 94, 0.4)",
    dot: "rgba(34, 197, 94, 0.05)",
    darkBg: "#022c22",
    darkSurface: "#064e3b",
    darkSurfaceHigh: "#065f46",
    darkBorder: "rgba(52, 211, 153, 0.15)",
    lightBg: "#f0fdf4",
    lightSurface: "#ffffff",
    lightSurfaceHigh: "#dcfce7",
    lightBorder: "rgba(0, 0, 0, 0.08)",
    gradient: "from-green-400 to-emerald-500",
    gradientCta: "from-green-500 to-emerald-600",
    accentText: "text-green-400",
    accentTextLight: "text-green-600",
  },
  heroHeadline: "Take Back Your Home. Guaranteed.",
  heroSubtext: "Family-safe. Eco-friendly. Same-day service available.",
  navLinks: [
    { label: "Services", href: "#services" },
    { label: "Results", href: "#results" },
    { label: "Plans", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  trustBadges: [
    { label: "Licensed & Certified", icon: "verified" },
    { label: "Eco-Friendly Products", icon: "eco" },
    { label: "Family & Pet Safe", icon: "shield" },
  ],
  services: [
    { title: "Termite Treatment", description: "Protect your home's structure with professional termite elimination and prevention.", icon: "bug_report" },
    { title: "Ant & Roach Control", description: "Eliminate infestations at the source with targeted, long-lasting treatments.", icon: "pest_control" },
    { title: "Rodent Removal", description: "Humane and effective mouse and rat removal with entry point sealing.", icon: "cruelty_free" },
    { title: "Mosquito Control", description: "Yard barrier treatments that keep mosquitoes away all season long.", icon: "yard" },
    { title: "Bed Bug Treatment", description: "Heat and chemical treatments to completely eliminate bed bug infestations.", icon: "bed" },
    { title: "Wildlife Exclusion", description: "Seal entry points and safely remove raccoons, squirrels, and other wildlife.", icon: "forest" },
  ],
  problemStats: [
    { stat: "$5B", title: "Annual Termite Damage", description: "Termites cause over $5 billion in property damage across the US every year." },
    { stat: "33", title: "Bacteria Types", description: "Cockroaches can spread 33 different types of bacteria in your home." },
    { stat: "75/day", title: "Rodent Droppings", description: "A single mouse produces up to 75 droppings per day inside your walls." },
  ],
  testimonials: [
    { name: "Amanda Fisher", initials: "AF", text: "Had a terrible roach problem. One treatment and they were gone. Completely gone. Should have called sooner!" },
    { name: "Greg Parker", initials: "GP", text: "Their quarterly plan keeps our home pest-free year round. Great value and the technicians are always professional." },
    { name: "Diane Mitchell", initials: "DM", text: "Found termite damage in our garage. They treated the whole house, explained everything, and saved us thousands." },
  ],
  pricing: [
    { name: "One-Time Treatment", price: "From $149", features: ["Full home inspection", "Targeted treatment", "30-day guarantee"], cta: "Get Started" },
    { name: "Quarterly Protection", price: "$39/mo", popular: true, features: ["4 treatments/year", "Free re-treatments", "Termite monitoring", "Priority scheduling"], cta: "Get Protected" },
    { name: "Annual Shield", price: "$29/mo", features: ["12 treatments/year", "All pests covered", "Termite warranty", "Wildlife exclusion"], cta: "Best Value" },
  ],
  howItWorks: [
    { step: 1, title: "Free Inspection", description: "We inspect your property and identify all pest activity and entry points.", icon: "search" },
    { step: 2, title: "Custom Treatment", description: "Targeted, family-safe treatment plan designed for your specific situation.", icon: "assignment" },
    { step: 3, title: "Ongoing Protection", description: "Regular treatments keep pests away. If they return, so do we — free.", icon: "check_circle" },
  ],
  faqs: [
    { question: "Are your products safe for kids and pets?", answer: "Yes, we use EPA-approved products that are safe for families and pets when applied as directed." },
    { question: "How fast can you come?", answer: "We offer same-day service for urgent pest issues. Standard appointments are usually within 24 hours." },
    { question: "What's your satisfaction guarantee?", answer: "If pests return between scheduled treatments, we come back and re-treat at no additional cost." },
    { question: "Do you handle termites?", answer: "Yes, we provide both termite treatment and ongoing termite monitoring and prevention." },
    { question: "Which pests do you treat?", answer: "We handle ants, roaches, termites, rodents, mosquitoes, bed bugs, spiders, wasps, and wildlife exclusion." },
  ],
  stats: [
    { value: "300+", label: "Homes Protected" },
    { value: "4.8★", label: "Google Rating" },
    { value: "99%", label: "Satisfaction Rate" },
    { value: "Same Day", label: "Service Available" },
  ],
};

// ═══════════════════════════════════════════════════════════
// EXPORTS
// ═══════════════════════════════════════════════════════════
export const NICHE_CONFIGS: Record<string, NicheConfig> = {
  plumber,
  hvac,
  roofer,
  electrician,
  pest_control,
};

export function getNicheConfig(niche: string): NicheConfig {
  return NICHE_CONFIGS[niche] || NICHE_CONFIGS.plumber;
}
