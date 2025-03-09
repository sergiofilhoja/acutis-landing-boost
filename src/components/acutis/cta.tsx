
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

export function CTA() {
  useEffect(() => {
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
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-purple opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-full h-full bg-mesh-pattern opacity-5"></div>
      
      <div className="container px-6 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto glass-card rounded-2xl p-8 md:p-12 reveal-animation">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para transformar sua <span className="text-gradient">ideia</span> em realidade?
            </h2>
            
            <p className="text-white/70 max-w-2xl mx-auto">
              Entre em contato conosco hoje mesmo e descubra como podemos ajudar a impulsionar seu negócio com soluções digitais personalizadas e de alta qualidade.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-gradient text-base font-medium h-12 px-8" size="lg">
              Solicitar orçamento
            </Button>
            <Button variant="outline" className="text-base font-medium h-12 px-8 border-acutis-purple/30 hover:bg-acutis-purple/10" size="lg">
              Fale com um especialista
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
