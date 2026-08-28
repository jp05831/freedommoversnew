export interface LocationFAQ { question: string; answer: string }
export interface Location { slug: string; name: string; adjective: string; description: string; highlights: string[]; aboutCommunity: string; zipCodes: string[]; zipCodesBlurb: string; faqs?: LocationFAQ[] }
export interface Neighborhood { name: string; anchor: string; description: string }
export interface CityNeighborhoodSection { heading: string; intro: string; neighborhoods: Neighborhood[] }

const commonFaqs = (city: string): LocationFAQ[] => [
  { question: `How much do movers cost in ${city}?`, answer: "Pricing depends on the size, distance, access, and services required. Contact us for a free estimate tailored to your move." },
  { question: `How early should I book movers in ${city}?`, answer: "We recommend booking at least one to two weeks ahead, and earlier during summer, weekends, and month-end." },
];

export const cityNeighborhoods: Record<string, CityNeighborhoodSection> = {
  miramar: { heading: "Areas We Serve in Miramar, FL", intro: "Professional residential and commercial moving throughout Miramar.", neighborhoods: [
    { name: "Silver Shores", anchor: "silver-shores", description: "Residential communities in west Miramar with single-family homes and townhomes." },
    { name: "Monarch Lakes", anchor: "monarch-lakes", description: "A gated community near I-75 with convenient regional access." },
    { name: "Vizcaya", anchor: "vizcaya", description: "A family-oriented Miramar community with varied home styles." },
  ]},
  "pembroke-pines": { heading: "Areas We Serve in Pembroke Pines, FL", intro: "Local moving help across Pembroke Pines and nearby communities.", neighborhoods: [
    { name: "Chapel Trail", anchor: "chapel-trail", description: "West Pembroke Pines neighborhoods near parks and schools." },
    { name: "Pembroke Falls", anchor: "pembroke-falls", description: "A large gated community with coordinated move-in requirements." },
    { name: "Century Village", anchor: "century-village", description: "Condo moves handled with careful building and elevator coordination." },
  ]},
  hollywood: { heading: "Areas We Serve in Hollywood, FL", intro: "Moving services from Hollywood Beach to the western neighborhoods.", neighborhoods: [
    { name: "Hollywood Hills", anchor: "hollywood-hills", description: "Established residential streets close to central Hollywood." },
    { name: "Emerald Hills", anchor: "emerald-hills", description: "Homes, condos, and businesses near major Broward corridors." },
    { name: "Hollywood Beach", anchor: "hollywood-beach", description: "Condo and coastal moves requiring building-access planning." },
  ]},
};

const base: Array<[string,string,string,string[]]> = [
  ["miramar","Miramar","Trusted",["33023","33025","33027","33029"]],
  ["pembroke-pines","Pembroke Pines","Reliable",["33024","33026","33027","33028","33029"]],
  ["hollywood","Hollywood","Professional",["33019","33020","33021","33024"]],
  ["fort-lauderdale","Fort Lauderdale","Experienced",["33301","33304","33308","33311"]],
  ["davie","Davie","Dependable",["33314","33317","33324","33325","33328"]],
  ["plantation","Plantation","Careful",["33313","33317","33322","33324"]],
  ["sunrise","Sunrise","Local",["33313","33322","33323","33326"]],
  ["weston","Weston","Premier",["33326","33327","33331","33332"]],
];

export const locations: Location[] = base.map(([slug,name,adjective,zipCodes]) => ({
  slug, name, adjective,
  description: `Freedom Moving provides careful, dependable residential and commercial moving services throughout ${name} and Broward County.`,
  highlights: ["Family-owned and operated", "Residential and commercial moves", "Packing help available", "Careful, professional crews"],
  aboutCommunity: `${name} is part of the diverse and fast-growing Broward County community. From houses and townhomes to high-rise condos and offices, our team plans around property access, elevators, gates, parking, and South Florida weather to keep moves running smoothly.`,
  zipCodes,
  zipCodesBlurb: `We serve ${name} and nearby Broward County communities, including ${zipCodes.join(", ")}.`,
  faqs: commonFaqs(name),
}));

export function getAllNeighborhoods(): Array<Neighborhood & { citySlug: string; cityName: string }> { return locations.flatMap(loc => (cityNeighborhoods[loc.slug]?.neighborhoods||[]).map(n=>({...n,citySlug:loc.slug,cityName:loc.name}))); }
export function getLocation(slug: string) { return locations.find(l=>l.slug===slug); }
export function getLocationSlugs() { return locations.map(l=>l.slug); }
