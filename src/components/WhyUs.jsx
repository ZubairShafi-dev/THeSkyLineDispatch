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
    <section id="why-us" className="py-24 bg-slate-50 border-b border-slate-200/80 relative overflow-hidden">
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
                  className="bg-white border border-slate-200 p-6 flex items-start space-x-4 relative overflow-hidden group shadow-md hover:shadow-lg hover:border-amber-500/30 transition-all duration-300 rounded-2xl"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${card.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  <div className="p-3 bg-slate-50 border border-slate-200 text-amber-600 flex-shrink-0 relative z-10 group-hover:border-amber-500/30 transition-colors rounded-xl shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="font-bebas text-2xl tracking-wider text-slate-800 mb-1 group-hover:text-amber-600 transition-colors duration-200">
                      {card.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed font-medium">
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
              <span className="text-amber-600 font-bold uppercase tracking-widest text-sm">
                Why Partner With Us
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h2 className="font-bebas text-5xl sm:text-6xl tracking-wider text-slate-900 leading-tight">
                WE WORK FOR THE DRIVER, <br className="hidden sm:inline" />
                <span className="text-amber-600">NOT THE BROKER</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                At The SkyLine Dispatch, we prioritize your profit margins. Brokers try to get freight moved as cheaply as possible — we fight to secure the highest-paying rates in the market. Since our rate is a transparent percentage fee, we are highly motivated to see your truck thrive.
              </p>
            </ScrollReveal>

            {/* Fleet Image Showcase */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="my-6 rounded-2xl overflow-hidden h-[180px] w-full border border-slate-200 shadow-md relative group"
            >
              <img 
                src="/images/dispatch-fleet.png"
                alt="SkyLine Commercial Fleet"
                className="w-full h-full object-cover transform hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-transparent flex items-end p-4">
                <span className="text-white font-bebas text-xl tracking-wider uppercase font-semibold">
                  Serving Fleet Owners & Independent Operators
                </span>
              </div>
            </motion.div>

            {/* Bullet Points */}
            <ul className="space-y-4">
              {benefits.map((benefit, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx, duration: 0.5 }}
                  className="flex items-start space-x-3 text-sm text-slate-700"
                >
                  <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span className="font-medium leading-relaxed">{benefit}</span>
                </motion.li>
              ))}
            </ul>

            <ScrollReveal delay={0.4} className="pt-4">
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, "contact")}
                className="bg-gold hover:bg-gold-hover text-black px-8 py-4 font-bold uppercase tracking-wider text-sm inline-flex items-center justify-center transition-all duration-300 transform hover:translate-y-[-2px] active:translate-y-[0px] shadow-md"
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
