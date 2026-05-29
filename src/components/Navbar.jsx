"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-us" },
    { name: "Process", href: "#process" },
    { name: "Reviews", href: "#reviews" },
  ];

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md py-4 border-b border-slate-200/85 shadow-md"
            : "bg-transparent py-6 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => handleScrollTo(e, "")}
            className="flex items-center space-x-2 group"
          >
            <span className="font-bebas text-2xl sm:text-3xl tracking-wider text-slate-900 group-hover:text-amber-600 transition-colors duration-200">
              THE <span className="text-amber-600">SKYLINE</span> DISPATCH
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href.substring(1))}
                className="text-slate-700 hover:text-amber-600 uppercase tracking-wider font-semibold text-sm transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Call / Contact CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:2523277145"
              className="flex items-center text-slate-700 hover:text-amber-600 font-semibold text-sm tracking-wider uppercase transition-colors"
            >
              <Phone className="w-4 h-4 mr-2 text-amber-600" />
              (252) 327-7145
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "contact")}
              className="bg-gold hover:bg-gold-hover text-black px-6 py-2.5 font-bold uppercase tracking-wider text-sm transition-all duration-200 transform hover:scale-[1.03] active:scale-[0.98]"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-800 hover:text-amber-600 focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 left-0 w-full h-screen bg-white z-40 flex flex-col justify-center px-6 pt-20"
          >
            <nav className="flex flex-col space-y-6 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href.substring(1))}
                  className="font-bebas text-4xl tracking-wider text-slate-800 hover:text-amber-600 transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-slate-100 my-2" />
              <div className="flex flex-col items-center space-y-4">
                <a
                  href="tel:2523277145"
                  className="flex items-center text-slate-700 hover:text-amber-600 font-semibold text-lg tracking-wider uppercase transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2 text-amber-600" />
                  (252) 327-7145
                </a>
                <a
                  href="#contact"
                  onClick={(e) => handleScrollTo(e, "contact")}
                  className="w-full max-w-xs bg-gold hover:bg-gold-hover text-black py-4 font-bold uppercase tracking-wider text-base text-center transition-all duration-200"
                >
                  Get a Quote
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
