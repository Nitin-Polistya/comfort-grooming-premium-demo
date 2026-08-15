"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, MessageSquare, Navigation } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="location" className="py-24 bg-stone-950 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-500/30">
            Visit Us in Pinson
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white tracking-tight">
            Contact Comfort Grooming today.
          </h2>
          <p className="text-lg text-stone-300">
            Call or send a text message directly to discuss the right grooming option for your pet and schedule an appointment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 bg-stone-900 rounded-3xl p-8 lg:p-10 border border-stone-800 space-y-8 shadow-2xl flex flex-col justify-between"
          >
            <div>
              <h3 className="text-3xl font-bold font-serif text-white mb-2">
                Comfort Grooming
              </h3>
              <p className="text-xs font-bold uppercase tracking-widest text-amber-400">
                Comfort Grooming and Daycare LLC
              </p>
            </div>

            <div className="space-y-6 text-stone-200">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-white text-base">Salon Address</p>
                  <p className="text-stone-300 text-lg font-medium">4298 Main St</p>
                  <p className="text-stone-400">Pinson, AL 35126</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-white text-base">Phone & Text</p>
                  <a href="tel:+12056237991" className="text-amber-300 font-bold hover:underline text-xl">
                    +1 (205) 623-7991
                  </a>
                  <p className="text-xs text-stone-400 mt-0.5">Call or send a text message</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-white text-base">Facebook Page</p>
                  <a
                    href="https://www.facebook.com/p/Comfort-Grooming-and-Daycare-LLC-100047778857853/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-300 text-sm hover:underline"
                  >
                    Comfort Grooming and Daycare LLC
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4 space-y-3">
              <a
                href="tel:+12056237991"
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-amber-500 text-stone-950 font-bold text-base hover:bg-amber-400 transition-colors shadow-lg"
              >
                <Phone className="w-5 h-5" />
                <span>Call Comfort Grooming</span>
              </a>

              <a
                href="https://www.facebook.com/p/Comfort-Grooming-and-Daycare-LLC-100047778857853/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-500 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Message on Facebook</span>
              </a>

              <a
                href="https://maps.google.com/?q=4298+Main+St,+Pinson,+AL+35126"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-stone-800 text-stone-200 font-medium text-sm hover:bg-stone-700 transition-colors"
              >
                <Navigation className="w-4 h-4 text-amber-300" />
                <span>Get Directions (Google Maps)</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 bg-stone-900 rounded-3xl p-8 lg:p-10 border border-stone-800 flex flex-col justify-between shadow-2xl"
          >
            <div className="space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-3xl font-bold">
                📍
              </div>
              <h3 className="text-3xl font-bold font-serif text-white">
                Located on Main Street
              </h3>
              <p className="text-stone-300 text-base leading-relaxed">
                Comfort Grooming is located at <strong className="text-white">4298 Main St, Pinson, AL 35126</strong>.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-stone-950 border border-stone-800 space-y-3 mt-8">
              <p className="text-amber-300 font-semibold text-sm">📅 How to Book Your Appointment</p>
              <p className="text-xs text-stone-300 leading-relaxed">
                Call or text us directly at <strong className="text-white">+1 (205) 623-7991</strong> or send a message on Facebook to discuss your dog's coat and schedule a convenient grooming time.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
