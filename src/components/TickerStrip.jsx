"use client";

import React from "react";

export default function TickerStrip() {
  const items = [
    "Flatbed",
    "Dry Van",
    "Reefer",
    "Step Deck",
    "Power Only",
    "Hot Shot",
    "24/7 Dispatch",
    "Rate Negotiation",
    "Route Optimization",
    "Setup Packets",
    "Billing & Factoring",
  ];

  // Duplicate items twice to ensure full coverage and seamless transition
  const tickerItems = [...items, ...items, ...items];

  return (
    <div className="bg-gold w-full py-4 overflow-hidden border-y-2 border-black relative z-10 flex items-center shadow-lg">
      <div className="flex whitespace-nowrap animate-ticker">
        {tickerItems.map((item, idx) => (
          <div key={idx} className="flex items-center mx-4 sm:mx-8">
            <span className="font-bebas text-lg sm:text-2xl tracking-wider text-black font-bold uppercase">
              {item}
            </span>
            <span className="w-2.5 h-2.5 bg-black rounded-full ml-4 sm:ml-8 flex-shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}
