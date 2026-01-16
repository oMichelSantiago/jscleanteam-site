import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', propertyType: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-white border-b border-sand-gold">
        <div className="container max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-navy mb-6 tracking-widest">
            Schedule a Consultation
          </h1>
          <p className="text-lg font-light text-gray-700">
            Let us discuss how we can provide premium property care for your property.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-off-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-8 tracking-wide">
                Get in Touch
              </h2>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded p-6 text-center">
                  <p className="text-sm font-light text-green-800">
                    Thank you for reaching out. We will contact you soon to discuss your property care needs.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-light text-navy mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border bg-white text-navy text-sm font-light focus:outline-none focus:border-sand-gold transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-light text-navy mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border bg-white text-navy text-sm font-light focus:outline-none focus:border-sand-gold transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-light text-navy mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border bg-white text-navy text-sm font-light focus:outline-none focus:border-sand-gold transition-colors"
                      placeholder="+1 (662) 662-2243"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-light text-navy mb-2">
                      Property Type
                    </label>
                    <select
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border bg-white text-navy text-sm font-light focus:outline-none focus:border-sand-gold transition-colors"
                    >
                      <option value="">Select property type</option>
                      <option value="residential">Residential</option>
                      <option value="vacation-rental">Vacation Rental</option>
                      <option value="commercial">Commercial</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-light text-navy mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-border bg-white text-navy text-sm font-light focus:outline-none focus:border-sand-gold transition-colors resize-none"
                      placeholder="Tell us about your property care needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-navy text-white text-sm font-light tracking-wide hover:bg-opacity-90 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-8 tracking-wide">
                Contact Information
              </h2>

              <div className="space-y-8">
                {/* Phone */}
                <div className="flex gap-4">
                  <Phone size={24} className="text-sand-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-sm font-bold text-navy mb-2 tracking-wide">
                      Phone
                    </h3>
                    <a
                      href="tel:+16626622243"
                      className="text-sm font-light text-gray-700 hover:text-sand-gold transition-colors"
                    >
                      +1 (662) 662-2243
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex gap-4">
                  <MessageCircle size={24} className="text-sand-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-sm font-bold text-navy mb-2 tracking-wide">
                      WhatsApp
                    </h3>
                    <a
                      href="https://wa.me/16626622243"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-light text-gray-700 hover:text-sand-gold transition-colors"
                    >
                      +1 (662) 662-2243
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <Mail size={24} className="text-sand-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-sm font-bold text-navy mb-2 tracking-wide">
                      Email
                    </h3>
                    <a
                      href="mailto:contact@jscleanteam.com"
                      className="text-sm font-light text-gray-700 hover:text-sand-gold transition-colors"
                    >
                      contact@jscleanteam.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex gap-4">
                  <MapPin size={24} className="text-sand-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-sm font-bold text-navy mb-2 tracking-wide">
                      Location
                    </h3>
                    <p className="text-sm font-light text-gray-700">
                      Santa Rosa Beach, FL<br />
                      Serving Emerald Coast & 30A
                    </p>
                  </div>
                </div>

                {/* Service Area */}
                <div className="border-t border-sand-gold pt-8 mt-8">
                  <h3 className="text-sm font-bold text-navy mb-4 tracking-wide">
                    Service Area
                  </h3>
                  <p className="text-sm font-light text-gray-700 leading-relaxed">
                    We serve Santa Rosa Beach, the Emerald Coast, 30A, and surrounding areas in Northwest Florida. Whether your property is a residential home, vacation rental, or commercial space, we are ready to discuss your property care needs.
                  </p>
                </div>

                {/* Response Time */}
                <div className="bg-off-white p-6 border-l-4 border-sand-gold">
                  <h3 className="text-sm font-bold text-navy mb-2 tracking-wide">
                    Response Time
                  </h3>
                  <p className="text-sm font-light text-gray-700">
                    We typically respond to inquiries within 24 hours. For urgent matters, please call us directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="py-20 bg-white border-t border-sand-gold">
        <div className="container text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-6 tracking-wide">
            Follow Us
          </h2>
          <p className="text-sm font-light text-gray-700 mb-8">
            Stay updated with our latest projects and property care insights.
          </p>
          <div className="flex justify-center gap-8 flex-wrap">
            <a
              href="https://instagram.com/jscleanteam_"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-light text-navy hover:text-sand-gold transition-colors"
            >
              <Instagram size={20} className="text-sand-gold" />
              @jscleanteam_
            </a>
            <a
              href="https://facebook.com/jscleanteam"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-light text-navy hover:text-sand-gold transition-colors"
            >
              <Facebook size={20} className="text-sand-gold" />
              @jscleanteam
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
