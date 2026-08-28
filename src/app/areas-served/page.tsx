import { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import LocationCard from "@/components/LocationCard";
import { locations } from "@/data/locations";

export const metadata: Metadata = {
  title: "Areas Served | Freedom Moving",
  description:
    "Freedom Moving proudly serves Miramar, Pembroke Pines, Hollywood, Fort Lauderdale, Davie, Plantation, Sunrise, Weston, and Broward County, Florida.",
};

/** Featured communities shown on the main areas-served page */
const featuredCommunities = [
  { name: "Silver Shores", citySlug: "miramar", anchor: "silver-shores" },
  { name: "Monarch Lakes", citySlug: "miramar", anchor: "monarch-lakes" },
  { name: "Vizcaya", citySlug: "miramar", anchor: "vizcaya" },
  { name: "Chapel Trail", citySlug: "pembroke-pines", anchor: "chapel-trail" },
  { name: "Pembroke Falls", citySlug: "pembroke-pines", anchor: "pembroke-falls" },
  { name: "Century Village", citySlug: "pembroke-pines", anchor: "century-village" },
  { name: "Hollywood Hills", citySlug: "hollywood", anchor: "hollywood-hills" },
  { name: "Emerald Hills", citySlug: "hollywood", anchor: "emerald-hills" },
  { name: "Hollywood Beach", citySlug: "hollywood", anchor: "hollywood-beach" },
];

export default function AreasServedPage() {
  return (
    <>
      <Hero
        title="Areas We Serve in Broward County"
        subtitle="Based in Miramar and serving Pembroke Pines, Hollywood, Fort Lauderdale, Davie, Plantation, Sunrise, Weston, and nearby South Florida communities."
        showCTA={false}
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Cities */}
          <h2 className="text-2xl font-bold text-dark mb-6">Towns We Serve</h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            We provide full-service professional moving throughout Broward County&apos;s cities and neighborhoods.
            Click any location below to learn more about our services in your area.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
            {locations.map((loc) => (
              <LocationCard
                key={loc.slug}
                name={loc.name}
                slug={loc.slug}
                adjective={loc.adjective}
              />
            ))}
          </div>

          {/* Communities & Areas */}
          <h2 className="text-2xl font-bold text-dark mb-6">
            Communities &amp; Neighborhoods We Serve
          </h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            In addition to the main towns we serve, we also provide moving services in select
            communities and neighborhoods throughout Broward County.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {featuredCommunities.map((c) => (
              <a
                key={`${c.citySlug}-${c.anchor}`}
                href={`/areas-served/${c.citySlug}#${c.anchor}`}
                className="group bg-white rounded-lg p-5 shadow-sm border border-gray-100 hover:shadow-md hover:border-primary/20 transition-all"
              >
                <h3 className="font-bold text-lg text-dark group-hover:text-primary transition">
                  {c.name}
                </h3>
                <span className="inline-block mt-3 text-primary text-base font-medium group-hover:translate-x-1 transition-transform">
                  Learn More →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
