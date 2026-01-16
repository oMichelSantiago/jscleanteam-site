import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const values = [
    {
      title: 'Consistency',
      description: 'Every property receives the same high standard of care, every time. Reliability is not negotiable.',
    },
    {
      title: 'Detail',
      description: 'We focus on the details that matter. Small oversights become big problems. We do not let them happen.',
    },
    {
      title: 'Trust',
      description: 'Your property is an investment. We protect it with the same care we would our own.',
    },
    {
      title: 'Presentation',
      description: 'Guest-ready is not just a phrase. It is a commitment to excellence in every space.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-white border-b border-sand-gold">
        <div className="container max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-navy mb-6 tracking-widest">
            A Partner, Not a Provider
          </h1>
          <p className="text-lg font-light text-gray-700">
            We are a Premium Property Care Partner focused on high standards, consistency, and presentation.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-off-white">
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-8 tracking-widest text-center">
            Our Mission
          </h2>
          <p className="text-sm font-light text-gray-700 leading-relaxed mb-6">
            JS Clean Team exists to provide institutional-grade property care for high-value residential and vacation properties in Northwest Florida. We understand that your property is more than a home—it is an investment, a business asset, or a cherished retreat.
          </p>
          <p className="text-sm font-light text-gray-700 leading-relaxed mb-6">
            We approach every property with the rigor of asset protection. Our focus is on operational consistency, attention to detail, and presentation excellence. We are not a "cleaning company." We are a property care partner.
          </p>
          <p className="text-sm font-light text-gray-700 leading-relaxed">
            Our goal is simple: to make your property look and feel its best, every single time. To earn your trust through reliability. To become an indispensable part of your property management strategy.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-8 tracking-widest text-center">
            Our Story
          </h2>
          <p className="text-sm font-light text-gray-700 leading-relaxed mb-6">
            Based in Santa Rosa Beach, Florida, we serve the Emerald Coast and 30A markets. We understand the unique demands of this region—the high expectations of property owners, the operational needs of vacation rental managers, and the standards required for luxury real estate.
          </p>
          <p className="text-sm font-light text-gray-700 leading-relaxed">
            We have built our reputation on one principle: consistency. When you partner with JS Clean Team, you know exactly what you will get—every time.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-navy text-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16 tracking-widest" style={{color: '#002147'}}>
            Our Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {values.map((value, index) => (
              <div key={index} className="border-l-4 border-sand-gold pl-6">
                <h3 className="text-xl font-bold mb-4 tracking-wide" style={{color: '#002147'}}>
                  {value.title}
                </h3>
                <p className="text-sm font-light text-gray-300 leading-relaxed" style={{color: 'oklch(0.373 0.034 259.733002)'}}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-20 bg-off-white">
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-12 tracking-widest text-center">
            Why Partner With JS Clean Team
          </h2>

          <div className="space-y-6">
            <div className="flex gap-4">
              <CheckCircle2 size={24} className="text-sand-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-navy mb-2 tracking-wide">Institutional Approach</h3>
                <p className="text-sm font-light text-gray-700">
                  We treat property care with the rigor of institutional management. Your property is protected.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 size={24} className="text-sand-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-navy mb-2 tracking-wide">Operational Reliability</h3>
                <p className="text-sm font-light text-gray-700">
                  Property managers depend on us for consistent, predictable service. We deliver every time.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 size={24} className="text-sand-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-navy mb-2 tracking-wide">Local Expertise</h3>
                <p className="text-sm font-light text-gray-700">
                  We understand the Emerald Coast market and the specific needs of Santa Rosa Beach and 30A properties.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 size={24} className="text-sand-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-navy mb-2 tracking-wide">Detail-Oriented</h3>
                <p className="text-sm font-light text-gray-700">
                  We understand that the details matter. We do not overlook anything.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white border-t border-sand-gold">
        <div className="container text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-6 tracking-widest">
            Let us Work Together
          </h2>
          <p className="text-sm font-light text-gray-700 mb-8">
            Ready to experience premium property care? Contact us to discuss how we can partner with you.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-navy text-white text-sm font-light tracking-wide hover:bg-opacity-90 transition-colors" style={{color: '#002147', fontWeight: '600'}}
          >
            Schedule a Consultation
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
