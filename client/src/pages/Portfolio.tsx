import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function Portfolio() {
  const [filter, setFilter] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      title: 'Master Bedroom Suite',
      category: 'residential',
      image: '/images/portfolio-master-bedroom.webp',
      location: 'Destin',
      description:
        'A space designed to convey calm, cleanliness, and sophistication. The primary suite is prepared with absolute attention to detail, respecting both the environment and the standard of the residence.',
    },
    {
      id: 2,
      title: 'Modern Kitchen',
      category: 'residential',
      image: '/images/portfolio-modern-kitchen.webp',
      location: 'Destin',
      description:
        'A refined kitchen environment where cleanliness and organization support both comfort and functionality. Every detail is prepared with care and consistency.',
    },
    {
      id: 3,
      title: 'Luxury Bathroom',
      category: 'residential',
      image: '/images/portfolio-bathroom-spa.webp',
      location: 'Destin',
      description:
        'A bathroom carefully prepared to provide a clean, organized, and welcoming experience. Meticulous attention to detail reflects the level of care applied to every space within the residence.',
    },
    {
      id: 4,
      title: 'Living Room',
      category: 'residential',
      image: '/images/living-room.webp',
      location: 'Destin',
      description:
        'The living room is prepared with absolute attention to cleanliness, organization, and presentation. Every detail contributes to a comfortable, balanced, and welcoming space.',
    },

    // Vacation Rentals
    {
      id: 5,
      title: 'Primary Bedroom — Short-Term Rental',
      category: 'vacation-rental',
      image: '/images/vacation-rental-bedroom.webp',
      location: '30A · Santa Rosa Beach',
      description:
        'The space where guests rest demands quiet, precision, and continuous care. Every detail is maintained so comfort and presentation remain intact, even under high turnover.',
    },
    {
      id: 6,
      title: 'Kitchen — Turnover-Ready Environmen',
      category: 'vacation-rental',
      image: '/images/vacation-rental-kitchen.webp',
      location: 'Miramar Beach',
      description:
        'The functional heart of the property, prepared for frequent use without losing order. Cleanliness, organization, and flow designed for smooth transitions between stays.',
    },
    {
      id: 7,
      title: 'Bathroom — Inspection-Critical Area',
      category: 'vacation-rental',
      image: '/images/vacation-rental-bathroom.webp',
      location: '30A · Santa Rosa Beach',
      description:
        'This is where trust is built through details. Surfaces, finishes, and presentation handled with absolute rigor at every occupancy cycle.',
    },
    {
      id: 8,
      title: 'Living Area — Shared Space Management',
      category: 'vacation-rental',
      image: '/images/vacation-rental-living-area.webp',
      location: '30A · Santa Rosa Beach',
      description:
        'The environment that shapes the first impression. Maintained to preserve visual balance, shared comfort, and a consistent sense of care.',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Properties' },
    { id: 'residential', label: 'Residential' },
    { id: 'vacation-rental', label: 'Vacation Rental' },
  ];

  const filteredItems =
    filter === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-white border-b border-sand-gold">
        <div className="container max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-navy mb-4 tracking-widest">
            Selected Spaces
          </h1>
          <p className="text-lg font-light text-gray-700">
            Guest-Ready Presentation
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-12 bg-off-white border-b border-sand-gold">
        <div className="container">
          <div className="flex justify-center gap-6 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`text-sm font-light tracking-wide transition-colors pb-2 ${
                  filter === cat.id
                    ? 'text-navy border-b-2 border-sand-gold'
                    : 'text-gray-600 hover:text-navy'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {filteredItems.map((item) => (
              <div key={item.id} className="group">
                <div className="overflow-hidden aspect-square mb-6">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="border-l-2 border-sand-gold pl-6">
                  <h3 className="text-2xl font-bold text-navy mb-2 tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-sm font-light text-gray-600 mb-4">
                    {item.location}
                  </p>
                  <p className="text-sm font-light text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-sm font-light text-gray-600">
                No properties found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy text-white border-t border-sand-gold">
        <div className="container text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 tracking-widest">
            See Your Property at Its Best
          </h2>
          <p className="text-sm font-light text-gray-300 mb-8">
            Let us bring the same attention to detail and premium care to your
            property.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 border border-sand-gold text-navy text-sm font-light tracking-wide bg-white hover:bg-sand-gold hover:text-navy transition-colors"
          >
            Request Availability
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
