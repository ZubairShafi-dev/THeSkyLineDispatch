"use client";

import ScrollReveal from "./ScrollReveal";

export default function CtaBand() {
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
    <section className="bg-gold py-16 text-black border-y-2 border-black relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal delay={0.1}>
          <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl tracking-wider mb-6 text-black">
            READY TO HIT THE ROAD?
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="text-black font-semibold text-lg sm:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            Stop wasting hours checking boards and filling out setup packets. Let our expert dispatchers keep your trucks booked at the highest market rates.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, "contact")}
            className="inline-block bg-[#0a0a0a] hover:bg-[#121212] text-white px-10 py-4 font-bold uppercase tracking-widest text-sm transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.98] shadow-2xl"
          >
            Get a Free Quote Now
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
