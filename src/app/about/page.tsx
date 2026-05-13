import { Metadata } from "next";
import Hero from "@/components/Hero";
import { Star } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Freedom Moving — a family-owned Bucks County moving company voted Best of Bucks 4 years in a row.",
};

export default function AboutPage() {
  return (
    <>
      <Hero
        title="Bucks County Moving Company | Freedom Moving"
        subtitle="Freedom Moving is a trusted Bucks County moving company providing residential, commercial, and local moving services throughout Pennsylvania — delivering reliable, professional moves backed by years of experience."
        showCTA={false}
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark mb-6">
            Our Story – Built in Bucks County, Trusted Throughout Pennsylvania
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Founded in Bucks County, Pennsylvania, Freedom Moving was built on a simple
              mission: deliver dependable, high-quality moving services that people can trust. Over the
              years, we&apos;ve grown from a small local crew into one of the most recognized
              moving companies in Bucks County, serving areas including Doylestown, New Hope,
              Newtown, Yardley, Langhorne, and throughout the greater Philadelphia region.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              As a family-owned and operated moving company, every move we complete reflects directly on
              our name. That level of accountability drives everything we do — from how we hire and train
              our crews to the care we take with every piece of furniture, every box, and every family
              heirloom.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              We believe a service-based business is built on reputation. That&apos;s why our team is
              committed to delivering every move with professionalism, precision, and care — ensuring each
              experience truly reflects what Freedom Moving stands for.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mb-12">
            {[
              { number: "4x", label: "Best of Bucks Winner" },
              { number: "4.9", label: "Star Google Rating" },
              { number: "1000s", label: "Families Moved" },
            ].map((stat) => (
              <div key={stat.label} className="text-center bg-gray-50 rounded-xl p-6">
                <p className="text-4xl font-bold text-primary">{stat.number}</p>
                <p className="text-gray-600 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-dark mb-6">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              {
                title: "Integrity",
                desc: "Honest quotes, clear communication, and no surprises. What we say is what you get.",
              },
              {
                title: "Professionalism",
                desc: "Our trained crews show up on time, work efficiently, and treat your home with respect.",
              },
              {
                title: "Care",
                desc: "We handle your belongings like they're our own — because your trust means everything to us.",
              },
              {
                title: "Community",
                desc: "We're proud to serve Bucks County and the greater Philadelphia area. This is our home too.",
              },
            ].map((value) => (
              <div key={value.title} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-dark text-lg mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>

          {/* Serving Bucks County Section */}
          <h2 className="text-3xl font-bold text-dark mb-6">Serving Bucks County and Surrounding Areas</h2>
          <p className="text-gray-600 leading-relaxed mb-12">
            If you&apos;re searching for a reliable moving company in Bucks County, our team is ready
            to help. Whether you need a local move, long-distance relocation, or help with a specialty item, Freedom Moving delivers a seamless experience from start to finish.
          </p>

          {/* Best of Bucks */}
          <h2 className="text-3xl font-bold text-dark mb-6">Best of Bucks — 4 Years Running</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We&apos;re proud to be voted Best of Bucks County 4 years in a row, reflecting our commitment to
            excellence, trust, and customer satisfaction. This award is a testament to the way
            we conduct business — honestly and with integrity.
          </p>
          <div className="bg-gray-50 rounded-xl p-6 inline-block border border-gray-100 mb-8">
            <p className="text-sm text-gray-500">Community Voted</p>
            <p className="font-semibold text-dark">🏆 Best of Bucks County — 4 Years in a Row</p>
          </div>

          {/* Google Rating */}
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4].map((i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
                <Star className="w-6 h-6 text-yellow-400" style={{ clipPath: "inset(0 20% 0 0)" }} />
              </div>
              <div>
                <p className="font-bold text-dark text-lg">4.9 Stars on Google</p>
                <p className="text-sm text-gray-500">Based on verified customer reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
