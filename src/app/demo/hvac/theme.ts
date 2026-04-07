// Stitch Design System: "Precision & Comfort" - Premium Residential HVAC
// Project: 11827631757237575325

export const colors = {
  primary: "#a13b05",
  primaryContainer: "#c1521f",
  onPrimary: "#ffffff",
  onPrimaryContainer: "#f4c4a0",

  secondary: "#805600",
  secondaryContainer: "#fdb741",
  onSecondary: "#ffffff",
  onSecondaryContainer: "#765100",

  tertiary: "#68594d",
  tertiaryContainer: "#8b7268",
  tertiaryFixed: "#d3c4b8",

  background: "#fcf9f4",
  surface: "#fcf9f4",
  surfaceDim: "#ded9d2",
  surfaceContainerLowest: "#ffffff",
  surfaceContainerLow: "#f8f3ea",
  surfaceContainer: "#f2ede4",
  surfaceContainerHigh: "#ece8e0",
  surfaceContainerHighest: "#e7e2da",

  onBackground: "#1c1c19",
  onSurface: "#1c1c19",
  onSurfaceVariant: "#45464F",

  outline: "#8b7268",
  outlineVariant: "#c5c6d0",

  error: "#ba1a1a",
  inverseSurface: "#32302b",
  inversePrimary: "#f4c4a0",
} as const;

export const shadows = {
  ambient: "0 4px 24px rgba(161,59,5,0.06)",
  hover: "0 8px 32px rgba(161,59,5,0.10)",
  glow: "0 0 40px rgba(161,59,5,0.08)",
} as const;

export const ghostBorder = "1px solid rgba(139, 114, 104, 0.15)";

export const glassNav = {
  background: "rgba(252, 249, 244, 0.8)",
  backdropFilter: "blur(12px)",
} as const;

export const primaryGradient = "linear-gradient(135deg, #a13b05, #c1521f)";

// Nav links for HVAC landing page
export const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#whyus" },
  { label: "FAQ", href: "#faq" },
  { label: "Testimonials", href: "#testimonials" },
] as const;

// Services data (3 image-based cards)
export const services = [
  {
    title: "Air Conditioning Systems",
    description: "From precision-tuned central air to cutting-edge ductless systems, we engineer cool comfort tailored to your home's unique architecture and airflow needs.",
    tags: ["#HVACServices", "#Efficiency"],
    icon: "ac_unit",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWKsY3-UOJmblQk4l-20Tu3lpTf6OFyXBsSL-6eA3WA0Ki_avxJ2As_NZ2A5X9IxTSF67x9pFGa9ec7kZrNVtgwuW3w3byMeFtrrzKMs7mIhdHvvq6NYy2FAHZIQmnCo129npUF9FkRdMS8jyDdtO-YzvqBmZstlH0qj9a9AyyLx0CtcNgNNDQgU7ms4Fe0Zn_CbiXeciOhaSrpGWJ96jE66bGYZ-HZoNQ6vkzqdyszSg8-2eI-J2CkbenAA30VgRHiznbQOQ14M9s",
  },
  {
    title: "Heating & Furnaces",
    description: "From modern heat pumps to high-output gas furnaces, we ensure your home remains a sanctuary during the harshest winters. Our technicians calibrate every system for peak thermal efficiency.",
    tags: ["Active Service"],
    icon: "local_fire_department",
    link: "View Heating Packages",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0hTaTxTnLR4JY75EIZ8Wf5_O0B_2oRqvbVwjujaS_0sl_ro_4u7t3Ufc5ALCqJ7c71PW7qcAcbpvjsm2Bh-FA2ZvL7dpOCwyAmEe4PfaOBSlWOayL7rU5Zmd-LJnLqlinhs8JROWpn1jYvgkePMuFj6Jdu90QMDv8O_Y0OytqchAPsbp0QgRd8jcFVaxmS-xjob5CKP80pI4G08Yq941GIAHdLu0GejucAq9gVOJnZorC4lqx5ogbMisMBa_e6mvPTDl72V1w9J88",
    featured: true,
  },
  {
    title: "Indoor Air Quality",
    description: "Integrated filtration, UV purification, and humidity control systems that transform your living space into a true sanctuary free from allergens and pollutants.",
    tags: ["#CleanAir"],
    icon: "air",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMfK8xnrqGQcFWn1dztWyHf1SN8qBhV4g_NUMCDEZ2XQIDKPi58QTzbIpn_uqdiPLVAQH9ynokf5mEGxBDTobzGGqTcU5BJ0cAbV10xv62nkIScc1rtoKNTW-pqlCLCAdf6pogvjmPCoa18a2ZhMWuC-q-0s0fRRiISg8yntwyjBkvIsUtlf8livu5HKbkKQFTRV-XP1r75_QYxdRMF9ALxiIO5hBjfEF7IN69f0GobHqEJpQYxmVglbBUJjFmBRL2jr6grNDBlH0C",
  },
] as const;

// Why choose us / advantages
export const advantages = [
  {
    title: "Your Comfort, Our Commitment",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqiMonGqUicRlxtKoB-xX-hWGX-P9M_cltaPaEhdLAwmK4ox5QbYW91YoUqHRhJu1DDNfpXst4m-9LHrv4PKpg8kH-WbJjqQReJfkcbwxwJGK0xU2zfBjagJ4JlJEiE29H6bDeszUxZl2du3XeN816twY6rfSya4JVf0hTdMm6fzvUXXIL_QwU4rfXHJtFw_cBv8z3W1KDtfxaaKJOd1X2wd7P9fuDc_YffCL6sK9Yhu68Hm7gDfQsff1ndxe8TYE4mSeY6tQsWE2J",
  },
  {
    title: "Experience Comfort Like Never",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4Qdohjf7-df47WXivApboKipgesIwFHw_82aZjzBWQa4-TEE2Hq447zMHCLRBjx2d06NuiYO_AEsa147KiA3wfuHtXJ2HDOZLlOYqPaQumPnh4pckVvPg0ojKnzwKYukfp-p9DbFkv5mdE-vwmdZwfEXlGhL8X4o8z3nK1K6YliEIMQZt-fHQv46U8ioh5LUPGEKAyMb4ikctZuPsA-c6kF3jrmd6z4dvSEiGHMF0Z0sCU6aa7zNKidBYvWjsFnNRbYVUxBlvs32z",
  },
  {
    title: "Smart Comfort For Every Season",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMWkDfkZXHL8auPOyma90fzmwNlU6aeiJ8xp1gfXjIFhZ9JfIY8x-dNnn0gJK2FxQ_zPCq18Ni2jkLjUm5iHIyLOFb1H6oveccyICIaxVm1t9beiFk-0EfS-N-8VoUI5O4c0JaloiBob60G1XSOKABRfMkFKVYlkvlDVjxXDAC5t8fDKJ7IDSndu9ocljp7sJsX-5ZEEVym2T2Wfo-Zxq54ONF8jhrvhdOhrbfYCNtY_7uYu-UPrIrIOS38x8m0LqlcCQhwacoDD1f",
  },
  {
    title: "Energy Efficient Solutions",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlRihllP-v1uzNkGyJHEOiIF9JvGZ22v2Uobsw74fqDGFq4w0lTxr_yY6nmHKB2nGC4ck1x4kKE0_LumMs5Gedl2sGgbF7uSiu3ONS63pmWQUG2YfbPebexQ4haXU8WLeQxjPVmF82DKt_71s-3_aitAmrg0ZQVdDnQhELQcbtEOzKh8ccaPqcR5rzC2Es3yyR5wwiASJUclwolTcdkauyr2xxdEg1mB6XPGPjVfa2i0FCeLG34qFxYx1O8zsWypCMk2Mb6s7aIzuW",
  },
] as const;

// Testimonials
export const testimonials = [
  {
    name: "Sarah J.",
    role: "Homeowner",
    text: "The most professional trade company I've ever hired. From the clean uniforms to the precise installation, everything was perfect.",
    rating: 5,
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfieleqtue6xitkbI_x7QCkYLSjZAlLvuiMbI7kx7wk9k6BW88nNoHetiGRYEzdQEYVL4UatiWG65zFFJl2s4hFRN6MLU3AdYqqsmj1gJxw0owu84y8aNMTxgucWulQuC__pnViyMOBMYM5zILvpHJOU7ZsOiRVa3B76EXW7dH6TUi-0JpHMcasYs_GWjtpZJR3jhy4PBrFrvJ9romyuwVycpOR3TTkrXq29GDqZ1sN7v5DPniVKFQqqhNzGYdtjkmtsnyxktaYUrW",
  },
  {
    name: "David R.",
    role: "Real Estate Developer",
    text: "They fixed an airflow issue that three other companies couldn't solve. Their diagnostic equipment is truly next level.",
    rating: 5,
    src: "https://ui-avatars.com/api/?name=David+R&background=a13b05&color=fff&size=96&font-size=0.4&bold=true",
  },
  {
    name: "Elena M.",
    role: "Architect",
    text: "Their maintenance plan is a lifesaver. I never have to worry about my furnace in the winter anymore. Highly recommend.",
    rating: 5,
    src: "https://ui-avatars.com/api/?name=Elena+M&background=68594d&color=fff&size=96&font-size=0.4&bold=true",
  },
] as const;

// Featured testimonial (for QuoteBanner)
export const featuredTestimonial = {
  name: "Marcus Thornton",
  text: "The team at Precision & Comfort treated our HVAC overhaul like a mastercraft project. Our energy bills have dropped by 30% and the air quality is noticeably superior.",
  rating: 5,
  src: "https://ui-avatars.com/api/?name=Marcus+Thornton&background=805600&color=fff&size=96&font-size=0.4&bold=true",
} as const;

// Stats
export const stats = [
  { value: "Same-Day", label: "Availability", sublabel: "Service", icon: "calendar_today" },
  { value: "350+", label: "Families Served" },
  { value: "4.8", label: "Star Rating" },
  { value: "12+", label: "Years Experience" },
  { value: "$1,200", label: "Avg. Annual Savings" },
] as const;

// FAQ items (landing page)
export const faqs = [
  { question: "How often should I service my HVAC system?", answer: "We recommend a professional tune-up at least twice a year — once in the spring for your AC and once in the fall for your heating system. Regular maintenance extends system life and maintains peak efficiency." },
  { question: "What are the signs I need a new AC?", answer: "If your system is older than 10-15 years, requires frequent repairs, or if your energy bills have spiked significantly, it may be time for a precision replacement." },
  { question: "Do you offer emergency weekend services?", answer: "Absolutely. Our emergency response team is available 24/7, including all weekends and holidays. We guarantee a technician at your door within 60 minutes for critical failures." },
  { question: "Can smart thermostats save me money?", answer: "Yes! A properly configured smart thermostat can reduce your energy bills by 10-23%. We install and program leading brands like Nest, Ecobee, and Honeywell for optimal savings." },
] as const;

// Blog/insights
export const insights = [
  {
    title: "5 Signs Your Heat Pump Needs a Seasonal Tune-Up",
    description: "Discover the subtle indicators that your high-efficiency system is working harder than it should before the peak season hits...",
    category: "Maintenance",
    date: "May 12, 2024",
    author: "Tech Lead James",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIFQtj3y9XJxHjVa32gTuW2zeNUQyt7X18urGc9u717BjEwpXysXUKe5qM7V8LfRwNN-a5tmtbwwmx74kNgIkxG4fimqubUbOAAKBOt25ny9jFccxWqUGl5fmTJdPaBKQIsOAW04PQfWmc76-iOkQP6H96HgLLRye8EDX2GmDsh9phB4kv20y2tFr7m5VijSpCHPzFJqv48qzNyz0skdvRACdfGVuM7D8ekf_eTad64AAMqWVEhvwMqkT6cYU-0zLxBUgAR8DH0NME",
  },
  {
    title: "The Architect's Guide to Better Indoor Air Quality",
    description: "How integrated filtration systems can transform your living space into a true sanctuary free from allergens and pollution...",
    category: "Air Quality",
    date: "May 05, 2024",
    author: "Specialist Sarah",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtVcY0rwZ_Ceicn10ZnpyfIjBo5Cqj77CelWFS4FH9d29GemGd0UQSAuKgNesVkkcnBFLwkBph-_ZYDVXnef3VaYDQWt8sWrxVXcIyeAiOKdOAeXGOZJofekLfLNC9JcmQPLWI1VeIWM1OWQ3b8pt-c_akf715eDS6dOfXPpdhtbIOmHnVzHgnQtDUjzsYbA5OtoYw7A3xvy89KycTQO0joxO9C4t3MNMN29ywmQkpgYdT7I8BjbG8NXfKaZAE8tHzPFa5LfUwvJG4",
  },
  {
    title: "Maximizing SEER2 Ratings in New Construction",
    description: "What every new homeowner needs to know about the latest energy regulations and choosing the right equipment for long-term ROI...",
    category: "Energy",
    date: "April 28, 2024",
    author: "Founder Eric",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBDIqrtaFRb-8VgsLa1IaY8qWwU5Ykgr0NG9T-JTXi_FA4im5CfQrvFVBFcHRkMlfBvKCQqy63fRw_nYgTtS5n5t8EMUU0CTQ1HcRVvCvZRYKdTrVV5tBldPprWlNdkMnSkGCMaVr6sd9KHZDJ9dyykrPoB9ofjxHGFUItpiQyC8I3NC_uujdPIX3rBmAzDYRZnaBOYEtzSlngT2xC6kfzK1lSbcDtApczgkUzKkNCIRB4QooFaeUKdIekidVeJT5gK2_BuMJCF_dWq",
  },
] as const;

// Hero images
export const heroImages = [
  "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&h=600&fit=crop",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBu_d1iz1ZPsQl2AM4b0MhkIPfxGGeGSKq3fZ-oojPpWp2ccQpJnDsMj8ZFT1o5YesbazsA4L4f6c4vUQrexj_H7rkCEHgFdFGuKGu6PFvc9rEm4XSFdAoErGFH64tRqegrsX9OYFATlIhAB3NlNFSqLDnfCp-x10NVyeiwkAa4VrpWmX2vIZQ8xmvt6dpugsZZn06gpz4qNHlf9CarOo9mLSFzr1qUNddjwMooxkZkN2IUDtaDWJHqVWasdUNz-Il40MZzQHWIaEZo",
  "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=600&fit=crop",
] as const;

// About images
export const aboutImages = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBnJqjfuUqsBMpVBIHG6qkabdUIejU91gzI8GvrjkMO9CWqh6NfNW2dL_Uq-YWZ4TUvxstNuBXKD8pZJOo4N7SnD945fEPJn0uulTQRYaV2nCDkyKjNL5Em4JRVcK5f9tNJNFqBma4YEw5HhrBcuxE06bjkQA1Wvqqd6oeI7aTzSIJq2sTfM1vBObGwOhJ_f8bqSlGmKY4QDyQB13We7x7wm1voCzCicqQW09dcKAyrLhEWc-k4qeokPzOUN-Sqk3pWmMM554MbOuMv",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD55TdcRcej81GoFGY2KVRwg3-PjUGPOQBxLpsdznZnwLLE0s80NTX30PWmMT-Iv0YROWDcktAHBZU5zvD-w6nxKT_nUR2nJsxc1JHgAX-ULwdLVT1v1Bu-mhH60AIjevNqrrXG-wwcU7x8SRv1EfArHhIGTgIjLGCi05sjOYXCPdSmwd1aNCHHhNiX0f-Z3dH20rezWI912que2J2I2IAFdxifa1GS5DgvWCzUfboRcrOGdvOY0L6DBxY4hHRZezZIt3H-6QRuS2a4",
] as const;

// Instagram images
export const instagramImages = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD3W40hIfStq0Xh0lAiKI0m9o7sUReWKEQVPl5PuDx9t7Q4YVkRzAcIHzPPh0SA31QgqexJJ6VF09gLT1Adg4aWol4Um4r0CtKcRU6dy5Sa9zKmLJUcgqw5GhyZx4qSfhXBrzBUzVbRIbLlnfL-xx7pghsA-yj2ofw0DVSlAVk1mIJpSYRx5LwlImSHQUmzDl0wk7zViW5Gr2htqu1a_LHVNsoe2tIzlh1xlh3uiVwTHdunwsk_7dypYGHcuorsrW3dBm1LHQn1nzQC",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCsu6FAdi-vlO_ieXix6HLT95LWsIZMOX3svgmTwkVFA9xZKA7hU4dj9kD1wSAWJFZUFBbagk2BQA6-oZxpqDWv7a9qq6KvcZn_R7hTJstExXQnock2IKeFij9bttxe-AJOcuuvE_CjvaJYKBVDkByR1uhFLdo2lc7iznTMqzz6uK4LS25STdMqn0mSFE-2DcEo7L0femt6Y_o3A6D-btDgxx0HsGCtQEOxm6GdQ2WTjyyk10eYyRRhVlpz6ef5k25X6i1mSskZjCj2",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDsNiJtfniwCsDY_sTIOWixfUpL3cZjg5DRYXJNwqvr-TBkUSUS8Gjl6ctaAByRBTGl0lssukFHQkxBMhSx0wiFnKIB11Pr1TMM6N1v6jBrv8WeCYWeIaNU7tnl9-6XWHpEhQLBRV5KA9ul3H4f1pNKk-xOj7Xggdsf6oTM26aFXJ0LgAY0RtXdDBGOfN9W1P2lcG4PK3QJ3OFG_e8nXbRXvVKfsoN-RxwIQSdiGYCXc4gGORxWzPdDokrhI0GLaUGOscnEewDT5Ao_",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDUicKDrMlYTnFOqIOluQ4JPWO4YLbJ74u2lNIaGxm_IIy0699QkMktFKsC9RRCkqouuW02AD0V1yvgunPKh2UtvsQYQwtWnCMuIrJ1c0w9NstV3y0NzaR8BfWSlw3P1JUH49oF3esi6Oi2GPkCfGO-GNJlIT3HR72ir52oLUyjRuK_EDWM_vnfMnmaRs13ph_4vUL4rKXvOnypaTRQ5v1LMPx70DxuOfRJq3LEixkfLtYPmtAOOKAyhgh_ubvha2E5H05yzhTnwLdy",
] as const;

// Contact page FAQ
export const contactFaqs = [
  { question: "What is your typical response time?", answer: "For emergencies, our average response time is under 60 minutes. Standard appointments are typically scheduled within 24 hours of your call." },
  { question: "Can I get an estimate over the phone?", answer: "We can provide a general range over the phone, but for an accurate quote, we prefer to send a technician to assess the situation in person at no charge." },
  { question: "What does your warranty cover?", answer: "Our comprehensive warranty covers all labor and craftsmanship. If anything we installed or repaired fails within the warranty period, we fix it completely free of charge." },
] as const;

// Contact info
export const contactInfo = {
  phone: "(555) 234-8900",
  email: "service@precisioncomfort.hvac",
  address: "1224 HVAC Plaza Suite 400, Comfort City, ST 90210",
  hours: {
    weekday: "Mon - Fri: 8:00 AM - 8:00 PM",
    saturday: "Sat - Sun: 9:00 AM - 5:00 PM",
    emergency: "24/7 Emergency Response",
  },
} as const;
