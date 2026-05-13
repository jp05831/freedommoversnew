import { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import LocationCard from "@/components/LocationCard";
import { locations } from "@/data/locations";

export const metadata: Metadata = {
  title: "Areas Served | Freedom Moving",
  description:
    "Freedom Moving proudly serves Doylestown, New Hope, Newtown, Yardley, Langhorne, and communities throughout Bucks County, PA and the greater Philadelphia area.",
};

/** Featured communities shown on the main areas-served page */
const featuredCommunities = [
  { name: "Doylestown Borough", citySlug: "doylestown", anchor: "doylestown-borough" },
  { name: "Buckingham", citySlug: "doylestown", anchor: "buckingham" },
  { name: "New Britain", citySlug: "doylestown", anchor: "new-britain" },
  { name: "New Hope Borough", citySlug: "new-hope", anchor: "new-hope-borough" },
  { name: "Solebury Township", citySlug: "new-hope", anchor: "solebury-township" },
  { name: "Upper Makefield", citySlug: "new-hope", anchor: "upper-makefield" },
  { name: "Newtown Borough", citySlug: "newtown", anchor: "newtown-borough" },
  { name: "Newtown Township", citySlug: "newtown", anchor: "newtown-township" },
  { name: "Wrightstown", citySlug: "newtown", anchor: "wrightstown" },
];

export default function AreasServedPage() {
  return (
    <>
      <Hero
        title="Areas We Serve in Bucks County"
        subtitle="From Doylestown to Yardley, New Hope to Langhorne — we proudly serve communities throughout Bucks County and the greater Philadelphia area."
        showCTA={false}
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Cities */}
          <h2 className="text-2xl font-bold text-dark mb-6">Towns We Serve</h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            We provide full-service professional moving throughout Bucks County&apos;s towns and townships.
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
            communities and neighborhoods throughout Bucks County.
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
