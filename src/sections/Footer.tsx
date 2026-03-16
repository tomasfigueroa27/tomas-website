import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1d1d1d] text-white">
      {/* Main Footer */}
      <div className="section-container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img 
              src="/logo-white.webp" 
              alt="Tomas Figueroa Real Estate" 
              className="h-16 w-auto mb-6"
            />
            <p className="text-gray-400 mb-6 max-w-md">
              Strategic real estate guidance in Roatan, Honduras — helping investors and 
              relocation buyers make disciplined, informed decisions.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61557310059412" 
                target="_blank" 
                rel="noopener"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#04649b] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/roatanbytomas/" 
                target="_blank" 
                rel="noopener"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#04649b] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/roatanbytomas/" 
                target="_blank" 
                rel="noopener"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#04649b] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://www.youtube.com/channel/UCfH3CqrQxYKPBlXVzw6Sz_Q" 
                target="_blank" 
                rel="noopener"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#04649b] transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6" style={{ fontFamily: "'Roboto Slab', serif" }}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li><a href="/#properties" className="text-gray-400 hover:text-white transition-colors">Properties</a></li>
              <li><a href="/#/new-developments" className="text-gray-400 hover:text-white transition-colors">Blue Vista</a></li>
              <li><a href="/#/about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="/#/blog" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="/#/guides" className="text-gray-400 hover:text-white transition-colors">Guides</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6" style={{ fontFamily: "'Roboto Slab', serif" }}>
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#04649b] flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  Lawson Rock, Sandy Bay<br />
                  Roatan, Bay Islands<br />
                  Honduras
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#04649b] flex-shrink-0" />
                <a href="tel:+50488488326" className="text-gray-400 hover:text-white transition-colors">
                  (504) 8848-8326
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#04649b] flex-shrink-0" />
                <a href="mailto:tomas@kwroatan.com" className="text-gray-400 hover:text-white transition-colors">
                  tomas@kwroatan.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              {currentYear} Tomas Figueroa Real Estate. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
