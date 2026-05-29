"use client";

import { Truck, FileText, Coins, MapPin, Compass, ShieldAlert } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Services() {
  const servicesList = [
    {
      title: "Full Truck Dispatch",
      description: "We work directly with top brokers to secure premium, high-paying loads that match your specific lane and rate preferences. Minimize downtime and maximize your revenue per mile.",
      icon: Truck,
    },
    {
      title: "Paperwork & BOL",
      description: "Skip the administrative headache. We handle all broker setup packets, W-9s, insurance certificates, rate confirmations, and Bill of Lading (BOL) submission quickly and accurately.",
      icon: FileText,
    },
    {
      title: "Rate Negotiation",
      description: "Our experienced dispatchers negotiate directly with brokers to secure the absolute top dollar for your equipment. We know current market rates and demand patterns.",
      icon: Coins,
    },
    {
      title: "Real-Time Tracking",
      description: "We manage check calls, coordinates reporting, and real-time load updates. Rest easy while we keep your brokers and shippers updated on transit status without bothering you.",
      icon: MapPin,
    },
    {
      title: "Lane Planning",
      description: "Eliminate costly deadhead miles. We plan out your entire week's schedule, chaining high-value backhauls to ensure your truck is always loaded and heading in the right direction.",
      icon: Compass,
    },
    {
      title: "Compliance Support",
      description: "Stay compliant and protect your active authority. We monitor broker safety ratings, alert you to regulatory changes, and verify credit approvals before booking any load.",
      icon: ShieldAlert,
    },
  ];

  return (
    <section id="services" className="py-24 bg-white border-b border-slate-200/80 relative">
      {/* Decorative background grid effect */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal delay={0.1}>
            <span className="text-amber-600 font-bold uppercase tracking-widest text-sm">
              Our Capabilities
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h2 className="font-bebas text-5xl sm:text-6xl tracking-wider mt-2 mb-4 text-slate-900">
              PREMIUM DISPATCH <span className="text-amber-600">SERVICES</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-slate-600 text-lg font-medium">
              Maximize your earnings and keep your wheels rolling. We handle the heavy lifting behind the scenes so you can focus strictly on the road.
            </p>
          </ScrollReveal>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <ScrollReveal
                key={index}
                delay={0.1 * index}
                y={30}
                className="group relative bg-slate-50 border border-slate-200/80 p-8 hover:border-amber-500/50 hover:bg-white transition-all duration-300 transform hover:translate-y-[-4px] box-glow-hover flex flex-col justify-between rounded-2xl shadow-sm hover:shadow-md"
              >
                {/* Accent Corner Lines */}
                <div className="absolute top-0 right-0 w-4 h-[2px] bg-transparent group-hover:bg-amber-500 transition-colors duration-300 rounded-tr-2xl" />
                <div className="absolute top-0 right-0 w-[2px] h-4 bg-transparent group-hover:bg-amber-500 transition-colors duration-300 rounded-tr-2xl" />

                <div>
                  {/* Icon Container */}
                  <div className="w-14 h-14 bg-white border border-slate-250/70 flex items-center justify-center text-amber-600 mb-6 relative overflow-hidden group-hover:border-amber-500/30 transition-colors duration-300 rounded-xl shadow-sm">
                    <div className="absolute inset-0 bg-amber-500/5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    <IconComponent className="w-6 h-6 z-10" />
                  </div>

                  {/* Title */}
                  <h3 className="font-bebas text-2xl tracking-wider text-slate-800 mb-3 group-hover:text-amber-600 transition-colors duration-200">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Border Accent */}
                <div className="w-full h-[2px] bg-slate-200 group-hover:bg-amber-500 transition-colors duration-300 mt-auto rounded-full" />
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
