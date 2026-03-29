import { NicheConfig } from "@/lib/niche-config";

interface Props {
  businessName: string;
  phone: string;
  city: string;
  config: NicheConfig;
}

export default function PremiumFooter({ businessName, phone, city, config }: Props) {
  const phoneDigits = phone.replace(/[^\d+]/g, "");

  return (
    <footer className="bg-stone-950 border-t border-stone-800/30">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 px-6 md:px-12 py-16 md:py-24 w-full max-w-screen-2xl mx-auto">
        {/* Brand */}
        <div className="space-y-4">
          <div
            className="text-lg font-bold uppercase tracking-widest"
            style={{ color: config.theme.primary }}
          >
            {businessName}
          </div>
          <p className="text-sm tracking-wide leading-relaxed text-stone-500">
            Professional {config.label.toLowerCase()} services for your home.
            Premium quality, honest pricing.
          </p>
        </div>

        {/* Service Areas */}
        <div>
          <h4
            className="font-bold uppercase tracking-widest text-xs mb-6"
            style={{ color: config.theme.primary }}
          >
            Service Areas
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <span className="text-stone-500 hover:text-stone-300 transition-colors">
                {city} &amp; Surrounding Areas
              </span>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4
            className="font-bold uppercase tracking-widest text-xs mb-6"
            style={{ color: config.theme.primary }}
          >
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm">
            {config.navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-stone-500 hover:text-stone-300 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h4
            className="font-bold uppercase tracking-widest text-xs mb-6"
            style={{ color: config.theme.primary }}
          >
            Contact Info
          </h4>
          <div className="flex items-center gap-3 text-stone-500 text-sm">
            <span className="material-symbols-outlined text-lg" style={{ color: config.theme.primary }}>
              location_on
            </span>
            <p>{city}</p>
          </div>
          <div className="flex items-center gap-3 text-stone-500 text-sm">
            <span className="material-symbols-outlined text-lg" style={{ color: config.theme.primary }}>
              call
            </span>
            <a href={`tel:${phoneDigits}`} className="hover:text-stone-300 transition-colors">
              {phone}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row justify-between items-center border-t border-stone-800/20 gap-4">
        <p className="text-xs tracking-wide text-stone-600">
          &copy; {new Date().getFullYear()} {businessName}. All rights reserved.
        </p>
        <p className="text-xs tracking-wide text-stone-600">
          Website by{" "}
          <a
            href="https://rakriai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-400 font-bold hover:text-stone-200 transition-colors"
          >
            Rakriai
          </a>
        </p>
      </div>
    </footer>
  );
}
