"use client";

import { useState } from "react";
import { Phone, Mail, Clock, Globe, Send, CheckCircle2, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    equipment: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const equipmentOptions = [
    "Flatbed",
    "Dry Van",
    "Reefer",
    "Step Deck",
    "Power Only",
    "Hot Shot",
    "Box Truck",
    "Other",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error for this field
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required";
    } else if (!/^\+?[\d\s-]{7,15}$/.test(formData.phone.trim())) {
      tempErrors.phone = "Invalid phone number format";
    }
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
      tempErrors.email = "Invalid email format";
    }
    if (!formData.equipment) tempErrors.equipment = "Please select your equipment type";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API request (delay)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        equipment: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0a0a] border-b border-[#262626] relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Contact Information */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-center">
            <div>
              <ScrollReveal delay={0.1}>
                <span className="text-gold font-bold uppercase tracking-widest text-sm">
                  Let&apos;s Connect
                </span>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <h2 className="font-bebas text-5xl sm:text-6xl tracking-wider mt-2 mb-4 text-white">
                  GET A FREE <span className="text-gold">QUOTE</span>
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <p className="text-gray-400 font-medium text-sm sm:text-base leading-relaxed">
                  Have questions about our setup, dispatch agreement, or factoring support? Fill out the form or reach out directly. Our team is standing by to get you rolling.
                </p>
              </ScrollReveal>
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              {[
                { icon: Phone, text: "(252) 327-7145", label: "Call / Text Us", href: "tel:2523277145" },
                { icon: Mail, text: "dispatch@skylinedispatch.org", label: "Email Support", href: "mailto:dispatch@skylinedispatch.org" },
                { icon: Globe, text: "skylinedispatch.org", label: "Official Website", href: "https://skylinedispatch.org" },
                { icon: Clock, text: "24/7/365 Dispatch & Operations", label: "Carrier Support", href: null },
              ].map((item, index) => {
                const Icon = item.icon;
                const Component = item.href ? "a" : "div";
                const extraProps = item.href ? { href: item.href, className: "hover:border-gold/30 transition-colors" } : {};

                return (
                  <ScrollReveal key={index} delay={0.1 * index} y={20}>
                    <Component
                      {...extraProps}
                      className={`flex items-center space-x-4 p-4 bg-[#121212] border border-[#262626] ${
                        item.href ? "hover:border-gold/30 transition-colors cursor-pointer" : ""
                      }`}
                    >
                      <div className="p-3 bg-neutral-900 border border-neutral-800 text-gold">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-gray-500 font-bold">
                          {item.label}
                        </p>
                        <p className="text-base sm:text-lg font-bold text-white tracking-wide">
                          {item.text}
                        </p>
                      </div>
                    </Component>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={0.3} y={40} className="h-full">
              <div className="bg-[#121212] border border-[#262626] p-8 md:p-10 relative box-glow h-full min-h-[500px] flex flex-col justify-center">
                {/* Decorative corners */}
                <div className="absolute top-0 left-0 w-6 h-[2px] bg-gold" />
                <div className="absolute top-0 left-0 w-[2px] h-6 bg-gold" />
                <div className="absolute bottom-0 right-0 w-6 h-[2px] bg-gold" />
                <div className="absolute bottom-0 right-0 w-[2px] h-6 bg-gold" />

                {/* Animated Success Overlay */}
                <AnimatePresence>
                  {isSuccess && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="absolute inset-0 bg-[#121212] z-20 p-8 flex flex-col items-center justify-center text-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                        className="w-20 h-20 bg-gold/10 border-2 border-gold rounded-full flex items-center justify-center text-gold mb-6"
                      >
                        <CheckCircle2 className="w-10 h-10" />
                      </motion.div>
                      <h3 className="font-bebas text-4xl tracking-wider text-white mb-2">
                        QUOTE REQUEST SENT!
                      </h3>
                      <p className="text-gray-400 font-medium max-w-sm mb-8">
                        Thank you for reaching out. One of our dedicated dispatch coordinators will contact you within the hour to discuss active rates and lanes.
                      </p>
                      <button
                        onClick={() => setIsSuccess(false)}
                        className="bg-gold hover:bg-gold-hover text-black px-8 py-3 font-bold uppercase tracking-wider text-sm transition-all"
                      >
                        Send Another Message
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Standard Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="font-bebas text-3xl tracking-wider text-white border-b border-[#262626] pb-4 mb-6">
                    CARRIER APPLICATION
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-gray-400 font-bold mb-2">
                        Company Name / Dispatcher Contact *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full bg-neutral-900 border ${
                          errors.name ? "border-red-500" : "border-neutral-800"
                        } hover:border-neutral-700 focus:border-gold px-4 py-3 text-white text-sm focus:outline-none transition-all`}
                        placeholder="John Doe Enterprises"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1 font-bold">{errors.name}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-gray-400 font-bold mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full bg-neutral-900 border ${
                          errors.phone ? "border-red-500" : "border-neutral-800"
                        } hover:border-neutral-700 focus:border-gold px-4 py-3 text-white text-sm focus:outline-none transition-all`}
                        placeholder="(555) 555-5555"
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1 font-bold">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Email */}
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-gray-400 font-bold mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full bg-neutral-900 border ${
                          errors.email ? "border-red-500" : "border-neutral-800"
                        } hover:border-neutral-700 focus:border-gold px-4 py-3 text-white text-sm focus:outline-none transition-all`}
                        placeholder="carrier@yourdomain.com"
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1 font-bold">{errors.email}</p>}
                    </div>

                    {/* Equipment Dropdown */}
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-gray-400 font-bold mb-2">
                        Equipment Type *
                      </label>
                      <div className="relative">
                        <select
                          name="equipment"
                          value={formData.equipment}
                          onChange={handleInputChange}
                          className={`w-full bg-neutral-900 border ${
                            errors.equipment ? "border-red-500" : "border-neutral-800"
                          } hover:border-neutral-700 focus:border-gold px-4 py-3 text-white text-sm focus:outline-none appearance-none transition-all`}
                        >
                          <option value="">Select Equipment</option>
                          {equipmentOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-500">
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </div>
                      {errors.equipment && (
                        <p className="text-red-500 text-xs mt-1 font-bold">{errors.equipment}</p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-400 font-bold mb-2">
                      Message / Special Lane Requirements
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-neutral-900 border border-neutral-800 hover:border-neutral-700 focus:border-gold px-4 py-3 text-white text-sm focus:outline-none transition-all resize-none"
                      placeholder="Tell us about your active lanes, home time needs, etc."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gold hover:bg-gold-hover text-black py-4 font-bold uppercase tracking-wider text-sm flex items-center justify-center transition-all duration-300 transform active:scale-[0.98]"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center space-x-2">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            box="0 0 24 24"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Verifying Carrier MC...
                      </span>
                    ) : (
                      <>
                        Submit Quote Request
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
