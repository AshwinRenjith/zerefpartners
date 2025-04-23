
import { ArrowUp, Mail, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zeref-950 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <span className="gold-trident text-3xl font-serif mr-2">🔱</span>
              <span className="font-serif text-xl font-bold tracking-tight">Zeref Partners</span>
            </div>
            <p className="text-gray-400 mb-4">
              Connecting visionary leaders with companies shaping tomorrow.
            </p>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">C-Suite & VP Hires</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">Foundational Leadership Teams</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">Confidential Replacements</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">Ultra-Niche Specialists</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">About Us</a></li>
              <li><a href="#process" className="text-gray-400 hover:text-gold-500 transition-colors">Our Process</a></li>
              <li><a href="#why-zeref" className="text-gray-400 hover:text-gold-500 transition-colors">Why Zeref</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">Testimonials</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:zerefpartners@proton.me" className="text-gray-400 hover:text-gold-500 transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" /> zerefpartners@proton.me
                </a>
              </li>
              <li>
                <a href="tel:+919747965366" className="text-gray-400 hover:text-gold-500 transition-colors">
                  +91 9747965366
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/in/ashwin-renjith-629024220/" 
                  className="text-gray-400 hover:text-gold-500 transition-colors flex items-center gap-2"
                  target="_blank" rel="noopener noreferrer"
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="https://x.com/Ashwin_Renjith" 
                  className="text-gray-400 hover:text-gold-500 transition-colors flex items-center gap-2"
                  target="_blank" rel="noopener noreferrer"
                >
                  <Twitter className="w-4 h-4" /> Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-zeref-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Zeref Partners. All rights reserved.
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Terms of Service</a>
            <button 
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-zeref-800 flex items-center justify-center hover:bg-zeref-700 transition-colors"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
