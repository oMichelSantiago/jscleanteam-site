import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle2 } from 'lucide-react';

export default function Home() {
  const services = [
    {
      title: 'Residential Care',
      description: 'Comprehensive property maintenance for luxury homes with attention to detail and consistency.',
    },
    {
      title: 'Vacation Rental Turnover',
      description: 'Guest-ready preparation between bookings. Operational consistency for property managers.',
    },
    {
      title: 'Post-Construction Clean',
      description: 'High-standard cleanup after renovations. Presentation-ready properties.',
    },
  ];

  const portfolioItems = [
    {
      image: '/images/portfolio-master-bedroom.jpg',
      title: 'Master Bedroom',
      location: 'Santa Rosa Beach',
    },
    {
      image: '/images/portfolio-modern-kitchen.jpg',
      title: 'Modern Kitchen',
      location: 'Emerald Coast',
    },
    {
      image: '/images/portfolio-bathroom-spa.jpg',
      title: 'Spa Bathroom',
      location: 'Northwest Florida',
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
            backgroundImage: 'url(/images/hero-luxury-living-room.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="relative z-10 container text-center text-white max-w-3xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold tracking-widest mb-6 leading-tight">
            Operational Consistency.<br />
            Guest-Ready Presentation.
          </h1>
          <p className="text-lg font-light mb-8 max-w-2xl mx-auto">
            Premium property care for residential and vacation properties in Northwest Florida.
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
            JS Clean Team is a <span className="font-semibold">Premium Property Care Partner</span> focused on high standards, consistency, and presentation for residential and vacation properties in Northwest Florida. We protect your assets with institutional-grade service and attention to detail.
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
                Every property receives the same high standard of care, every time.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-6">
                <CheckCircle2 size={48} className="text-sand-gold" />
              </div>
              <h3 className="text-xl font-bold mb-4 tracking-wide text-white" style={{color: 'oklch(0.373 0.034 259.733002)'}}>Detail</h3>
              <p className="text-sm font-light text-gray-300" style={{color: 'oklch(0.373 0.034 259.733002)'}}>
                We focus on the details that matter. Nothing is overlooked.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-6">
                <CheckCircle2 size={48} className="text-sand-gold" />
              </div>
              <h3 className="text-xl font-bold mb-4 tracking-wide text-white" style={{color: 'oklch(0.373 0.034 259.733002)'}}>Trust</h3>
              <p className="text-sm font-light text-gray-300" style={{color: 'oklch(0.373 0.034 259.733002)'}}>
                Your property is an investment. We protect it like our own.
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
