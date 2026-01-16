export default function Footer() {
  return (
    <footer className="bg-navy text-white border-t border-sand-gold">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col">
            <div className="mb-6">
              <h3 className="text-sm font-bold tracking-widest text-white" style={{color: '#002147'}}>JS</h3>
              <p className="text-xs tracking-widest font-bold text-white" style={{color: '#002147'}}>CLEAN TEAM</p>
            </div>
            <p className="text-sm font-light text-gray-300" style={{color: 'oklch(0.373 0.034 259.733002)'}}>
              Premium Property Care Partner for Northwest Florida.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold tracking-widest mb-6 border-b border-sand-gold pb-2 text-white" style={{color: '#002147'}}>
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="/services" className="text-sm font-light text-gray-300 hover:text-sand-gold transition-colors" style={{color: 'oklch(0.373 0.034 259.733002)'}}>
                  Residential Care
                </a>
              </li>
              <li>
                <a href="/services" className="text-sm font-light text-gray-300 hover:text-sand-gold transition-colors" style={{color: 'oklch(0.373 0.034 259.733002)'}}>
                  Vacation Rental Turnover
                </a>
              </li>
              <li>
                <a href="/services" className="text-sm font-light text-gray-300 hover:text-sand-gold transition-colors" style={{color: 'oklch(0.373 0.034 259.733002)'}}>
                  Post-Construction
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold tracking-widest mb-6 border-b border-sand-gold pb-2 text-white" style={{color: '#002147'}}>
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="/about" className="text-sm font-light text-gray-300 hover:text-sand-gold transition-colors" style={{color: 'oklch(0.373 0.034 259.733002)'}}>
                  About Us
                </a>
              </li>
              <li>
                <a href="/portfolio" className="text-sm font-light text-gray-300 hover:text-sand-gold transition-colors" style={{color: 'oklch(0.373 0.034 259.733002)'}}>
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm font-light text-gray-300 hover:text-sand-gold transition-colors" style={{color: 'oklch(0.373 0.034 259.733002)'}}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold tracking-widest mb-6 border-b border-sand-gold pb-2 text-white" style={{color: '#002147'}}>
              Contact
            </h4>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-gray-400 font-light mb-1" style={{color: 'oklch(0.373 0.034 259.733002)', fontWeight: '600'}}>Phone</p>
                <a href="tel:+16626622243" className="text-sm font-light text-gray-300 hover:text-sand-gold transition-colors" style={{color: 'oklch(0.373 0.034 259.733002)'}}>
                  +1 (662) 662-2243
                </a>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-light mb-1" style={{color: 'oklch(0.373 0.034 259.733002)', fontWeight: '600'}}>Email</p>
                <a href="mailto:contact@jscleanteam.com" className="text-sm font-light text-gray-300 hover:text-sand-gold transition-colors" style={{color: 'oklch(0.373 0.034 259.733002)'}}>
                  contact@jscleanteam.com
                </a>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-light mb-1" style={{color: 'oklch(0.373 0.034 259.733002)', fontWeight: '600'}}>Location</p>
                <p className="text-sm font-light text-gray-300" style={{color: 'oklch(0.373 0.034 259.733002)'}}>Santa Rosa Beach, FL</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-sand-gold/30 pt-8">
          <p className="text-xs font-light text-gray-400 text-center">
            © 2024 JS Clean Team. All rights reserved. | Premium Property Care Partner
          </p>
        </div>
      </div>
    </footer>
  );
}
