
import { useEffect } from 'react';
import { Navbar } from '@/components/acutis/navbar';
import { Hero } from '@/components/acutis/hero';
import { Services } from '@/components/acutis/services';
import { Projects } from '@/components/acutis/projects';
import { About } from '@/components/acutis/about';
import { CTA } from '@/components/acutis/cta';
import { Contact } from '@/components/acutis/contact';
import { Footer } from '@/components/acutis/footer';
import { ScrollToTop } from '@/components/acutis/scroll-to-top';

const Index = () => {
  useEffect(() => {
    document.title = "Acutis Technology | Soluções Digitais Personalizadas";
    
    // Initialize reveal animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('active');
            }, 100);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal-animation');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-acutis-black">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <About />
      <CTA />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
