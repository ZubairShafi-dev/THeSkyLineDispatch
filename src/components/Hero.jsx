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
    <section className="relative min-h-screen flex items-center justify-center bg-[#0a0a0a] pt-24 overflow-hidden border-b border-[#262626]">
      {/* Premium background grid & gradient overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
      
      {/* Gold glow in the background */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <ScrollReveal delay={0.1}>
              <div className="inline-flex items-center space-x-2 bg-neutral-900 border border-[#262626] px-4 py-2 rounded-full">
                <span className="w-2.5 h-2.5 rounded-full bg-gold animate-pulse" />
                <span className="text-xs uppercase tracking-widest text-gray-300 font-bold">
                  Elite Dispatch Solutions
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} y={40}>
              <h1 className="font-bebas text-6xl sm:text-7xl xl:text-8xl tracking-wide leading-tight text-white">
                BEYOND THE <span className="text-gold text-glow">HORIZON</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="space-y-4 max-w-2xl">
                <p className="text-xl sm:text-2xl font-bold text-white leading-relaxed">
                  &quot;Beyond the Horizon: Where Quality Loads Meet Clarity&quot;
                </p>
                <p className="text-base sm:text-lg text-gray-400 font-medium">
                  Move Freight: Not Paperwork — Real-Time Dispatch Control. We negotiate the highest rates, handle all your setup packets, and keep your trucks turning 24/7.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  onClick={(e) => handleScrollTo(e, "contact")}
                  className="group bg-gold hover:bg-gold-hover text-black px-8 py-4 font-bold uppercase tracking-wider text-sm flex items-center justify-center transition-all duration-300 transform hover:translate-y-[-2px] active:translate-y-[0px] shadow-lg hover:shadow-gold/20"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#services"
                  onClick={(e) => handleScrollTo(e, "services")}
                  className="bg-transparent hover:bg-white/5 border border-gray-700 hover:border-gray-500 text-white px-8 py-4 font-bold uppercase tracking-wider text-sm flex items-center justify-center transition-all duration-300 transform hover:translate-y-[-2px] active:translate-y-[0px]"
                >
                  Our Services
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Hero Right Stats Panel */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <ScrollReveal delay={0.5} y={40} className="w-full">
              <div className="bg-[#121212] border border-[#262626] p-8 rounded-none relative box-glow">
                {/* Decorative Industrial Border Lines */}
                <div className="absolute top-0 left-0 w-8 h-[1px] bg-gold" />
                <div className="absolute top-0 left-0 w-[1px] h-8 bg-gold" />
                <div className="absolute bottom-0 right-0 w-8 h-[1px] bg-gold" />
                <div className="absolute bottom-0 right-0 w-[1px] h-8 bg-gold" />

                <h3 className="font-bebas text-3xl tracking-wider text-white border-b border-[#262626] pb-4 mb-6">
                  DISPATCH METRICS
                </h3>

                <div className="space-y-6">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        className="flex items-center space-x-4 p-4 bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700/80 transition-all duration-300"
                      >
                        <div className="p-3 bg-gold/10 text-gold border border-gold/20">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-3xl font-bold tracking-tight text-white font-bebas">
                            {stat.value}
                          </p>
                          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
                            {stat.label}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>
          </div>
          
        </div>
      </div>
    </section>
  );
}
