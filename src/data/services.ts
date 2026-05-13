export interface Service {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  shortDescription: string;
  icon: string;
  heroImage?: string;
  features: string[];
  faqs: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    slug: "residential-moving",
    name: "Residential Moving",
    shortName: "Residential",
    heroImage: "/images/residential-hero.jpg",
    description:
      "Professional residential moving services that take care of everything from start to finish. We handle packing, transport, and setup so you can focus on settling into your new home.",
    shortDescription:
      "Complete home moving services with packing, loading, and careful transport of all your belongings.",
    icon: "🏠",
    features: [
      "Full-service packing and unpacking",
      "Furniture disassembly and reassembly",
      "Floor and wall protection",
      "Careful handling of fragile items",
      "Storage available if needed",
      "Same-day moves when available",
    ],
    faqs: [
      {
        question: "How far in advance should I book my residential move?",
        answer:
          "We recommend booking at least 2-4 weeks in advance, especially during peak season (May-September). However, we can often accommodate last-minute moves depending on availability.",
      },
      {
        question: "Do you provide packing materials?",
        answer:
          "Yes! We bring all necessary packing materials including boxes, tape, bubble wrap, and furniture pads. Our team uses professional-grade supplies to keep your belongings protected.",
      },
      {
        question: "Are my belongings insured during the move?",
        answer:
          "Absolutely. We are fully licensed and insured. We offer basic valuation coverage included with every move, and additional coverage options are available for high-value items.",
      },
    ],
  },
  {
    slug: "apartment-moving",
    name: "Apartment Moving",
    shortName: "Apartment",
    heroImage: "/images/apartment-hero.jpg",
    description:
      "Apartment moves come with unique challenges like elevators, tight hallways, stairs, and building regulations. Our experienced crews handle every detail efficiently, ensuring your belongings are protected and your move stays smooth from start to finish.",
    shortDescription:
      "Expert apartment movers who handle stairs, elevators, and tight spaces with ease.",
    icon: "🏢",
    features: [
      "Experience with all apartment layouts",
      "Elevator and stairway expertise",
      "Building regulation compliance",
      "Furniture protection for tight spaces",
      "Quick turnaround times",
      "Flexible scheduling around building rules",
    ],
    faqs: [
      {
        question: "Can you handle moves with no elevator access?",
        answer:
          "Absolutely. Our crews regularly handle walk-up apartments and are experienced with carrying furniture up and down multiple flights of stairs safely.",
      },
      {
        question: "Do you coordinate with building management?",
        answer:
          "Yes, we can work with your building management to reserve elevators, loading docks, and ensure we comply with any move-in/move-out policies.",
      },
    ],
  },
  {
    slug: "local-moving",
    name: "Local Moving",
    shortName: "Local",
    heroImage: "/images/local-hero.jpg",
    description:
      "Moving across Bucks County or anywhere in the greater Philadelphia area? Our local moving services are designed for efficiency and care. We know every neighborhood, every shortcut, and every challenge the area presents.",
    shortDescription:
      "Fast, reliable local moves throughout Bucks County and the greater Philadelphia area.",
    icon: "📍",
    features: [
      "Deep knowledge of Bucks County",
      "Efficient routing to save time",
      "Same-day service available",
      "Competitive local rates",
      "Full packing services available",
      "Storage options available",
    ],
    faqs: [
      {
        question: "What counts as a local move?",
        answer:
          "Generally, any move within a 50-mile radius is considered local. This covers all of Bucks County, Montgomery County, and the greater Philadelphia area.",
      },
      {
        question: "How long does a typical local move take?",
        answer:
          "Most local moves for a 2-3 bedroom home take 4-8 hours. Smaller apartments can often be completed in 2-4 hours. We'll give you a time estimate based on your specific situation.",
      },
    ],
  },
  {
    slug: "furniture-movers",
    name: "Furniture Moving",
    shortName: "Furniture",
    heroImage: "/images/furniture-hero.jpg",
    description:
      "From grand pianos to antique armoires, our specialty furniture movers handle your most valued pieces with expert care. We use professional-grade wrapping, padding, and transport techniques to ensure everything arrives in perfect condition.",
    shortDescription:
      "Specialty handling for pianos, antiques, pool tables, and heavy or fragile furniture.",
    icon: "🛋️",
    features: [
      "Piano and organ moving",
      "Pool table disassembly and setup",
      "Antique and heirloom protection",
      "Custom crating for fragile items",
      "Professional wrapping and padding",
      "Experienced heavy-item crews",
    ],
    faqs: [
      {
        question: "Can you move a grand piano?",
        answer:
          "Yes, we've moved hundreds of pianos including baby grands, grand pianos, and upright pianos. Our team uses specialized equipment and techniques to protect your instrument during transport.",
      },
      {
        question: "How do you protect antique furniture?",
        answer:
          "We use custom wrapping techniques with moving blankets, bubble wrap, and corner protectors. For extremely valuable or fragile pieces, we can build custom crates for maximum protection.",
      },
    ],
  },
  {
    slug: "long-distance-moving",
    name: "Long Distance Moving",
    shortName: "Long Distance",
    heroImage: "/images/longdistance-hero.jpg",
    description:
      "Moving out of state or across the country? Our long distance moving services ensure your belongings arrive safely at your new home, no matter the distance. We handle all the logistics so you can focus on your new adventure.",
    shortDescription:
      "Professional long distance moves with careful handling and reliable delivery schedules.",
    icon: "🚚",
    features: [
      "Interstate moving expertise",
      "Dedicated truck for your belongings",
      "Tracking and communication throughout",
      "Flexible delivery windows",
      "Full packing and unpacking available",
      "Licensed for interstate moves",
    ],
    faqs: [
      {
        question: "How do you quote long distance moves?",
        answer:
          "Long distance moves are typically quoted based on the weight of your belongings and the distance traveled. We provide detailed estimates after understanding your specific needs.",
      },
      {
        question: "How long does a long distance move take?",
        answer:
          "Delivery times depend on distance and logistics. Most moves within the East Coast take 2-5 days. Cross-country moves may take 7-14 days. We'll provide a delivery window with your quote.",
      },
    ],
  },
  {
    slug: "senior-moving",
    name: "Senior Moving",
    shortName: "Senior",
    heroImage: "/images/senior-hero.jpg",
    description:
      "Downsizing or transitioning to a new living arrangement is a big life change. Our senior moving specialists provide patient, compassionate service to make the transition as smooth and stress-free as possible for you and your family.",
    shortDescription:
      "Compassionate, patient moving services designed for seniors and their families.",
    icon: "❤️",
    features: [
      "Patient and compassionate service",
      "Downsizing assistance",
      "Careful handling of lifetime collections",
      "Coordination with senior communities",
      "Unpacking and setup at new location",
      "Flexible scheduling and pacing",
    ],
    faqs: [
      {
        question: "Can you help with downsizing decisions?",
        answer:
          "While we don't provide downsizing consulting, we can work with your family or a senior move manager to coordinate the logistics. We're happy to accommodate special requests and take extra time when needed.",
      },
      {
        question: "Do you work with senior living facilities?",
        answer:
          "Yes, we regularly coordinate with senior living and retirement communities in Bucks County and the surrounding area. We understand their move-in procedures and can work within their schedules.",
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
