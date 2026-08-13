"use client";

import React from "react";
import { Phone, MapPin, MessageSquare, Clock, Navigation } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="location" className="py-20 bg-stone-900 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-500/30">
            Visit Us in Pinson
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white tracking-tight">
            Schedule your pet's appointment today.
          </h2>
          <p className="text-lg text-stone-300">
            Call or text us directly to discuss your dog's grooming options and book a convenient slot.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Business Info Card */}
          <div className="lg:col-span-5 bg-stone-800/90 rounded-3xl p-8 border border-stone-700/80 space-y-8 shadow-xl">
            <div>
              <h3 className="text-2xl font-bold font-serif text-white mb-2">
                Comfort Grooming
              </h3>
              <p className="text-xs font-bold uppercase tracking-widest text-amber-400">
                Comfort Grooming & Daycare LLC
              </p>
            </div>

            <div className="space-y-4 text-stone-200">
              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">Salon Address</p>
                  <p className="text-stone-300">4289 Main Street</p>
                  <p className="text-stone-300">Pinson, AL 35126</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-2">
                <Phone className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">Phone & Text</p>
                  <a href="tel:+12056237991" className="text-amber-300 font-bold hover:underline">
                    +1 (205) 623-7991
                  </a>
                  <p className="text-xs text-stone-400">Call or send a text to book</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-2">
                <MessageSquare className="w-5 h-5 text-blue-400 shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">Facebook Presence</p>
                  <a
                    href="https://www.facebook.com/profile.php?id=100063620959419"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-300 text-sm hover:underline"
                  >
                    Comfort Grooming and Daycare LLC
                  </a>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 space-y-3">
              <a
                href="tel:+12056237991"
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-amber-500 text-stone-950 font-bold text-base hover:bg-amber-400 transition-colors shadow-lg"
              >
                <Phone className="w-5 h-5" />
                <span>Call (205) 623-7991</span>
              </a>

              <a
                href="https://maps.google.com/?q=4289+Main+St,+Pinson,+AL+35126"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-stone-700 text-stone-100 font-medium text-sm hover:bg-stone-600 transition-colors"
              >
                <Navigation className="w-4 h-4 text-amber-300" />
                <span>Get Directions (Google Maps)</span>
              </a>
            </div>
          </div>

          {/* Operating Hours & Location Map Card */}
          <div className="lg:col-span-7 bg-stone-800/90 rounded-3xl p-8 border border-stone-700/80 space-y-8 shadow-xl">
            
            <div>
              <div className="flex items-center gap-2 text-amber-400 mb-2">
                <Clock className="w-5 h-5" />
                <h3 className="text-xl font-bold font-serif text-white">
                  Operating Hours
                </h3>
              </div>
              <p className="text-xs text-stone-400">
                Please call in advance to confirm daily appointment availability.
              </p>
            </div>

            <div className="divide-y divide-stone-700/60 text-sm">
              <div className="py-2.5 flex justify-between">
                <span className="text-stone-300 font-medium">Tuesday</span>
                <span className="text-white font-semibold">8:00 AM – 3:00 PM</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-stone-300 font-medium">Wednesday</span>
                <span className="text-white font-semibold">8:00 AM – 2:00 PM</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-stone-300 font-medium">Thursday</span>
                <span className="text-white font-semibold">8:00 AM – 3:00 PM</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-stone-300 font-medium">Friday</span>
                <span className="text-white font-semibold">8:00 AM – 3:00 PM</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-stone-300 font-medium">Saturday</span>
                <span className="text-white font-semibold">8:00 AM – 12:00 PM</span>
              </div>
              <div className="py-2.5 flex justify-between text-stone-500">
                <span>Sunday & Monday</span>
                <span>Closed</span>
              </div>
            </div>

            {/* Visual Location Frame */}
            <div className="p-6 rounded-2xl bg-stone-900/90 border border-stone-700 text-center space-y-3">
              <span className="block text-2xl">📍</span>
              <p className="text-white font-bold text-base">4289 Main Street, Pinson, AL 35126</p>
              <p className="text-xs text-stone-400">Located conveniently in downtown Pinson for easy drop-off and pick-up.</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
