export type ContentBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'facts'; items: { label: string; value: string }[] };

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image?: string;
  body: ContentBlock[];
}

const posts: BlogPost[] = [
  {
    slug: 'where-is-roatan',
    title: 'Where is Roatan?',
    date: '2026-04-01',
    category: 'About Roatan',
    excerpt:
      'Roatan is the largest of the Bay Islands, located in the western Caribbean Sea about 35 miles off the northern coast of Honduras — and home to the second-largest coral reef system in the world.',
    body: [
      {
        type: 'p',
        text: 'Roatan is the largest of the Bay Islands, a group of three islands that also includes Utila and Guanaja. Located in the western Caribbean Sea, Roatan lies approximately 35 miles off the northern coast of Honduras. The island is about 40 miles long and up to 5 miles wide, with an east-west orientation.',
      },
      {
        type: 'p',
        text: "Roatan sits along the Mesoamerican Barrier Reef — the largest reef system in the Northern Hemisphere and second in size only to Australia's Great Barrier Reef. Its proximity to this reef makes it a popular destination for diving, snorkeling, and other marine activities.",
      },
      {
        type: 'p',
        text: 'The island has a stable tropical climate, with average temperatures ranging from 70°F to 80°F year-round. Roatan is also located outside the main hurricane zone, making it a relatively secure location for both residents and visitors.',
      },
      {
        type: 'h2',
        text: 'Key Facts About Roatan',
      },
      {
        type: 'facts',
        items: [
          { label: 'Location', value: '35 miles north of Honduras, between Utila and Guanaja.' },
          { label: 'Size', value: '40 miles long, up to 5 miles wide.' },
          { label: 'Climate', value: 'Tropical, 70°F–80°F year-round.' },
          {
            label: 'Travel Options',
            value: 'Direct flights from major U.S. cities or ferry from La Ceiba, Honduras.',
          },
          {
            label: 'Features',
            value:
              'Stunning beaches, diverse real estate options, and easy island living with U.S. dollar acceptance and English widely spoken.',
          },
        ],
      },
      {
        type: 'p',
        text: 'Roatan combines natural beauty, ease of access, and modern conveniences, making it a popular spot for both tourists and property buyers.',
      },
      {
        type: 'h2',
        text: "Understanding Roatan's Weather Patterns",
      },
      {
        type: 'p',
        text: 'Roatan experiences a stable tropical climate year-round, with average daily temperatures ranging from 70°F to 80°F and peaking around 86°F. Consistent sea breezes help regulate the heat, while annual humidity averages around 77%.',
      },
      {
        type: 'p',
        text: "The island has two defined seasons: a dry season and a rainy season. Despite these shifts, vegetation remains lush throughout the year. Rain typically falls on approximately 112 days annually, though it's often limited to brief showers. The most concentrated rainfall occurs between October and January, when storms can be more frequent and prolonged.",
      },
      {
        type: 'p',
        text: "Roatan's geographic location places it outside the main Atlantic hurricane zone. Historically, the island has seen hurricane activity only once every few decades, with an average frequency of one every 26 years. This relative weather safety contributes to its appeal for homeowners and long-term residents.",
      },
      {
        type: 'h3',
        text: 'Why This Matters for Buyers',
      },
      {
        type: 'p',
        text: "Consistent weather, minimal hurricane risk, and year-round greenery make Roatan not only a comfortable place to live but also a reliable environment for protecting your investment. Whether you're buying a primary residence or a rental property, the climate adds long-term value and peace of mind.",
      },
      {
        type: 'h2',
        text: 'Getting to Roatan',
      },
      {
        type: 'p',
        text: 'Reaching Roatan is straightforward, with several travel options available. Whether you prefer flying directly or combining air travel with a ferry ride, there are dependable ways to get to this Caribbean destination.',
      },
      {
        type: 'h3',
        text: 'Flight Options',
      },
      {
        type: 'p',
        text: 'You can fly directly to Roatan (RTB) with these airlines:',
      },
      {
        type: 'ul',
        items: [
          'United Airlines: Daily non-stop flights from Houston (IAH) and regular service from Denver (DEN).',
          'American Airlines: Daily non-stop flights from Miami (MIA) and regular service from Dallas-Fort Worth (DFW).',
          'Delta Air Lines: Regular flights from Atlanta (ATL).',
          'Sun Country Airlines: Seasonal flights from Minneapolis (MSP).',
          'CM Airlines, Tropic Air, and other regional carriers offer flights to and from Central America.',
          'WestJet and other charter services also provide seasonal flights from Canada.',
        ],
      },
      {
        type: 'p',
        text: "Roatan's airport makes the island accessible year-round for both international visitors and regional travelers.",
      },
      {
        type: 'h3',
        text: 'Ferry Transportation',
      },
      {
        type: 'p',
        text: 'For those traveling from mainland Honduras, ferry service is available between La Ceiba and Roatan. The Galaxy Wave ferry departs La Ceiba twice daily and offers a reliable alternative for regional access to the island. Return trips from Roatan are scheduled each morning and afternoon.',
      },
      {
        type: 'h2',
        text: 'Getting Around Roatan',
      },
      {
        type: 'p',
        text: 'Transportation on the island is primarily available through local taxi services and car rental companies. For visitors or residents looking to rent a vehicle, well-known providers like Sixt and Avis Rent-A-Car are available. While there are some lower-cost rental options, these tend to be less formal and may not follow standard business practices.',
      },
      {
        type: 'p',
        text: "For more adventurous travelers or those planning to stay within a specific area, scooters are a popular alternative. They're ideal for navigating shorter distances, coastal roads, and tight village streets. Scooter rentals are generally more affordable and provide a fun, flexible way to explore the island at your own pace — but they're best suited for those comfortable on two wheels and not planning to drive long distances.",
      },
      {
        type: 'p',
        text: 'In some parts of the island, especially in beach and resort areas, you may also find water taxis, ATVs, or tuk-tuks as local transportation options. These add a unique and practical layer to getting around, especially for short hops between nearby destinations.',
      },
    ],
  },
];

export default posts;
