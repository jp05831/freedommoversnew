import { ArrowRight, Phone } from "lucide-react";
import EstimateWizard from "@/components/EstimateWizard";
import { socials } from "@/data/socials";

export default function HomeHero() {
  return (
    <section className="moving-hero" aria-labelledby="moving-hero-title">
      <div className="moving-hero-layout">
        <div className="moving-hero-copy">
          <div className="moving-hero-badge">
            <span className="moving-hero-badge-dot" />
            FAMILY-OWNED. LOCALLY ROOTED.
          </div>
          <h1 id="moving-hero-title">
            South Florida movers who <em>move with care.</em>
          </h1>
          <p>
            <strong>A fresh start. A familiar team.</strong> Freedom Moving is your
            family-owned moving company in Miramar, serving Broward County and
            surrounding South Florida communities.
          </p>
          <p>
            From the first box to the last piece of furniture, we handle the
            details so you can settle into what comes next. Local knowledge,
            careful hands, and people you can count on.
          </p>
          <div className="moving-hero-buttons">
            <a className="moving-hero-call" href="tel:+12674149751">
              <Phone size={17} aria-hidden="true" /> Call (267) 414-9751
            </a>
            <a className="moving-hero-cta" href="#hero-estimate">
              Get my free quote <ArrowRight size={17} aria-hidden="true" />
            </a>
          </div>
          <div className="moving-hero-socials" aria-label="Find Freedom Moving online">
            <p>GET TO KNOW YOUR MOVERS</p>
            <div className="moving-hero-social-links">
              {socials.filter((social) => social.name !== "Facebook").map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`moving-hero-social moving-hero-social-${social.name.toLowerCase()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="moving-hero-social-logo" aria-hidden="true">{social.icon}</span>
                  <span><strong>{social.name}</strong><span>Visit our page</span></span>
                  <ArrowRight size={16} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div id="hero-estimate" className="moving-hero-estimate">
          <EstimateWizard hero />
        </div>
      </div>
    </section>
  );
}
