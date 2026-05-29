"use client";

import { ArrowRight, ShieldCheck, Truck, Clock } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  const stats = [
    { value: "500+", label: "Loads Dispatched", icon: Truck },
    { value: "98%", label: "On-Time Delivery", icon: ShieldCheck },
    { value: "24/7", label: "Dispatcher Support", icon: Clock },
  ];

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-slate-50 pt-28 overflow-hidden border-b border-slate-200/80">
      {/* Premium background grid & gradient overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent" />
      
      {/* Gold glow in the background */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <ScrollReveal delay={0.1}>
              <div className="inline-flex items-center space-x-2 bg-slate-100 border border-slate-200 px-4 py-2 rounded-full shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
                <span className="text-xs uppercase tracking-widest text-slate-600 font-bold">
                  Elite Dispatch Solutions
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} y={40}>
              <h1 className="font-bebas text-6xl sm:text-7xl xl:text-8xl tracking-wide leading-none text-slate-900">
                BEYOND THE <span className="text-amber-600 text-glow">HORIZON</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="space-y-4 max-w-2xl">
                <p className="text-xl sm:text-2xl font-bold text-slate-800 leading-relaxed">
                  &quot;Beyond the Horizon: Where Quality Loads Meet Clarity&quot;
                </p>
                <p className="text-base sm:text-lg text-slate-600 font-medium">
                  Move Freight: Not Paperwork — Real-Time Dispatch Control. We negotiate the highest rates, handle all your setup packets, and keep your trucks turning 24/7.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  onClick={(e) => handleScrollTo(e, "contact")}
                  className="group bg-gold hover:bg-gold-hover text-black px-8 py-4 font-bold uppercase tracking-wider text-sm flex items-center justify-center transition-all duration-300 transform hover:translate-y-[-2px] active:translate-y-[0px] shadow-md hover:shadow-gold/20"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#services"
                  onClick={(e) => handleScrollTo(e, "services")}
                  className="bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 px-8 py-4 font-bold uppercase tracking-wider text-sm flex items-center justify-center transition-all duration-300 transform hover:translate-y-[-2px] active:translate-y-[0px] shadow-sm"
                >
                  Our Services
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Hero Right Media Panel */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <ScrollReveal delay={0.5} y={40} className="w-full">
              <div className="bg-white border border-slate-200 p-4 rounded-2xl relative shadow-xl hover:shadow-2xl transition-all duration-500">
                {/* Decorative Accent Lines */}
                <div className="absolute top-0 left-0 w-8 h-[2px] bg-gold rounded-tl-2xl" />
                <div className="absolute top-0 left-0 w-[2px] h-8 bg-gold rounded-tl-2xl" />
                <div className="absolute bottom-0 right-0 w-8 h-[2px] bg-gold rounded-br-2xl" />
                <div className="absolute bottom-0 right-0 w-[2px] h-8 bg-gold rounded-br-2xl" />

                {/* Truck Image Container */}
                <div className="relative overflow-hidden rounded-xl h-[320px] w-full border border-slate-100">
                  <img
                    src="/images/hero-truck.png"
                    alt="SkyLine Dispatch Commercial Truck"
                    className="w-full h-full object-cover transform hover:scale-[1.03] transition-transform duration-700"
                  />
                  {/* Overlay badge with active operations */}
                  <div className="absolute bottom-4 left-4 bg-slate-900/90 text-white border border-slate-800 px-4 py-2 text-xs font-bold uppercase tracking-widest flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>24/7 Active Control</span>
                  </div>
                </div>

                {/* Stats horizontal strip under the image */}
                <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-slate-100">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <div
                        key={index}
                        className="flex flex-col items-center justify-center p-2 text-center rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors"
                      >
                        <div className="p-1.5 bg-amber-500/10 text-amber-600 rounded-md mb-1">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="font-bebas text-lg tracking-wider text-slate-800 font-bold leading-none">
                          {stat.value}
                        </span>
                        <span className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold mt-0.5">
                          {stat.label.split(" ")[0]}
                        </span>
                      </div>
                    );
                  })}
                </div>

              </div>
            </ScrollReveal>
          </div>
          
        </div>

        {/* Accreditation and Partner Logos */}
        <ScrollReveal delay={0.6} className="mt-16 pt-8 border-t border-slate-200/80">
          <p className="text-center text-xs uppercase tracking-widest text-slate-400 font-bold mb-6">
            Authorized Dispatch & Compliance Credentials
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 md:gap-16 opacity-85">
            {/* FMCSA Badge */}
            <div className="flex items-center space-x-2 bg-white border border-slate-200/80 px-4 py-2.5 shadow-sm rounded-xl">
              <span className="font-bebas text-lg text-slate-800 tracking-wider font-bold">FMCSA</span>
              <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest border border-emerald-500/20 bg-emerald-500/5 px-1.5 py-0.5 rounded">
                Licensed
              </span>
            </div>
            {/* USDOT Badge */}
            <div className="flex items-center space-x-2 bg-white border border-slate-200/80 px-4 py-2.5 shadow-sm rounded-xl">
              <span className="font-bebas text-lg text-slate-800 tracking-wider font-bold">USDOT</span>
              <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest border border-amber-500/20 bg-amber-500/5 px-1.5 py-0.5 rounded">
                Verified
              </span>
            </div>
            {/* DAT Partner */}
            <div className="flex items-center space-x-2 bg-white border border-slate-200/80 px-4 py-2.5 shadow-sm rounded-xl">
              <span className="font-bebas text-lg text-slate-800 tracking-wider font-bold">DAT</span>
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest border border-blue-500/20 bg-blue-500/5 px-1.5 py-0.5 rounded">
                Network
              </span>
            </div>
            {/* TRUCKSTOP */}
            <div className="flex items-center space-x-2 bg-white border border-slate-200/80 px-4 py-2.5 shadow-sm rounded-xl">
              <span className="font-bebas text-lg text-slate-800 tracking-wider font-bold">TRUCKSTOP</span>
              <span className="text-[10px] font-bold text-red-600 uppercase tracking-widest border border-red-500/20 bg-red-500/5 px-1.5 py-0.5 rounded">
                Integrated
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
