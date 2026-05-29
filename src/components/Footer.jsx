"use client";

import { ArrowUp } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = id === "" ? 0 : 80;
      const elementPosition = element ? element.getBoundingClientRect().top : 0;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-[#050505] border-t border-[#262626] pt-16 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Footers Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#1f1f1f]">
          
          {/* Logo & Tagline */}
          <div className="lg:col-span-5 space-y-6">
            <a href="#" onClick={(e) => handleScrollTo(e, "")} className="inline-block">
              <span className="font-bebas text-3xl sm:text-4xl tracking-wider text-white">
                THE <span className="text-gold">SKYLINE</span> DISPATCH
              </span>
            </a>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed font-medium">
              &quot;Beyond the Horizon: Where Quality Loads Meet Clarity.&quot;
            </p>
            <p className="text-gray-500 text-xs leading-relaxed max-w-sm">
              We streamline trucking operations for owner-operators and carrier fleets. Book high-paying loads, skip the paperwork, and get real-time dispatch support.
            </p>
            
            {/* Social Icons */}
            <div className="flex space-x-4 pt-2">
              {[
                {
                  href: "https://facebook.com",
                  svg: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  ),
                },
                {
                  href: "https://twitter.com",
                  svg: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ),
                },
                {
                  href: "https://instagram.com",
                  svg: (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  ),
                },
                {
                  href: "https://linkedin.com",
                  svg: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  ),
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-neutral-900 border border-neutral-850 text-gray-400 hover:text-gold hover:border-gold/50 flex items-center justify-center transition-all duration-300"
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Services Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-bebas text-xl tracking-wider text-white">
              DISPATCH SERVICES
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                "Full Truck Dispatch",
                "Paperwork & BOL",
                "Rate Negotiation",
                "Real-Time Tracking",
                "Lane Planning",
                "Compliance Support",
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href="#services"
                    onClick={(e) => handleScrollTo(e, "services")}
                    className="hover:text-gold transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-bebas text-xl tracking-wider text-white">
              COMPANY
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                { name: "Why Partner Us", id: "why-us" },
                { name: "Our Process", id: "process" },
                { name: "Client Reviews", id: "reviews" },
                { name: "Carrier Quote", id: "contact" },
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleScrollTo(e, link.id)}
                    className="hover:text-gold transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-bebas text-xl tracking-wider text-white">
              LEGAL
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {["Privacy Policy", "Terms of Service", "Carrier Agreement", "Broker Agreement"].map(
                (link, idx) => (
                  <li key={idx}>
                    <span className="cursor-not-allowed hover:text-gray-500 transition-colors duration-200">
                      {link}
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>

        </div>

        {/* Footer Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 font-medium">
          <p>
            © {currentYear} The SkyLine Dispatch. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 sm:mt-0">
            <span>skylinedispatch.org</span>
            <button
              onClick={(e) => handleScrollTo(e, "")}
              className="bg-neutral-900 border border-neutral-800 text-gray-400 hover:text-gold p-2 hover:border-gold/50 transition-all duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
