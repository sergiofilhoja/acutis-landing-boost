
import { Button } from '@/components/ui/button';
import { useEffect, useRef } from 'react';

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

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
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden" 
      style={{ 
        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(138, 51, 255, 0.15) 0%, rgba(0, 0, 0, 0) 70%)'
      }}
    >
      <div className="absolute inset-0 bg-mesh-pattern opacity-10"></div>
      <div className="absolute top-0 right-0 w-1/3 h-screen bg-gradient-purple opacity-5 blur-[150px]"></div>
      
      <div className="container px-6 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-center">
          {/* Text Content */}
          <div className="flex flex-col gap-6 reveal-animation">
            <div className="inline-flex items-center py-1 px-4 rounded-full bg-acutis-purple/10 border border-acutis-purple/20 max-w-max">
              <span className="text-xs font-medium text-acutis-purple-light">Software House Premium</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transformando ideias em 
              <span className="text-gradient"> soluções digitais</span> inovadoras
            </h1>
            
            <p className="text-lg text-white/70 max-w-xl">
              Desenvolvemos sistemas e aplicativos personalizados para impulsionar seu negócio e transformar a experiência digital dos seus clientes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button className="btn-gradient text-base font-medium h-12 px-8" size="lg">
                Iniciar projeto
              </Button>
              <Button variant="outline" className="text-base font-medium h-12 px-8 border-acutis-purple/30 hover:bg-acutis-purple/10" size="lg">
                Ver nossos cases
              </Button>
            </div>
            
            <div className="mt-6 flex items-center gap-4">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-acutis-black bg-white/90 flex items-center justify-center text-acutis-black text-xs font-medium">98%</div>
                <div className="w-10 h-10 rounded-full border-2 border-acutis-black bg-acutis-purple flex items-center justify-center text-white text-xs font-medium">+50</div>
                <div className="w-10 h-10 rounded-full border-2 border-acutis-black bg-white/90 flex items-center justify-center text-acutis-black text-xs font-medium">4.9</div>
              </div>
              <p className="text-sm text-white/70">
                <span className="text-white font-medium">+50 projetos</span> entregues com 
                <span className="text-white font-medium"> 98% de satisfação</span>
              </p>
            </div>
          </div>
          
          {/* Image/Visual Element */}
          <div className="relative flex items-center justify-center reveal-animation">
            <div className="absolute inset-0 bg-gradient-radial from-acutis-purple/20 to-transparent opacity-70 blur-xl"></div>
            
            <div className="w-full max-w-md mx-auto relative">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 rounded-full border border-acutis-purple/20 animate-pulse"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/5 h-3/5 rounded-full border border-acutis-purple/30 animate-rotate"></div>
              
              <div className="glass-card rounded-2xl p-6 relative animate-float">
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-acutis-purple opacity-10 blur-2xl rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-acutis-purple opacity-10 blur-2xl rounded-full"></div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass-card rounded-lg p-4 flex flex-col gap-2">
                    <div className="w-10 h-10 rounded-full bg-acutis-purple/20 flex items-center justify-center">
                      <span className="text-acutis-purple text-lg font-bold">A</span>
                    </div>
                    <h3 className="text-sm font-medium">Aplicativos</h3>
                    <p className="text-xs text-white/60">Mobile & Web</p>
                  </div>
                  
                  <div className="glass-card rounded-lg p-4 flex flex-col gap-2">
                    <div className="w-10 h-10 rounded-full bg-acutis-purple/20 flex items-center justify-center">
                      <span className="text-acutis-purple text-lg font-bold">S</span>
                    </div>
                    <h3 className="text-sm font-medium">Sistemas</h3>
                    <p className="text-xs text-white/60">Web & Desktop</p>
                  </div>
                  
                  <div className="glass-card rounded-lg p-4 flex flex-col gap-2">
                    <div className="w-10 h-10 rounded-full bg-acutis-purple/20 flex items-center justify-center">
                      <span className="text-acutis-purple text-lg font-bold">I</span>
                    </div>
                    <h3 className="text-sm font-medium">Integrações</h3>
                    <p className="text-xs text-white/60">APIs & Pagamentos</p>
                  </div>
                  
                  <div className="glass-card rounded-lg p-4 flex flex-col gap-2">
                    <div className="w-10 h-10 rounded-full bg-acutis-purple/20 flex items-center justify-center">
                      <span className="text-acutis-purple text-lg font-bold">L</span>
                    </div>
                    <h3 className="text-sm font-medium">Landing Pages</h3>
                    <p className="text-xs text-white/60">Alta conversão</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 glass-card rounded-lg p-3 flex items-center gap-3 animate-slideUp">
                <div className="w-8 h-8 rounded-full bg-acutis-purple flex items-center justify-center text-white text-xs font-bold">+</div>
                <span className="text-xs">Projetos personalizados</span>
              </div>
              
              <div className="absolute -top-6 -left-6 glass-card rounded-lg p-3 flex items-center gap-3 animate-slideDown">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span className="text-xs">Suporte contínuo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
