
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-4 bg-acutis-black/90 backdrop-blur-md shadow-md' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container px-6 mx-auto">
        <nav className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <img src="https://acutistechnology.com.br/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnovalogofundobranco.f667e628.png&w=128&q=75" alt="Acutis Technology" className="h-auto" />
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              <a href="#services" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                Serviços
              </a>
              <a href="#projects" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                Projetos
              </a>
              <a href="#about" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                Sobre nós
              </a>
              <a href="#contact" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                Contato
              </a>
            </div>
            <Button className="btn-gradient font-medium" onClick={scrollToContact}>Solicitar orçamento</Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 flex flex-col gap-4 animate-fadeIn">
            <a 
              href="#services" 
              className="text-sm font-medium text-white/80 hover:text-white transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Serviços
            </a>
            <a 
              href="#projects" 
              className="text-sm font-medium text-white/80 hover:text-white transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projetos
            </a>
            <a 
              href="#about" 
              className="text-sm font-medium text-white/80 hover:text-white transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sobre nós
            </a>
            <a 
              href="#contact" 
              className="text-sm font-medium text-white/80 hover:text-white transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contato
            </a>
            <Button 
              className="btn-gradient font-medium mt-2 w-full"
              onClick={scrollToContact}
            >
              Solicitar orçamento
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
