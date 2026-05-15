import Link from "next/link";
import { services } from "@/data/services";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Book Online", href: "/book-online" },
  { name: "Areas Served", href: "/areas-served" },
  { name: "Blog", href: "/blog" },
];

const topAreas = [
  { name: "Doylestown", href: "/areas-served/doylestown" },
  { name: "New Hope", href: "/areas-served/new-hope" },
  { name: "Newtown", href: "/areas-served/newtown" },
  { name: "Yardley", href: "/areas-served/yardley" },
  { name: "Langhorne", href: "/areas-served/langhorne" },
];

const socials = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/freedommovers.net/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/freedom.moving.us",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
    ),
  },
  {
    name: "Yelp",
    href: "https://www.yelp.com/biz/freedom-moving-southampton",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308a1.072 1.072 0 011.596-.206 9.194 9.194 0 011.86 3.267c.286.847-.313 1.14-.19 1.444zM14.25 15.49l3.374 3.906c.54.623-.01 1.617-.826 1.49a9.226 9.226 0 01-3.573-1.467c-.695-.469-.585-1.149-.52-1.465l.818-4.108c.19-.953 1.405-1.124 1.727-.356zm-4.5-3.756c.19.953-.683 1.692-1.573 1.328l-4.57-1.867c-.867-.355-.87-1.41-.007-1.77a9.224 9.224 0 013.794-.8c.862.035 1.23.61 1.356 1.109zm-.76 4.78l-.818 4.108c-.19.953-1.405 1.124-1.727.356l-2.905-4.308c-.563-.83.214-1.906 1.174-1.63l4.994 1.433c.867.248.473 1.32.282 2.04zm-2.11-9.284c-.697-.468-.585-1.148-.52-1.464l.818-4.108c.19-.953 1.405-1.124 1.727-.356l2.905 4.308c.563.83-.214 1.906-1.174 1.63l-3.756-1.01z"/></svg>
    ),
  },
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
                className="h-8 w-auto"
              />
            </div>

            <p className="text-sm text-gray-400 mb-4">
              Family-owned moving company in Bucks County, PA. Voted Best of Bucks 4 years in a row. Licensed and insured.
            </p>

            <div className="space-y-1.5 text-sm text-gray-400 mb-4">
              <p>Serving all of Bucks County, PA</p>
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

            {/* Best of Bucks Badge */}
            <div className="inline-flex items-center gap-2 bg-gray-800 px-4 py-2.5 rounded-lg">
              <div className="flex items-center justify-center w-8 h-8 bg-primary rounded text-white font-bold text-lg">
                🏆
              </div>
              <div>
                <p className="text-white text-xs font-semibold">Best of Bucks</p>
                <p className="text-gray-400 text-[10px]">4 Years Running</p>
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
