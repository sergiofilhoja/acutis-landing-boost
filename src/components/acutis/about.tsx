
import { useEffect } from 'react';

export function About() {
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
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh-pattern opacity-10"></div>
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-purple opacity-5 blur-[150px]"></div>
      
      <div className="container px-6 mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal-animation">
          <div className="inline-flex items-center py-1 px-4 rounded-full bg-acutis-purple/10 border border-acutis-purple/20 max-w-max mx-auto mb-4">
            <span className="text-xs font-medium text-acutis-purple-light">Quem somos</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Sobre a <span className="text-gradient">Acutis</span> Technology
          </h2>
          
          <p className="text-white/70">
            Somos uma software house especializada em desenvolver soluções digitais personalizadas que impulsionam negócios e transformam ideias em realidade.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* About Card 1 */}
          <div className="glass-card rounded-xl p-6 flex flex-col items-center text-center reveal-animation">
            <div className="w-16 h-16 rounded-full bg-acutis-purple/10 border border-acutis-purple/30 flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-gradient">01</span>
            </div>
            
            <h3 className="text-xl font-semibold mb-4">Nossa Missão</h3>
            
            <p className="text-white/70">
              Desenvolver soluções digitais inovadoras que impulsionem o crescimento dos nossos clientes, com qualidade, segurança e eficiência.
            </p>
          </div>
          
          {/* About Card 2 */}
          <div className="glass-card rounded-xl p-6 flex flex-col items-center text-center reveal-animation">
            <div className="w-16 h-16 rounded-full bg-acutis-purple/10 border border-acutis-purple/30 flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-gradient">02</span>
            </div>
            
            <h3 className="text-xl font-semibold mb-4">Nossa Visão</h3>
            
            <p className="text-white/70">
              Ser referência no desenvolvimento de software, reconhecida pela excelência técnica e capacidade de transformar ideias em soluções digitais de alto impacto.
            </p>
          </div>
          
          {/* About Card 3 */}
          <div className="glass-card rounded-xl p-6 flex flex-col items-center text-center reveal-animation">
            <div className="w-16 h-16 rounded-full bg-acutis-purple/10 border border-acutis-purple/30 flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-gradient">03</span>
            </div>
            
            <h3 className="text-xl font-semibold mb-4">Nossos Valores</h3>
            
            <p className="text-white/70">
              Inovação, qualidade, comprometimento, transparência e foco no cliente são os pilares que orientam todas as nossas ações e decisões.
            </p>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 reveal-animation">
          <div className="text-center">
            <h4 className="text-4xl md:text-5xl font-bold text-gradient mb-2">+10</h4>
            <p className="text-white/70 text-sm">Projetos entregues</p>
          </div>
          
          <div className="text-center">
            <h4 className="text-4xl md:text-5xl font-bold text-gradient mb-2">98%</h4>
            <p className="text-white/70 text-sm">Satisfação dos clientes</p>
          </div>
          
          <div className="text-center">
            <h4 className="text-4xl md:text-5xl font-bold text-gradient mb-2">+12</h4>
            <p className="text-white/70 text-sm">Especialistas</p>
          </div>
          
          <div className="text-center">
            <h4 className="text-4xl md:text-5xl font-bold text-gradient mb-2">+5</h4>
            <p className="text-white/70 text-sm">Anos de experiência</p>
          </div>
        </div>
      </div>
    </section>
  );
}
