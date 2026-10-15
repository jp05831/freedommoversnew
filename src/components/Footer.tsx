import Link from "next/link";
import { services } from "@/data/services";
import { socials } from "@/data/socials";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Book Online", href: "/book-online" },
  { name: "Areas Served", href: "/areas-served" },
  { name: "Blog", href: "/blog" },
];

const topAreas = [
  { name: "Miramar", href: "/areas-served/miramar" },
  { name: "Pembroke Pines", href: "/areas-served/pembroke-pines" },
  { name: "Hollywood", href: "/areas-served/hollywood" },
  { name: "Fort Lauderdale", href: "/areas-served/fort-lauderdale" },
  { name: "Davie", href: "/areas-served/davie" },
];


export default function Footer() {
  return (
    <footer className="bg-dark text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            {/* Logo + Phone */}
            <div className="mb-4">
              <img
                src="/images/logo.png"
                alt="Freedom Moving"
                className="h-6 w-auto"
              />
            </div>

            <p className="text-sm text-gray-400 mb-4">
              Family-owned moving company based in Miramar and serving Broward County, Florida. Professional residential and commercial moving.
            </p>

            <div className="space-y-1.5 text-sm text-gray-400 mb-4">
              <p>Serving Miramar, Broward County &amp; South Florida</p>
              <p>Mon–Sat: 7 AM – 7 PM &nbsp;|&nbsp; Sun: By Appointment</p>
            </div>

            {/* Social Icons */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="text-gray-500 hover:text-accent transition"
                >
                  {s.icon}
                </a>
              ))}
              <div className="h-5 w-px bg-gray-700 hidden md:block" />
              <a href="tel:+12674149751" className="text-white font-bold text-lg hover:text-accent transition whitespace-nowrap w-full md:w-auto mt-2 md:mt-0">
                (267) 414-9751
              </a>
            </div>

            {/* Service area badge */}
            <div className="inline-flex items-center gap-2 bg-gray-800 px-4 py-2.5 rounded-lg">
              <div className="flex items-center justify-center w-8 h-8 bg-primary rounded text-white font-bold text-lg">
                🏆
              </div>
              <div>
                <p className="text-white text-xs font-semibold">Miramar Based</p>
                <p className="text-gray-400 text-[10px]">Serving Broward County</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-accent transition">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-sm hover:text-accent transition">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas Served */}
          <div>
            <h4 className="text-white font-semibold mb-4">Areas Served</h4>
            <ul className="space-y-2">
              {topAreas.map((area) => (
                <li key={area.href}>
                  <Link href={area.href} className="text-sm hover:text-accent transition">
                    {area.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/areas-served" className="text-sm text-accent hover:text-accent-light transition font-medium">
                  View All Areas →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Freedom Moving. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-accent transition">Privacy Policy</Link>
            <span className="text-gray-700">|</span>
            <Link href="/terms-and-conditions" className="hover:text-accent transition">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
