export interface LocationFAQ {
  question: string;
  answer: string;
}

export interface Location {
  slug: string;
  name: string;
  adjective: string;
  description: string;
  highlights: string[];
  aboutCommunity: string;
  zipCodes: string[];
  zipCodesBlurb: string;
  faqs?: LocationFAQ[];
}

export interface Neighborhood {
  name: string;
  anchor: string;
  description: string;
}

export interface CityNeighborhoodSection {
  heading: string;
  intro: string;
  neighborhoods: Neighborhood[];
}

export const cityNeighborhoods: Record<string, CityNeighborhoodSection> = {
  "doylestown": {
    heading: "Areas We Serve in Doylestown, PA",
    intro:
      "Our team knows Doylestown and the surrounding area inside and out. Here are some of the communities where we provide professional moving services:",
    neighborhoods: [
      { name: "Doylestown Borough", anchor: "doylestown-borough", description: "The charming downtown area with historic homes, walkable streets, and a vibrant Main Street filled with shops and restaurants." },
      { name: "Doylestown Township", anchor: "doylestown-township", description: "Surrounding the borough with a mix of established neighborhoods, newer developments, and excellent schools." },
      { name: "Buckingham", anchor: "buckingham", description: "A scenic township known for its rolling hills, horse farms, and upscale residential communities." },
      { name: "New Britain", anchor: "new-britain", description: "A family-friendly area with good schools, parks, and convenient access to Route 202." },
      { name: "Plumstead", anchor: "plumstead", description: "Rural charm with larger properties, historic farmhouses, and a quieter pace of life." },
    ],
  },
  "new-hope": {
    heading: "Areas We Serve in New Hope, PA",
    intro:
      "New Hope and the surrounding Delaware River towns are some of our favorite areas to work in. From riverfront properties to historic homes, we handle it all.",
    neighborhoods: [
      { name: "New Hope Borough", anchor: "new-hope-borough", description: "The artistic heart of Bucks County with galleries, theaters, and charming Victorian homes along the Delaware River." },
      { name: "Solebury Township", anchor: "solebury-township", description: "Scenic countryside surrounding New Hope with estate properties, historic homes, and protected farmland." },
      { name: "Upper Makefield", anchor: "upper-makefield", description: "An affluent township with luxury homes, excellent schools, and proximity to Washington Crossing Historic Park." },
      { name: "Lambertville Area", anchor: "lambertville", description: "We also serve across the river in Lambertville, NJ for those moving between the two towns." },
    ],
  },
  "newtown": {
    heading: "Communities We Serve in Newtown, PA",
    intro:
      "Newtown is one of Bucks County's most desirable areas, and we've been moving families here for years. From the historic borough to newer developments, we know the area well.",
    neighborhoods: [
      { name: "Newtown Borough", anchor: "newtown-borough", description: "A walkable downtown with historic architecture, local shops, and tree-lined streets dating back to colonial times." },
      { name: "Newtown Township", anchor: "newtown-township", description: "Growing residential areas with excellent schools, shopping centers, and easy access to I-95." },
      { name: "Wrightstown", anchor: "wrightstown", description: "A smaller township with rural character, historic properties, and a strong sense of community." },
      { name: "Upper Makefield", anchor: "upper-makefield", description: "Upscale neighborhoods with larger lots, top-rated schools, and beautiful Bucks County scenery." },
    ],
  },
};

export function getAllNeighborhoods(): Array<Neighborhood & { citySlug: string; cityName: string }> {
  const result: Array<Neighborhood & { citySlug: string; cityName: string }> = [];
  for (const loc of locations) {
    const section = cityNeighborhoods[loc.slug];
    if (section) {
      for (const n of section.neighborhoods) {
        result.push({ ...n, citySlug: loc.slug, cityName: loc.name });
      }
    }
  }
  return result;
}

export const locations: Location[] = [
  {
    slug: "doylestown",
    name: "Doylestown",
    adjective: "Trusted",
    description:
      "As Doylestown's trusted moving company, we provide reliable residential and commercial moving services throughout the county seat and surrounding areas.",
    highlights: [
      "Voted Best of Bucks 4 years in a row",
      "Deep knowledge of local neighborhoods",
      "Family-owned and operated",
      "Fully licensed and insured",
    ],
    aboutCommunity:
      "Doylestown is the county seat of Bucks County and one of its most charming towns. Known for its historic downtown, excellent restaurants, and cultural attractions like the Mercer Museum and Michener Art Museum, Doylestown attracts families and professionals who value community and quality of life. With its mix of historic homes and newer developments, the area sees steady demand for professional moving services year-round.",
    zipCodes: ["18901", "18902"],
    zipCodesBlurb:
      "We provide full-service moving throughout Doylestown and surrounding areas, including 18901, 18902, and nearby zip codes.",
    faqs: [
      {
        question: "How much does it cost to hire movers in Doylestown?",
        answer:
          "Moving costs vary depending on the size of your move, distance, and services needed. We offer free estimates so you can get accurate pricing for your specific situation.",
      },
      {
        question: "How far in advance should I book movers in Doylestown?",
        answer:
          "We recommend booking 1-2 weeks in advance. During busy seasons like summer and month-ends, earlier booking ensures availability.",
      },
      {
        question: "Are you familiar with Doylestown's historic homes?",
        answer:
          "Yes, we have extensive experience moving families in and out of Doylestown's historic properties. We understand the care required for older homes with narrow doorways, steep stairs, and delicate architectural features.",
      },
    ],
  },
  {
    slug: "new-hope",
    name: "New Hope",
    adjective: "Premier",
    description:
      "New Hope's unique character — from riverfront properties to historic Victorian homes — requires movers who understand the area. Our experienced team handles every New Hope move with care and professionalism.",
    highlights: [
      "Experience with riverfront and historic properties",
      "Knowledge of narrow streets and parking challenges",
      "White-glove handling for antiques and art",
      "Voted Best of Bucks 4 years running",
    ],
    aboutCommunity:
      "New Hope is Bucks County's artistic and cultural gem, nestled along the Delaware River. Known for its galleries, theaters, restaurants, and eclectic shops, the borough attracts artists, professionals, and those seeking a unique small-town experience. The mix of historic homes, riverfront properties, and country estates makes New Hope one of the most desirable — and challenging — areas for moving services.",
    zipCodes: ["18938"],
    zipCodesBlurb:
      "Our moving services cover all of New Hope, Solebury Township, and the surrounding Delaware River communities.",
    faqs: [
      {
        question: "Can you handle moves on New Hope's narrow streets?",
        answer:
          "Absolutely. We're familiar with New Hope's tight streets and parking situations. We plan ahead and use appropriately-sized vehicles to navigate the borough efficiently.",
      },
      {
        question: "Do you have experience with antique furniture?",
        answer:
          "Yes, New Hope is known for its antique shops and collectors. We handle antique furniture, art, and delicate items with the care they deserve.",
      },
    ],
  },
  {
    slug: "newtown",
    name: "Newtown",
    adjective: "Reliable",
    description:
      "From historic Newtown Borough to the growing townships, we've been helping Newtown families move for years. Our local knowledge and professional service make every move seamless.",
    highlights: [
      "Trusted by Newtown families",
      "Knowledge of local schools and neighborhoods",
      "Full-service packing available",
      "Best of Bucks County winner",
    ],
    aboutCommunity:
      "Newtown combines historic charm with modern convenience. The walkable borough features colonial architecture and local shops, while surrounding townships offer excellent schools and family-friendly neighborhoods. Its central location provides easy access to Philadelphia, Princeton, and New York, making it popular with commuters and families alike.",
    zipCodes: ["18940"],
    zipCodesBlurb:
      "We proudly serve Newtown Borough, Newtown Township, and surrounding communities in Central Bucks County.",
    faqs: [
      {
        question: "Do you work with Newtown's HOA communities?",
        answer:
          "Yes, we regularly handle moves in Newtown's planned communities and are familiar with HOA move-in requirements, reserved parking, and building access procedures.",
      },
      {
        question: "How long does a typical Newtown move take?",
        answer:
          "Most 3-4 bedroom homes take 6-8 hours. Townhouses and smaller moves are often completed in 3-5 hours. We'll give you a time estimate based on your specific situation.",
      },
    ],
  },
  {
    slug: "yardley",
    name: "Yardley",
    adjective: "Expert",
    description:
      "Yardley's riverfront location and historic character require experienced movers. We've been serving Yardley families for years, handling everything from canal-side townhomes to estate properties.",
    highlights: [
      "Riverfront and historic home expertise",
      "Knowledge of Lower Makefield Township",
      "Careful handling of fine furnishings",
      "4-time Best of Bucks winner",
    ],
    aboutCommunity:
      "Yardley Borough sits along the Delaware River and the historic Delaware Canal, offering a picturesque setting with easy access to I-95 and Trenton for commuters. The surrounding Lower Makefield Township features excellent schools, parks, and a mix of established neighborhoods and newer communities. The area's blend of history and convenience makes it one of Bucks County's most sought-after locations.",
    zipCodes: ["19067"],
    zipCodesBlurb:
      "Moving services throughout Yardley, Lower Makefield, and the Lower Bucks County area.",
    faqs: [
      {
        question: "Do you handle moves near the Delaware Canal?",
        answer:
          "Yes, we're experienced with canal-side properties and understand the access considerations for these unique locations.",
      },
    ],
  },
  {
    slug: "langhorne",
    name: "Langhorne",
    adjective: "Trusted",
    description:
      "Langhorne and Middletown Township are home to families, professionals, and retirees. Our experienced crews handle moves throughout the area with the reliability you expect from a local company.",
    highlights: [
      "Serving Langhorne families for years",
      "Knowledge of Middletown Township communities",
      "Competitive local rates",
      "Fully licensed and insured",
    ],
    aboutCommunity:
      "Langhorne and Middletown Township offer convenient suburban living with easy access to Philadelphia and the Jersey Shore. The area features a mix of established neighborhoods, newer developments, and commercial centers. Sesame Place brings families to the area, while the location along Route 1 makes it a practical choice for commuters.",
    zipCodes: ["19047", "19053"],
    zipCodesBlurb:
      "We serve Langhorne, Middletown Township, Penndel, and surrounding Lower Bucks communities.",
    faqs: [
      {
        question: "Do you offer storage services?",
        answer:
          "Yes, we can arrange storage solutions for customers who need temporary or long-term storage during their move.",
      },
    ],
  },
  {
    slug: "southampton",
    name: "Southampton",
    adjective: "Reliable",
    description:
      "Southampton and Upper Southampton Township are well-established communities with excellent schools and convenient access to Philadelphia. Our local team provides dependable moving services throughout the area.",
    highlights: [
      "Local knowledge of Southampton neighborhoods",
      "Experience with all home types",
      "Flexible scheduling",
      "Best of Bucks County winner",
    ],
    aboutCommunity:
      "Southampton offers suburban comfort with easy access to Philadelphia via Route 611 and the Pennsylvania Turnpike. The area features well-maintained neighborhoods, good schools, and local shopping. Its central location in Lower Bucks County makes it practical for families and professionals working in Philadelphia or along the Route 1 corridor.",
    zipCodes: ["18966"],
    zipCodesBlurb:
      "Moving services throughout Southampton, Upper Southampton Township, and surrounding communities.",
    faqs: [
      {
        question: "How quickly can you schedule a move?",
        answer:
          "We can often accommodate moves within a few days depending on availability. For guaranteed scheduling, we recommend booking 1-2 weeks ahead.",
      },
    ],
  },
  {
    slug: "warrington",
    name: "Warrington",
    adjective: "Dependable",
    description:
      "Warrington Township has grown significantly over the years, and we've been there for families every step of the way. From established neighborhoods to new construction, we handle every Warrington move with care.",
    highlights: [
      "Experience with new construction moves",
      "Knowledge of Warrington's communities",
      "Full-service packing available",
      "Voted Best of Bucks multiple years",
    ],
    aboutCommunity:
      "Warrington Township in Central Bucks County has seen significant growth, offering newer communities, excellent schools, and convenient shopping along Route 611. The area attracts young families and professionals looking for quality suburban living with reasonable commutes to Philadelphia and the Lehigh Valley.",
    zipCodes: ["18976"],
    zipCodesBlurb:
      "We provide moving services throughout Warrington Township and the Central Bucks area.",
    faqs: [
      {
        question: "Do you have experience with new construction moves?",
        answer:
          "Yes, we regularly handle moves into newly built homes and understand the coordination required with builders and closing schedules.",
      },
    ],
  },
  {
    slug: "quakertown",
    name: "Quakertown",
    adjective: "Trusted",
    description:
      "Upper Bucks County deserves quality moving services too. We serve Quakertown and the surrounding townships with the same professionalism we bring to every move.",
    highlights: [
      "Serving Upper Bucks County",
      "Experience with rural properties",
      "Competitive pricing",
      "Family-owned local company",
    ],
    aboutCommunity:
      "Quakertown is the commercial hub of Upper Bucks County, offering small-town charm with essential amenities. The surrounding townships feature a mix of farmland, established neighborhoods, and newer developments. The area attracts families looking for more space and a slower pace while maintaining reasonable access to jobs in the Lehigh Valley and Philadelphia.",
    zipCodes: ["18951"],
    zipCodesBlurb:
      "Moving services throughout Quakertown, Richland Township, and Upper Bucks County.",
    faqs: [
      {
        question: "Do you serve all of Upper Bucks County?",
        answer:
          "Yes, we provide moving services throughout Upper Bucks County including Quakertown, Perkasie, Dublin, and surrounding townships.",
      },
    ],
  },
];

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}

export function getLocationSlugs(): string[] {
  return locations.map((l) => l.slug);
}
