import Hero from "@/components/Hero";
import EstimateWizard from "@/components/EstimateWizard";
import ServiceCard from "@/components/ServiceCard";
import TestimonialSlider from "@/components/TestimonialSlider";
import LocationCard from "@/components/LocationCard";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { services } from "@/data/services";
import { locations } from "@/data/locations";

export default function HomePage() {
  const topLocations = locations.slice(0, 8);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Freedom Moving",
    description:
      "Family-owned moving company in Bucks County, PA. Voted Best of Bucks 4 years in a row. Residential, apartment, local, and senior moving services.",
    url: "https://www.freedommoving.com",
    telephone: "+12155551234",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Doylestown",
      addressRegion: "PA",
      postalCode: "18901",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: { "@type": "GeoCoordinates", latitude: 40.3101, longitude: -75.1299 },
      geoRadius: "40000",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "200",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Hero
        title="Freedom Moving"
        subtitle="Family-owned and trusted throughout Bucks County. From packing to delivery, we handle every detail of your move with care and professionalism."
        backgroundImage="/images/hero-bg.png"
      />

      {/* Estimate Form - overlaps hero with award badges on sides */}
      <div className="px-4 sm:px-6 lg:px-8 pb-8 relative z-20">
        <div className="flex items-center justify-center gap-4 lg:gap-8 xl:gap-12">
          {/* Left Award Badge */}
          <div className="hidden lg:flex flex-col items-center justify-center flex-shrink-0">
            <img 
              src="/images/award20-21.png" 
              alt="Best of Bucks County 2020-2021" 
              className="w-72 xl:w-80 2xl:w-96 h-auto drop-shadow-xl"
            />
          </div>
          
          {/* Estimate Form */}
          <div className="w-full max-w-[580px] flex-shrink min-w-0">
            <EstimateWizard />
          </div>
          
          {/* Right Award Badge */}
          <div className="hidden lg:flex flex-col items-center justify-center flex-shrink-0">
            <img 
              src="/images/award22-23.png" 
              alt="Best of Bucks County 2022-2023" 
              className="w-72 xl:w-80 2xl:w-96 h-auto drop-shadow-xl"
            />
          </div>
        </div>
        
        {/* Tablet/Mobile: Awards below form */}
        <div className="flex lg:hidden items-center justify-center gap-3 sm:gap-6 mt-6 sm:mt-8">
          <img 
            src="/images/award20-21.png" 
            alt="Best of Bucks County 2020-2021" 
            className="w-24 sm:w-36 h-auto max-w-[45%]"
          />
          <img 
            src="/images/award22-23.png" 
            alt="Best of Bucks County 2022-2023" 
            className="w-24 sm:w-36 h-auto max-w-[45%]"
          />
        </div>
      </div>

      {/* Best of Bucks Award Section */}
      <section className="py-10 md:py-12 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 text-white text-center md:text-left">
            <div className="flex-shrink-0">
              {/* Award badge placeholder - replace with actual image */}
              <div className="w-20 h-20 md:w-24 md:h-24 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-3xl md:text-4xl">🏆</span>
              </div>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
                Proud Winner — Best of Bucks County
              </h2>
              <p className="text-base md:text-lg opacity-90">
                4 Years in a Row! Voted by the Bucks County community for excellence in moving services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark text-center mb-8 md:mb-12">
            Why Choose Freedom Moving?
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {/* Family-Owned */}
            <div className="text-center">
              <div className="mb-4 md:mb-5 flex justify-center">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-primary" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
              </div>
              <h3 className="font-bold text-dark text-base md:text-lg mb-1 md:mb-2">Family-Owned</h3>
              <p className="text-gray-600 text-xs md:text-sm">
                Not a franchise — a real family business where your move reflects directly on our name.
              </p>
            </div>

            {/* Best of Bucks */}
            <div className="text-center">
              <div className="mb-4 md:mb-5 flex justify-center">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-primary" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492V2.721m-6.75 16.029a7.5 7.5 0 01-6.75 0" />
                </svg>
              </div>
              <h3 className="font-bold text-dark text-base md:text-lg mb-1 md:mb-2">Best of Bucks</h3>
              <p className="text-gray-600 text-xs md:text-sm">
                Voted Best Moving Company in Bucks County 4 years in a row by the local community.
              </p>
            </div>

            {/* Local Experts */}
            <div className="text-center">
              <div className="mb-4 md:mb-5 flex justify-center">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-primary" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-dark text-base md:text-lg mb-1 md:mb-2">Local Experts</h3>
              <p className="text-gray-600 text-xs md:text-sm">
                We know Bucks County inside and out — every neighborhood, every route, every challenge.
              </p>
            </div>

            {/* Licensed & Insured */}
            <div className="text-center">
              <div className="mb-4 md:mb-5 flex justify-center">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-primary" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="font-bold text-dark text-base md:text-lg mb-1 md:mb-2">Licensed & Insured</h3>
              <p className="text-gray-600 text-xs md:text-sm">
                Fully licensed and insured, giving you peace of mind every step of your move.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark text-center mb-4">
            Our Moving Services
          </h2>
          <p className="text-gray-600 text-center mb-8 md:mb-12 max-w-2xl mx-auto">
            From local apartment moves to full-service home relocations, we offer comprehensive moving solutions tailored to your needs.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {services.map((s) => (
              <ServiceCard
                key={s.slug}
                name={s.name}
                description={s.shortDescription}
                href={`/services/${s.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      <TestimonialSlider />

      {/* Areas Served */}
      <section
        className="py-12 md:py-16 lg:py-24 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/areas-bg.jpg')" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark text-center mb-4">
            Areas We Serve
          </h2>
          <p className="text-gray-600 text-center mb-8 md:mb-12 max-w-2xl mx-auto">
            Serving communities throughout Bucks County, PA with dependable moving services.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {topLocations.map((loc) => (
              <LocationCard key={loc.slug} name={loc.name} slug={loc.slug} adjective={loc.adjective} />
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="/areas-served"
              className="inline-block text-primary font-semibold hover:underline"
            >
              View All {locations.length} Areas We Serve →
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-gray-50" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-600 mb-6">
              Call us today for a free, no-obligation estimate or use the form above to get started online.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
              <a
                href="tel:+12674149751"
                className="inline-flex items-center justify-center bg-primary text-white font-bold px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-primary-dark transition shadow-sm text-base md:text-lg w-full sm:w-auto"
              >
                Call (267) 414-9751
              </a>
              <span className="text-gray-400">or</span>
              <a
                href="/book-online"
                className="inline-flex items-center justify-center bg-accent text-dark font-bold px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-accent-dark transition shadow-sm text-base md:text-lg w-full sm:w-auto"
              >
                GET YOUR FREE ESTIMATE
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-500">
              <p>Serving all of Bucks County, PA</p>
              <p>Mon–Sat: 7 AM – 7 PM &nbsp;|&nbsp; Sun: By Appointment</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
