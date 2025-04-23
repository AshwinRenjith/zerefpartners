
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Gold color utility
  const goldText = "text-gold-500"; // tailwind gold

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center">
            <span className="gold-trident text-3xl font-serif mr-2">🔱</span>
            <span className="font-serif text-xl font-bold tracking-tight">Zeref Partners</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className={`text-sm font-medium ${goldText} hover:text-gold-500 transition-colors`}>Services</a>
            <a href="#process" className={`text-sm font-medium ${goldText} hover:text-gold-500 transition-colors`}>Our Process</a>
            <a href="#why-zeref" className={`text-sm font-medium ${goldText} hover:text-gold-500 transition-colors`}>Why Zeref</a>
            <a href="mailto:zerefpartners@proton.me">
              <Button size="sm" className="bg-zeref-900 text-gold-500 hover:text-white">
                Get In Touch
              </Button>
            </a>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <a href="#services" className={`text-base font-medium ${goldText} hover:text-gold-500 transition-colors`} onClick={() => setIsOpen(false)}>Services</a>
            <a href="#process" className={`text-base font-medium ${goldText} hover:text-gold-500 transition-colors`} onClick={() => setIsOpen(false)}>Our Process</a>
            <a href="#why-zeref" className={`text-base font-medium ${goldText} hover:text-gold-500 transition-colors`} onClick={() => setIsOpen(false)}>Why Zeref</a>
            <a href="mailto:zerefpartners@proton.me" className="w-full">
              <Button size="sm" className="bg-zeref-900 text-gold-500 hover:text-white w-full">
                Get In Touch
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
