"use client";

import { useState } from "react";
import { testimonials } from "@/data/testimonials";

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="bg-gray-50 py-10 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-dark text-center mb-3 sm:mb-4">
          What Our Customers Say
        </h2>
        <p className="text-gray-600 text-center text-sm sm:text-base mb-6 sm:mb-12 max-w-2xl mx-auto">
          Don&apos;t just take our word for it — hear from families across Bucks County who trusted us with their moves.
        </p>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-8 lg:p-12">
            <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <span key={i} className="text-accent text-base sm:text-xl">★</span>
              ))}
            </div>
            <blockquote className="text-sm sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-4 sm:mb-6 italic">
              &ldquo;{testimonials[current].text}&rdquo;
            </blockquote>
            <div>
              <p className="font-bold text-dark text-sm sm:text-base">{testimonials[current].name}</p>
              <p className="text-xs sm:text-sm text-gray-500">{testimonials[current].location}</p>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4 sm:mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition ${
                  i === current ? "bg-primary" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Show testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
