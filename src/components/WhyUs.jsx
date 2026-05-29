"use client";

import { CheckCircle2, Zap, UserCheck, DollarSign } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

export default function WhyUs() {
  const cards = [
    {
      title: "Fast Load Booking",
      desc: "Get booked in minutes, not hours. Instant credit checks on brokers protect your miles.",
      icon: Zap,
      gradient: "from-amber-500/20 to-transparent",
    },
    {
      title: "Dedicated Dispatcher",
      desc: "One single point of contact. Work with a dispatcher who knows your equipment, lane preferences, and schedules.",
      icon: UserCheck,
      gradient: "from-amber-600/20 to-transparent",
    },
    {
      title: "Transparent 6% Fee",
      desc: "No sign-up fees, no cancellation fees, and no contracts. Only pay 6% of the load gross. Pure clarity.",
      icon: DollarSign,
      gradient: "from-amber-700/20 to-transparent",
    },
  ];

  const benefits = [
    "High-paying loads tailored to your equipment type (Flatbed, Dry Van, Reefer, Step Deck)",
    "Complete back-office administrative management (packet setup, insurance certificates, billing)",
    "Zero forced dispatch — you retain 100% freedom to accept or decline any load we find",
    "Instant invoicing and credit verification setup to ensure rapid factoring payouts",
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
    <section id="why-us" className="py-24 bg-[#0a0a0a] border-b border-[#262626] relative overflow-hidden">
      {/* Light backdrop glow */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Column 1: Floating Cards (Left) */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-center">
            {cards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-[#121212] border border-[#262626] p-6 flex items-start space-x-4 relative overflow-hidden group shadow-lg hover:border-gold/30 transition-all duration-300"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="p-3 bg-neutral-900 border border-neutral-800 text-gold flex-shrink-0 relative z-10 group-hover:border-gold/30 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="font-bebas text-2xl tracking-wider text-white mb-1 group-hover:text-gold transition-colors duration-200">
                      {card.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed font-medium">
                      {card.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Column 2: Content & Slogans (Right) */}
          <div className="lg:col-span-6 space-y-8">
            <ScrollReveal delay={0.1}>
              <span className="text-gold font-bold uppercase tracking-widest text-sm">
                Why Partner With Us
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h2 className="font-bebas text-5xl sm:text-6xl tracking-wider text-white leading-tight">
                WE WORK FOR THE DRIVER, <br className="hidden sm:inline" />
                <span className="text-gold">NOT THE BROKER</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                At The SkyLine Dispatch, we prioritize your profit margins. Brokers try to get freight moved as cheaply as possible — we fight to secure the highest-paying rates in the market. Since our rate is a transparent percentage fee, we are highly motivated to see your truck thrive.
              </p>
            </ScrollReveal>

            {/* Bullet Points */}
            <ul className="space-y-4">
              {benefits.map((benefit, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx, duration: 0.5 }}
                  className="flex items-start space-x-3 text-sm text-gray-300"
                >
                  <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="font-medium leading-relaxed">{benefit}</span>
                </motion.li>
              ))}
            </ul>

            <ScrollReveal delay={0.4} className="pt-4">
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, "contact")}
                className="bg-gold hover:bg-gold-hover text-black px-8 py-4 font-bold uppercase tracking-wider text-sm inline-flex items-center justify-center transition-all duration-300 transform hover:translate-y-[-2px] active:translate-y-[0px] shadow-lg"
              >
                Start Running With Skyline
              </a>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
