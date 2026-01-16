import { useLocation } from 'wouter';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location === path;

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="container flex items-center justify-between py-6">
        {/* Logo */}
        <a href="/" className="flex flex-col items-center group">
          <div className="text-center">
            <h1 className="text-sm font-bold text-navy tracking-widest">JS</h1>
            <p className="text-xs text-navy tracking-widest font-light">CLEAN TEAM</p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.path}
              href={item.path}
              className={`text-sm font-light tracking-wide transition-colors ${
                isActive(item.path)
                  ? 'text-navy border-b-2 border-sand-gold pb-1'
                  : 'text-navy hover:text-sand-gold'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          href="/contact"
          className="hidden md:inline-block px-6 py-2 border border-sand-gold text-navy text-sm font-light tracking-wide hover:bg-sand-gold hover:text-white transition-colors"
        >
          Schedule Consultation
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-navy"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-border bg-white">
          <div className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className={`text-sm font-light tracking-wide py-2 ${
                  isActive(item.path)
                    ? 'text-navy border-l-2 border-sand-gold pl-4'
                    : 'text-navy hover:text-sand-gold'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="/contact"
              className="px-6 py-2 border border-sand-gold text-navy text-sm font-light tracking-wide hover:bg-sand-gold hover:text-white transition-colors text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Schedule Consultation
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
