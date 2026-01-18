import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle2 } from 'lucide-react';

export default function Home() {
  const services = [
    {
      title: 'Residential Care',
      description: 'Premium care for homes that are lived in. We focus on cleanliness, organization, and respectful routine—ensuring your home remains comfortable, orderly, and consistently maintained.',
    },
    {
      title: 'Vacation Rental Turnover',
      description: 'Reliable, guest-ready preparation between bookings. We deliver consistent turnover execution, supporting smooth operations and clear coordination with property managers',
    },
    {
      title: 'Post-Construction Clean',
      description: 'High-standard cleanup after renovations or construction. We remove dust and residue with careful attention to surfaces and finishes—delivering a polished, move-in ready result.',
    },
  ];

  const portfolioItems = [
    {
      image: '/images/portfolio-master-bedroom.webp',
      title: 'Master Bedroom',
      location: 'Destin',
    },
    {
      image: '/images/portfolio-modern-kitchen.webp',
      title: 'Modern Kitchen',
      location: 'Destin',
    },
    {
      image: '/images/portfolio-bathroom-spa.webp',
      title: 'Spa Bathroom',
      location: 'Destin',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero-luxury-living-room.webp)',
          }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="relative z-10 container text-center text-white max-w-3xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold tracking-widest mb-6 leading-tight">
            Operational Consistency.<br />
            Exceptional Home Care.
          </h1>
          <p className="text-lg font-light mb-8 max-w-2xl mx-auto">
            Premium, consistent care for high-standard residences and vacation properties across Northwest Florida.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 border-2 border-sand-gold text-white text-sm font-light tracking-wide hover:bg-sand-gold hover:text-navy transition-colors"
          >
            Request Availability
          </a>
        </div>
      </section>

      {/* Positioning Statement */}
      <section className="py-20 bg-white">
        <div className="container max-w-3xl mx-auto text-center">
          <p className="text-lg font-light text-navy leading-relaxed">
            JS Clean Team is a <span className="font-semibold">Premium Property Care Partner</span> focused on consistency, presentation, and long-term care for both residential homes and vacation properties across Northwest Florida. We combine structured processes with attentive, detail-driven service in every home we maintain.
          </p>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-off-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-navy text-center mb-16 tracking-widest">
            Our Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 border-l-2 border-sand-gold">
                <h3 className="text-xl font-bold text-navy mb-4 tracking-wide">
                  {service.title}
                </h3>
                <p className="text-sm font-light text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/services"
              className="inline-block text-sm font-light text-navy hover:text-sand-gold transition-colors border-b border-sand-gold pb-1"
            >
              View All Services →
            </a>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-navy text-center mb-4 tracking-widest">
            Selected Spaces
          </h2>
          <p className="text-center text-sm font-light text-gray-600 mb-16">
            Guest-Ready Presentation
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {portfolioItems.map((item, index) => (
              <div key={index} className="overflow-hidden aspect-square">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="/portfolio"
              className="inline-block px-8 py-3 border border-sand-gold text-navy text-sm font-light tracking-wide hover:bg-sand-gold hover:text-white transition-colors"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-navy text-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16 tracking-widest text-white" style={{color: '#002147'}}>
            Reliability is Our Standard
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <CheckCircle2 size={48} className="text-sand-gold" />
              </div>
              <h3 className="text-xl font-bold mb-4 tracking-wide text-white" style={{color: 'oklch(0.373 0.034 259.733002)'}}>Consistency</h3>
              <p className="text-sm font-light text-gray-300" style={{color: 'oklch(0.373 0.034 259.733002)'}}>
                Reliable care delivered with the same standard, every visit. Whether for daily living or guest turnover, our process ensures predictable, high-quality results.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-6">
                <CheckCircle2 size={48} className="text-sand-gold" />
              </div>
              <h3 className="text-xl font-bold mb-4 tracking-wide text-white" style={{color: 'oklch(0.373 0.034 259.733002)'}}>Detail</h3>
              <p className="text-sm font-light text-gray-300" style={{color: 'oklch(0.373 0.034 259.733002)'}}>
                Attention to details that shape the experience of the home. We address the small elements that preserve order, comfort, and overall presentation.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-6">
                <CheckCircle2 size={48} className="text-sand-gold" />
              </div>
              <h3 className="text-xl font-bold mb-4 tracking-wide text-white" style={{color: 'oklch(0.373 0.034 259.733002)'}}>Trust</h3>
              <p className="text-sm font-light text-gray-300" style={{color: 'oklch(0.373 0.034 259.733002)'}}>
                Care built on respect, discretion, and reliability. We work in your home with professionalism and responsibility—earning trust over time, not through promises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white border-t border-sand-gold">
        <div className="container text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-6 tracking-widest">
            Ready to Elevate Your Property Care?
          </h2>
          <p className="text-sm font-light text-gray-700 mb-8">
            Schedule a consultation with our team to discuss your property care needs.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-navy text-white text-sm font-light tracking-wide hover:bg-opacity-90 transition-colors" style={{color: 'oklch(0.373 0.034 259.733002)', fontWeight: '700'}}
          >
            Schedule a Consultation
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
