import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle2 } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Residential Care',
      description: 'Comprehensive property maintenance for luxury homes. We provide regular cleaning, deep cleaning, and specialized services tailored to your property\'s needs. Our focus is on maintaining the presentation and condition of your investment.',
      features: [
        'Regular maintenance cleaning',
        'Deep cleaning services',
        'Specialized surface care',
        'Flexible scheduling',
      ],
    },
    {
      title: 'Vacation Rental Turnover',
      description: 'Guest-ready preparation between bookings. We ensure your property is immaculate and ready for every guest. Our operational consistency means your property managers can rely on us for every turnover.',
      features: [
        'Between-guest turnover cleaning',
        'Guest-ready presentation',
        'Rapid turnaround times',
        'Property manager coordination',
      ],
    },
    {
      title: 'Post-Construction Clean',
      description: 'High-standard cleanup after renovations and construction. We remove dust, debris, and construction residue to present your property in pristine condition.',
      features: [
        'Dust and debris removal',
        'Final polish and detailing',
        'Specialized surface cleaning',
        'Move-in ready presentation',
      ],
    },
    {
      title: 'Commercial Properties',
      description: 'Professional care for commercial spaces. We understand the operational requirements of commercial properties and provide reliable, consistent service.',
      features: [
        'Office cleaning',
        'Common area maintenance',
        'Flexible scheduling',
        'Reliable service partners',
      ],
    },
  ];

  const processSteps = [
    {
      number: '1',
      title: 'Assessment',
      description: 'We evaluate your property and understand your specific care requirements and expectations.',
    },
    {
      number: '2',
      title: 'Customized Plan',
      description: 'We develop a tailored care plan that aligns with your property\'s needs and your operational goals.',
    },
    {
      number: '3',
      title: 'Consistent Execution',
      description: 'Our team delivers reliable, high-standard service every time, maintaining your property\'s presentation.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-white border-b border-sand-gold">
        <div className="container max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-navy mb-6 tracking-widest">
            Our Commitment to Consistency
          </h1>
          <p className="text-lg font-light text-gray-700">
            We provide comprehensive property care services designed for high-value residential and vacation properties in Northwest Florida.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-off-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-10 border-l-4 border-sand-gold">
                <h3 className="text-2xl font-bold text-navy mb-4 tracking-wide">
                  {service.title}
                </h3>
                <p className="text-sm font-light text-gray-700 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-sand-gold flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-light text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The 120-Point Standard */}
      <section className="py-20 bg-white">
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-navy text-center mb-12 tracking-widest">
            The 120-Point Standard
          </h2>

          <div className="bg-off-white p-12 border-l-4 border-sand-gold mb-12">
            <p className="text-sm font-light text-gray-700 leading-relaxed mb-6">
              Our proprietary 120-point inspection and care standard ensures every property receives institutional-grade service. This comprehensive checklist covers every detail, from surfaces and fixtures to presentation and guest-readiness.
            </p>
            <p className="text-sm font-light text-gray-700 leading-relaxed">
              This is not operational clutter—it is rigor. Every point matters. Every property receives the same high standard, every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-navy text-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold text-navy mb-4 tracking-wide">
                  {step.title}
                </h3>
                <p className="text-sm font-light text-gray-700">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-navy text-white">
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 tracking-widest" style={{color: '#002147'}}>
            Why Choose JS Clean Team
          </h2>

          <div className="space-y-8">
            <div className="border-b border-sand-gold/30 pb-8">
              <h3 className="text-xl font-bold mb-3 tracking-wide" style={{color: '#002147', fontWeight: '600'}}>Institutional Mindset</h3>
              <p className="text-sm font-light text-gray-300" style={{color: 'oklch(0.373 0.034 259.733002)'}}>
                We approach property care with the rigor of institutional management. Your property is an investment, and we protect it accordingly.
              </p>
            </div>

            <div className="border-b border-sand-gold/30 pb-8">
              <h3 className="text-xl font-bold mb-3 tracking-wide" style={{color: '#002147', fontWeight: '600'}}>Operational Reliability</h3>
              <p className="text-sm font-light text-gray-300" style={{color: 'oklch(0.373 0.034 259.733002)'}}>
                Property managers and owners depend on us for consistent, predictable service. We deliver every time.
              </p>
            </div>

            <div className="border-b border-sand-gold/30 pb-8">
              <h3 className="text-xl font-bold mb-3 tracking-wide" style={{color: '#002147', fontWeight: '600'}}>Detail-Oriented</h3>
              <p className="text-sm font-light text-gray-300" style={{color: 'oklch(0.373 0.034 259.733002)'}}>
                We understand that the details matter. Small oversights become big problems. We don't let them happen.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 tracking-wide" style={{color: '#002147', fontWeight: '600'}}>Local Expertise</h3>
              <p className="text-sm font-light text-gray-300" style={{color: 'oklch(0.373 0.034 259.733002)'}}>
                Based in Santa Rosa Beach, we understand the Emerald Coast market and the unique needs of 30A properties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white border-t border-sand-gold">
        <div className="container text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-6 tracking-widest">
            Ready to Partner With Us?
          </h2>
          <p className="text-sm font-light text-gray-700 mb-8">
            Let's discuss how we can provide operational consistency and premium care for your property.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-navy text-white text-sm font-light tracking-wide hover:bg-opacity-90 transition-colors" style={{color: '#002147', fontWeight: '700'}}
          >
            Schedule a Consultation
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
