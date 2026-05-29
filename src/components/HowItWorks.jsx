"use client";

import ScrollReveal from "./ScrollReveal";
import { PhoneCall, FileEdit, Search, Award } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Free Consultation",
      desc: "Connect with us. We'll discuss your equipment type, home time preferences, ideal lanes, and target rate-per-mile goals.",
      icon: PhoneCall,
    },
    {
      num: "02",
      title: "Sign Agreement",
      desc: "Complete our quick dispatcher service package. Submit your active MC authority, W-9, and certificate of insurance.",
      icon: FileEdit,
    },
    {
      num: "03",
      title: "We Find Loads",
      desc: "Your dedicated dispatcher checks high-paying boards, conducts rate checks, negotiates top rates, and handles setup packets.",
      icon: Search,
    },
    {
      num: "04",
      title: "You Get Paid",
      desc: "Drive the load, deliver safely, and submit your BOL. Invoice the broker directly or through your factoring partner instantly.",
      icon: Award,
    },
  ];

  return (
    <section id="process" className="py-24 bg-[#0a0a0a] border-b border-[#262626] relative overflow-hidden">
      {/* Decorative side lines */}
      <div className="absolute top-0 left-0 w-32 h-full border-r border-[#262626] opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-32 h-full border-l border-[#262626] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <ScrollReveal delay={0.1}>
            <span className="text-gold font-bold uppercase tracking-widest text-sm">
              Our Roadmap
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h2 className="font-bebas text-5xl sm:text-6xl tracking-wider mt-2 mb-4 text-white">
              HOW IT <span className="text-gold">WORKS</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-gray-400 text-lg">
              Four simple steps to stream-line your operation. We focus on booking the freight and managing paperwork, keeping your wheels rolling smoothly.
            </p>
          </ScrollReveal>
        </div>

        {/* Steps Timeline Grid */}
        <div className="relative">
          {/* Horizontal connecting line (hidden on mobile, visible on desktop) */}
          <div className="hidden lg:block absolute top-[44px] left-12 right-12 h-[2px] bg-neutral-800 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <ScrollReveal
                  key={idx}
                  delay={idx * 0.15}
                  y={40}
                  className="flex flex-col items-center lg:items-start text-center lg:text-left group"
                >
                  {/* Step Circle & Icon */}
                  <div className="w-20 h-20 bg-neutral-900 border-2 border-neutral-800 rounded-full flex items-center justify-center text-gold mb-6 relative group-hover:border-gold transition-colors duration-300">
                    <span className="absolute -top-2 -right-2 bg-gold text-black font-bebas text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-black">
                      {step.num}
                    </span>
                    <Icon className="w-8 h-8" />
                  </div>

                  {/* Step Title */}
                  <h3 className="font-bebas text-2xl tracking-wider text-white mb-3 group-hover:text-gold transition-colors duration-200">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-gray-400 text-sm leading-relaxed max-w-xs font-medium">
                    {step.desc}
                  </p>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
