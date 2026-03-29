import { NicheConfig } from "@/lib/niche-config";

interface Props {
  businessName: string;
  phone: string;
  city: string;
  config: NicheConfig;
}

export default function Footer({ businessName, phone, city, config }: Props) {
  const phoneDigits = phone.replace(/[^\d+]/g, "");

  return (
    <footer
      className="text-white"
      style={{ backgroundColor: config.secondaryHex === "#1E293B" ? "#0F172A" : config.primaryHex }}
    >
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          {/* Business info */}
          <div>
            <h3 className="text-xl font-bold">{businessName}</h3>
            <p className="mt-2 text-white/70">
              Professional {config.label.toLowerCase()} services in {city} and
              surrounding areas.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold uppercase tracking-wider text-white/50 text-sm">
              Quick Links
            </h4>
            <ul className="mt-3 space-y-2">
              <li>
                <a href="#" className="text-white/80 hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold uppercase tracking-wider text-white/50 text-sm">
              Contact Us
            </h4>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href={`tel:${phoneDigits}`}
                  className="text-white/80 hover:text-white transition"
                >
                  {phone}
                </a>
              </li>
              <li className="text-white/70">{city}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/20 pt-6 text-center text-sm text-white/50">
          <p>
            &copy; {new Date().getFullYear()} {businessName}. All rights reserved.
          </p>
          <p className="mt-1">
            Website by{" "}
            <a
              href="https://rakriai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition"
            >
              Rakriai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
