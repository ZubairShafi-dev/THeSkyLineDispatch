"use client";

import { Star, Quote } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Testimonials() {
  const reviews = [
    {
      stars: 5,
      quote: "The SkyLine Dispatch has changed how I run my trucking business. My dispatcher handles all setup packets and negotiates the highest rates. My weekly gross is up 25% since joining them.",
      author: "Marcus T.",
      title: "Owner-Operator (Dry Van)",
    },
    {
      stars: 5,
      quote: "No forced dispatch is what sold me, but the dedication of my dispatcher is what keeps me here. They know the exact lanes I want and always secure premium backhauls to keep me moving.",
      author: "Sarah L.",
      title: "Carrier Owner (3 Trucks, Reefer)",
    },
    {
      stars: 5,
      quote: "Their 6% flat fee is worth every penny. I don't deal with broker phone calls, check-calls, or setup confirmation sheets anymore. I just drive, deliver, and get paid.",
      author: "Dave K.",
      title: "Owner-Operator (Flatbed)",
    },
  ];

  return (
    <section id="reviews" className="py-24 bg-[#0a0a0a] border-b border-[#262626] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal delay={0.1}>
            <span className="text-gold font-bold uppercase tracking-widest text-sm">
              Carrier Reviews
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h2 className="font-bebas text-5xl sm:text-6xl tracking-wider mt-2 mb-4 text-white">
              WHAT DRIVERS <span className="text-gold">SAY</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-gray-400 text-lg">
              Hear from the independent owner-operators and fleet owners who partner with Skyline to power their operations.
            </p>
          </ScrollReveal>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <ScrollReveal
              key={idx}
              delay={idx * 0.15}
              y={30}
              className="bg-[#121212] border border-[#262626] p-8 flex flex-col justify-between relative group hover:border-gold/30 transition-all duration-300"
            >
              {/* Corner quote icon */}
              <div className="absolute top-6 right-8 text-neutral-800 group-hover:text-gold/15 transition-colors duration-300">
                <Quote className="w-10 h-10" />
              </div>

              <div>
                {/* Stars */}
                <div className="flex items-center space-x-1 mb-6 text-gold">
                  {[...Array(review.stars)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-gray-300 text-sm leading-relaxed mb-8 italic relative z-10">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>

              {/* Author details */}
              <div className="border-t border-[#262626] pt-4 mt-auto">
                <h4 className="font-bold text-white uppercase tracking-wider text-base">
                  {review.author}
                </h4>
                <p className="text-xs text-gold font-semibold uppercase tracking-widest mt-0.5">
                  {review.title}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
