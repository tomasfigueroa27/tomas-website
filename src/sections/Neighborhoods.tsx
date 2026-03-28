import { useEffect, useRef, useState } from 'react';
import { MapPin, ArrowRight } from 'lucide-react';

const neighborhoods = [
  {
    name: 'West Bay',
    description: 'Home to the famous West Bay Beach, this area offers luxury resorts, restaurants, and world-class diving.',
    image: '/neighborhood-westbay.jpg',
    features: ['White sand beach', 'Diving & snorkeling', 'Luxury resorts'],
  },
  {
    name: 'West End',
    description: 'A vibrant village known for its nightlife, restaurants, and dive shops along the waterfront.',
    image: '/neighborhood-westend.jpg',
    features: ['Nightlife', 'Local dining', 'Dive shops'],
  },
  {
    name: 'Sandy Bay',
    description: 'A quiet residential area with beautiful beaches and the famous Carambola Gardens.',
    image: '/neighborhood-sandybay.jpg',
    features: ['Quiet beaches', 'Carambola Gardens', 'Residential'],
  },
  {
    name: 'Pristine Bay',
    description: 'An exclusive golf resort community with luxury homes and stunning ocean views.',
    image: '/neighborhood-pristine.jpg',
    features: ['Golf course', 'Luxury homes', 'Ocean views'],
  },
  {
    name: 'Coral Views',
    description: 'A hillside community offering panoramic views of the Caribbean Sea.',
    image: '/neighborhood-coralviews.jpg',
    features: ['Panoramic views', 'Hillside homes', 'Quiet area'],
  },
  {
    name: 'Camp Bay',
    description: 'An up-and-coming area on the East End with pristine beaches and development potential.',
    image: '/neighborhood-campbay.jpg',
    features: ['Pristine beaches', 'Development', 'East End'],
  },
];

const Neighborhoods = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="neighborhoods"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-[#f5f5f5]"
    >
      <div className="section-container">
        {/* Section Header */}
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="text-[#04649b] font-medium uppercase tracking-wider text-sm">
            Explore Roatan
          </span>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1d1d1d] mt-3 mb-4"
            style={{ fontFamily: "'Roboto Slab', serif" }}
          >
            Popular Neighborhoods
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the unique character of each area and find the perfect location for your new home.
          </p>
        </div>

        {/* Neighborhoods Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {neighborhoods.map((neighborhood, index) => (
            <div 
              key={neighborhood.name}
              className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100 + 300}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={neighborhood.image}
                  alt={neighborhood.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="400"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center gap-1 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>Roatan</span>
                  </div>
                  <h3 className="text-xl font-bold" style={{ fontFamily: "'Roboto Slab', serif" }}>
                    {neighborhood.name}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {neighborhood.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {neighborhood.features.map((feature) => (
                    <span 
                      key={feature}
                      className="text-xs bg-[#04649b]/10 text-[#04649b] px-3 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <a 
                  href="https://savvycal.com/tomasfigueroa/chat-with-tomas"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 text-[#04649b] font-medium hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Neighborhoods;
