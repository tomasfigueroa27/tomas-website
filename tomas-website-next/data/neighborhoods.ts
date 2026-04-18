export interface NeighborhoodFact {
  label: string;
  value: string;
}

export interface NeighborhoodFAQ {
  q: string;
  a: string;
}

export interface Neighborhood {
  slug: string;
  name: string;
  tagline: string;
  description: string[];
  priceRange: string;
  vibe: string;
  bestFor: string[];
  facts: NeighborhoodFact[];
  faqs: NeighborhoodFAQ[];
}

const neighborhoods: Neighborhood[] = [
  {
    slug: 'west-bay-beach',
    name: 'West Bay Beach',
    tagline: 'Roatan\'s premier beachfront destination',
    description: [
      'West Bay Beach is widely considered the crown jewel of Roatan real estate. Stretching along a mile of pristine white sand, it offers direct access to the Mesoamerican Barrier Reef just steps from shore. The area attracts high-end buyers looking for luxury condos, beachfront villas, and turnkey vacation rental properties.',
      'The neighborhood is fully developed with upscale restaurants, beach bars, water sports operators, and resort-style amenities. Properties here command the highest prices on the island, and vacation rental demand is consistently strong due to its status as Roatan\'s top tourist destination.',
      'For investors focused on rental income, West Bay Beach offers some of the best occupancy rates and nightly rental yields on the island. Whether you\'re buying a luxury condo for personal use or a beachfront property as a rental asset, West Bay is the benchmark for Caribbean island living.',
    ],
    priceRange: '$300,000 – $2,000,000+',
    vibe: 'Luxury beachfront resort',
    bestFor: ['Vacation rentals', 'Luxury buyers', 'Beach lifestyle', 'High-end condos', 'Snorkeling & diving'],
    facts: [
      { label: 'Price Range', value: '$300,000 – $2,000,000+' },
      { label: 'Vibe', value: 'Upscale beachfront resort community' },
      { label: 'Best For', value: 'Vacation rentals, luxury condos, beach lifestyle' },
      { label: 'Reef Access', value: 'Direct — reef begins just offshore' },
      { label: 'Tourism Level', value: 'Very high — Roatan\'s #1 tourist destination' },
      { label: 'Rental Yield', value: 'Strong, driven by year-round tourism demand' },
    ],
    faqs: [
      {
        q: 'Is West Bay Beach a good area for vacation rental investment?',
        a: 'Yes — West Bay Beach is Roatan\'s most-visited tourist area and consistently delivers strong occupancy rates and rental income. Properties here attract both short-term vacationers and cruise ship visitors, making it one of the best-performing rental markets on the island.',
      },
      {
        q: 'What types of properties are available in West Bay Beach?',
        a: 'The area offers a range of luxury condos, beachfront villas, and resort-style units. Many properties are within gated developments with shared amenities like pools, security, and concierge services.',
      },
      {
        q: 'How does West Bay Beach compare to other Roatan neighborhoods in terms of price?',
        a: 'West Bay is the most expensive neighborhood on the island. Entry-level condos typically start around $300,000, while luxury beachfront villas can exceed $2 million. The premium reflects direct beach and reef access, tourism infrastructure, and proven rental demand.',
      },
      {
        q: 'Is West Bay Beach walkable?',
        a: 'Within the beach corridor itself, yes — restaurants, shops, and water sports operators are all within walking distance of most properties. For broader island access, a car or taxi is recommended.',
      },
    ],
  },
  {
    slug: 'west-end',
    name: 'West End',
    tagline: 'Laid-back village life meets world-class diving',
    description: [
      'West End is the heartbeat of Roatan\'s expat community — a relaxed, walkable village packed with dive shops, restaurants, bars, and local character. It sits just a short drive from West Bay Beach but has a distinctly different energy: more casual, more social, and more affordable.',
      'The area is popular with long-term expats, digital nomads, and buyers looking for a more authentic Caribbean experience without the resort-town price tag. Dive operators line the main street, and the reef is accessible directly from shore in several spots, making it a top destination for divers.',
      'Real estate in West End ranges from affordable condos to hillside homes with ocean views. The neighborhood is well-established with a mix of international residents and local Honduran families, giving it a genuine community feel that many buyers prefer over more commercialized areas.',
    ],
    priceRange: '$150,000 – $600,000',
    vibe: 'Casual expat village with dive culture',
    bestFor: ['Divers', 'Expat community', 'Long-term residents', 'Affordable entry', 'Walkable lifestyle'],
    facts: [
      { label: 'Price Range', value: '$150,000 – $600,000' },
      { label: 'Vibe', value: 'Laid-back expat village with bars, dive shops, and restaurants' },
      { label: 'Best For', value: 'Divers, expats, long-term residents, affordable buyers' },
      { label: 'Reef Access', value: 'Shore diving available at multiple entry points' },
      { label: 'Community Feel', value: 'Strong — mix of expats, locals, and long-term visitors' },
      { label: 'Walkability', value: 'High within the village' },
    ],
    faqs: [
      {
        q: 'Is West End safe for expats living full-time?',
        a: 'West End has a large and well-established expat community and is considered one of the safer, more livable areas on the island. Like anywhere, general awareness is recommended, but the neighborhood has a strong sense of community.',
      },
      {
        q: 'Can I find affordable properties in West End?',
        a: 'Yes — West End offers the most affordable entry points on the western side of the island. Condos and smaller homes are available starting around $150,000, making it accessible for buyers priced out of West Bay.',
      },
      {
        q: 'What is the diving like in West End?',
        a: 'Excellent. West End is home to several world-class dive operators, and the reef is accessible directly from shore. It\'s considered one of the top shore diving destinations in the Caribbean.',
      },
      {
        q: 'Does West End have good restaurants and amenities?',
        a: 'Yes — the main street is lined with restaurants ranging from casual beach shacks to more established dining. You\'ll find international cuisine, grocery options, pharmacies, and everything needed for comfortable daily life.',
      },
    ],
  },
  {
    slug: 'sandy-bay',
    name: 'Sandy Bay',
    tagline: 'Quiet residential living near the reef',
    description: [
      'Sandy Bay is a peaceful residential community located between West End and Coxen Hole on the island\'s north shore. It is home to Lawson Rock, where Tomas Figueroa is based, as well as several other established residential communities. Sandy Bay offers a quieter alternative to the more tourist-heavy western neighborhoods.',
      'The area has a genuine neighborhood character — with a mix of long-term expat residents, local families, and vacation homeowners. It is close enough to West End\'s amenities and West Bay\'s beaches to enjoy island life without being in the middle of the tourist traffic.',
      'Properties in Sandy Bay range from modest homes to larger hillside estates and gated communities. The Roatan Marine Park is headquartered here, and the area is known for its commitment to reef conservation. For buyers looking for a quieter lifestyle with strong community ties, Sandy Bay is one of Roatan\'s most livable neighborhoods.',
    ],
    priceRange: '$200,000 – $800,000',
    vibe: 'Quiet residential community with expat roots',
    bestFor: ['Full-time residents', 'Families', 'Conservation-minded buyers', 'Gated communities', 'Long-term living'],
    facts: [
      { label: 'Price Range', value: '$200,000 – $800,000' },
      { label: 'Vibe', value: 'Quiet residential — less tourist traffic, strong community' },
      { label: 'Best For', value: 'Full-time residents, families, gated community buyers' },
      { label: 'Notable Landmark', value: 'Roatan Marine Park headquarters' },
      { label: 'Tomas\'s Base', value: 'Lawson Rock, Sandy Bay — Tomas Figueroa\'s home community' },
      { label: 'Access', value: '10–15 minutes to West End, 20 minutes to airport' },
    ],
    faqs: [
      {
        q: 'Why does Tomas Figueroa live in Sandy Bay?',
        a: 'Tomas is based at Lawson Rock in Sandy Bay because he values the quieter, more residential character of the neighborhood. It offers genuine community living while remaining conveniently close to both West End and West Bay.',
      },
      {
        q: 'Is Sandy Bay suitable for families?',
        a: 'Yes — Sandy Bay is one of the more family-friendly neighborhoods on the island, with a mix of full-time residents, schools nearby, and a community atmosphere that suits long-term living.',
      },
      {
        q: 'What gated communities are in Sandy Bay?',
        a: 'Sandy Bay is home to several established gated communities including Lawson Rock. These developments offer security, maintained common areas, and a mix of homes and lots for sale.',
      },
      {
        q: 'How far is Sandy Bay from the beach?',
        a: 'Sandy Bay has its own reef access and small beach areas. West Bay Beach is approximately 20–25 minutes by car, and West End\'s dive sites are about 10–15 minutes away.',
      },
    ],
  },
  {
    slug: 'pristine-bay',
    name: 'Pristine Bay',
    tagline: 'Roatan\'s most exclusive gated luxury community',
    description: [
      'Pristine Bay is a world-class luxury gated community located on the east end of Roatan. The development spans hundreds of acres and includes a marina, golf course, resort hotel, pools, beach club, and a range of high-end residential options from condos to custom villas. It is the most comprehensively developed luxury community on the island.',
      'The east end of Roatan is less developed than the west, which means Pristine Bay residents enjoy a sense of exclusivity and natural beauty that is harder to find near the more tourist-dense western areas. The marina attracts boaters from across the Caribbean, and the community has attracted significant international investment.',
      'Properties at Pristine Bay range from resort-style condos to large oceanfront villas with private docks. The community is fully managed with on-site security, maintenance, and resort services. For buyers seeking the highest level of Caribbean luxury combined with long-term asset security, Pristine Bay is Roatan\'s flagship address.',
    ],
    priceRange: '$400,000 – $3,000,000+',
    vibe: 'Ultra-luxury gated resort community',
    bestFor: ['Luxury buyers', 'Marina access', 'Golf', 'Ultra-high-end investment', 'Privacy and exclusivity'],
    facts: [
      { label: 'Price Range', value: '$400,000 – $3,000,000+' },
      { label: 'Vibe', value: 'Exclusive gated resort community with full amenities' },
      { label: 'Best For', value: 'Luxury buyers, marina access, privacy, golf' },
      { label: 'Amenities', value: 'Marina, golf course, resort hotel, beach club, pools' },
      { label: 'Location', value: 'East end of Roatan — less developed, more exclusive' },
      { label: 'Security', value: 'Gated with 24/7 on-site security and management' },
    ],
    faqs: [
      {
        q: 'Is Pristine Bay the most expensive neighborhood in Roatan?',
        a: 'Pristine Bay commands the highest prices overall, particularly for its oceanfront villas and marina-access properties. It competes with West Bay Beach for the top end of the market, but the scale and amenities of Pristine Bay make it unique.',
      },
      {
        q: 'Does Pristine Bay have a marina?',
        a: 'Yes — Pristine Bay\'s marina is one of the finest in the western Caribbean, attracting private yachts and boating enthusiasts from across the region. Marina slips and waterfront properties with dock access are available.',
      },
      {
        q: 'How far is Pristine Bay from the airport?',
        a: 'Pristine Bay is located on the east end of Roatan, approximately 30–40 minutes from the Roatan International Airport (RTB). The drive takes you through the more local and authentic parts of the island.',
      },
      {
        q: 'Can non-residents use the Pristine Bay resort amenities?',
        a: 'The Pristine Bay resort hotel is open to guests, and property owners within the community have access to all amenities. Day passes and memberships may be available for certain facilities.',
      },
    ],
  },
  {
    slug: 'french-harbour',
    name: 'French Harbour',
    tagline: 'Roatan\'s commercial hub with authentic local character',
    description: [
      'French Harbour is the commercial and fishing center of Roatan — a busy, authentic working town with a very different character from the tourist-focused western neighborhoods. It is home to the island\'s main shrimp and lobster processing facilities, a large local fishing fleet, and the biggest grocery stores and commercial services on the island.',
      'Real estate in French Harbour is more affordable than the western end and appeals to buyers looking for practical, livable properties close to local infrastructure. The area has a strong local Honduran community, and daily life here feels genuinely integrated with the island\'s economy and culture.',
      'For buyers interested in commercial real estate, business opportunities, or practical residential properties without the tourist-area price premium, French Harbour offers solid value. It is also centrally located on the island, making it easy to access both the east and west ends.',
    ],
    priceRange: '$100,000 – $400,000',
    vibe: 'Authentic local commercial hub',
    bestFor: ['Local lifestyle', 'Commercial buyers', 'Practical living', 'Affordable homes', 'Central location'],
    facts: [
      { label: 'Price Range', value: '$100,000 – $400,000' },
      { label: 'Vibe', value: 'Authentic working town — commercial and fishing industry hub' },
      { label: 'Best For', value: 'Local lifestyle, commercial buyers, affordable practical living' },
      { label: 'Commerce', value: 'Island\'s main grocery stores, hardware, and commercial services' },
      { label: 'Location', value: 'Central Roatan — easy access to east and west' },
      { label: 'Community', value: 'Strong local Honduran community, less expat-heavy' },
    ],
    faqs: [
      {
        q: 'Is French Harbour a good place to buy for a primary residence?',
        a: 'For buyers who value practicality, affordability, and authentic local living over beach access or expat community, French Harbour can be an excellent choice. It has the most complete commercial infrastructure on the island.',
      },
      {
        q: 'Are there commercial real estate opportunities in French Harbour?',
        a: 'Yes — as the island\'s commercial hub, French Harbour has the most activity for commercial properties, business acquisitions, and mixed-use investments. It\'s worth discussing with Tomas if you have commercial real estate goals.',
      },
      {
        q: 'What are grocery and supply options in French Harbour?',
        a: 'French Harbour has the largest and best-stocked grocery stores on the island, along with hardware stores, pharmacies, banks, and most other commercial services you would need for daily life.',
      },
      {
        q: 'Is French Harbour safe?',
        a: 'French Harbour is a busy town and is generally safe for residents who are aware of their surroundings. Like any working town, standard urban caution applies. The area is well-connected and very functional for everyday island living.',
      },
    ],
  },
  {
    slug: 'coxen-hole',
    name: 'Coxen Hole',
    tagline: 'Roatan\'s capital — the most affordable entry point',
    description: [
      'Coxen Hole is the capital city of Roatan and the Bay Islands, and it is where you will find most of the island\'s government offices, banks, legal services, and official infrastructure. It is also the most affordable neighborhood for real estate on the island, making it the entry point for buyers with tighter budgets or those focused on practical investment.',
      'The neighborhood has a very local character — less tourism, more day-to-day island life. The ferry terminal for La Ceiba is here, as is the main courthouse and immigration office. For buyers who plan to spend significant time handling legal or administrative matters related to their property or residency, proximity to Coxen Hole is a practical advantage.',
      'Real estate in Coxen Hole is priced well below the island average and offers an opportunity for buyers willing to invest in renovations or looking for commercial or mixed-use properties. The area is undergoing gradual improvement as the island\'s overall real estate market rises.',
    ],
    priceRange: '$80,000 – $350,000',
    vibe: 'Capital city — local, functional, affordable',
    bestFor: ['Budget buyers', 'Commercial investment', 'Administrative access', 'Fixer-uppers', 'Local living'],
    facts: [
      { label: 'Price Range', value: '$80,000 – $350,000' },
      { label: 'Vibe', value: 'Capital city — practical, local, administrative hub' },
      { label: 'Best For', value: 'Budget buyers, commercial real estate, fixer-uppers' },
      { label: 'Government', value: 'Island\'s main government offices, courts, immigration, banks' },
      { label: 'Transport', value: 'Ferry terminal to La Ceiba, Honduras mainland' },
      { label: 'Affordability', value: 'Most affordable neighborhood on Roatan' },
    ],
    faqs: [
      {
        q: 'Why is Coxen Hole so much more affordable than the rest of Roatan?',
        a: 'Coxen Hole lacks the beachfront access and tourist infrastructure that drives prices up in the western neighborhoods. However, it is the island\'s administrative and commercial capital, which gives it practical advantages for residents managing legal and financial affairs.',
      },
      {
        q: 'Is Coxen Hole a good investment area?',
        a: 'For buyers willing to take on more risk and who have a longer time horizon, Coxen Hole offers the most affordable entry point on the island. As the broader Roatan market appreciates, more centrally located and affordable areas tend to see proportional gains.',
      },
      {
        q: 'Where are the banks and legal offices on Roatan?',
        a: 'Most of Roatan\'s banks, notary offices, and legal services are concentrated in Coxen Hole. If you\'re going through the property purchase process, you will likely need to make several trips to Coxen Hole for official paperwork.',
      },
      {
        q: 'How far is Coxen Hole from the airport?',
        a: 'The Roatan International Airport is located just outside Coxen Hole — it\'s the closest neighborhood to the airport, typically just 5–10 minutes away.',
      },
    ],
  },
];

export default neighborhoods;
