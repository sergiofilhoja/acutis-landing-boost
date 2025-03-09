
import { useEffect } from 'react';
import { Smartphone, Monitor, CreditCard, Database } from 'lucide-react';

export function Services() {
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
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh-pattern opacity-10"></div>
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-purple opacity-5 blur-[150px]"></div>
      
      <div className="container px-6 mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal-animation">
          <div className="inline-flex items-center py-1 px-4 rounded-full bg-acutis-purple/10 border border-acutis-purple/20 max-w-max mx-auto mb-4">
            <span className="text-xs font-medium text-acutis-purple-light">Nossos serviços</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Soluções digitais <span className="text-gradient">completas</span> para seu negócio
          </h2>
          
          <p className="text-white/70">
            Desenvolvimento de software de alto padrão, adaptado às necessidades específicas do seu negócio e com foco em resultados mensuráveis.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Service 1 */}
          <div className="glass-card rounded-xl p-6 flex flex-col gap-5 group reveal-animation">
            <div className="w-12 h-12 rounded-lg bg-acutis-purple/20 flex items-center justify-center text-acutis-purple group-hover:bg-acutis-purple group-hover:text-white transition-colors duration-300">
              <Smartphone size={24} />
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Aplicativos Mobile</h3>
              <p className="text-white/70 text-sm">
                Desenvolvimento de aplicativos nativos e híbridos para iOS e Android, com foco em experiência do usuário e performance.
              </p>
            </div>
            
            <ul className="mt-auto space-y-2">
              <li className="flex items-center gap-2 text-sm text-white/70">
                <span className="w-1.5 h-1.5 rounded-full bg-acutis-purple"></span>
                React Native & Flutter
              </li>
              <li className="flex items-center gap-2 text-sm text-white/70">
                <span className="w-1.5 h-1.5 rounded-full bg-acutis-purple"></span>
                UI/UX otimizada
              </li>
              <li className="flex items-center gap-2 text-sm text-white/70">
                <span className="w-1.5 h-1.5 rounded-full bg-acutis-purple"></span>
                Publicação nas lojas
              </li>
            </ul>
          </div>
          
          {/* Service 2 */}
          <div className="glass-card rounded-xl p-6 flex flex-col gap-5 group reveal-animation">
            <div className="w-12 h-12 rounded-lg bg-acutis-purple/20 flex items-center justify-center text-acutis-purple group-hover:bg-acutis-purple group-hover:text-white transition-colors duration-300">
              <Monitor size={24} />
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Sistemas Web</h3>
              <p className="text-white/70 text-sm">
                Desenvolvimento de sistemas web completos, desde landing pages de alta conversão até dashboards administrativos complexos.
              </p>
            </div>
            
            <ul className="mt-auto space-y-2">
              <li className="flex items-center gap-2 text-sm text-white/70">
                <span className="w-1.5 h-1.5 rounded-full bg-acutis-purple"></span>
                React, Vue & Angular
              </li>
              <li className="flex items-center gap-2 text-sm text-white/70">
                <span className="w-1.5 h-1.5 rounded-full bg-acutis-purple"></span>
                Sistemas responsivos
              </li>
              <li className="flex items-center gap-2 text-sm text-white/70">
                <span className="w-1.5 h-1.5 rounded-full bg-acutis-purple"></span>
                Dashboards & Analytics
              </li>
            </ul>
          </div>
          
          {/* Service 3 */}
          <div className="glass-card rounded-xl p-6 flex flex-col gap-5 group reveal-animation">
            <div className="w-12 h-12 rounded-lg bg-acutis-purple/20 flex items-center justify-center text-acutis-purple group-hover:bg-acutis-purple group-hover:text-white transition-colors duration-300">
              <CreditCard size={24} />
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Integrações</h3>
              <p className="text-white/70 text-sm">
                Integração de sistemas com plataformas de pagamento, CRMs, ERPs e outras ferramentas essenciais para o seu negócio.
              </p>
            </div>
            
            <ul className="mt-auto space-y-2">
              <li className="flex items-center gap-2 text-sm text-white/70">
                <span className="w-1.5 h-1.5 rounded-full bg-acutis-purple"></span>
                Meios de pagamento
              </li>
              <li className="flex items-center gap-2 text-sm text-white/70">
                <span className="w-1.5 h-1.5 rounded-full bg-acutis-purple"></span>
                APIs de terceiros
              </li>
              <li className="flex items-center gap-2 text-sm text-white/70">
                <span className="w-1.5 h-1.5 rounded-full bg-acutis-purple"></span>
                Automação de processos
              </li>
            </ul>
          </div>
          
          {/* Service 4 */}
          <div className="glass-card rounded-xl p-6 flex flex-col gap-5 group reveal-animation">
            <div className="w-12 h-12 rounded-lg bg-acutis-purple/20 flex items-center justify-center text-acutis-purple group-hover:bg-acutis-purple group-hover:text-white transition-colors duration-300">
              <Database size={24} />
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Infraestrutura</h3>
              <p className="text-white/70 text-sm">
                Configuração e manutenção de infraestrutura em nuvem para garantir escalabilidade, segurança e desempenho.
              </p>
            </div>
            
            <ul className="mt-auto space-y-2">
              <li className="flex items-center gap-2 text-sm text-white/70">
                <span className="w-1.5 h-1.5 rounded-full bg-acutis-purple"></span>
                Cloud & Servidores
              </li>
              <li className="flex items-center gap-2 text-sm text-white/70">
                <span className="w-1.5 h-1.5 rounded-full bg-acutis-purple"></span>
                Bancos de dados
              </li>
              <li className="flex items-center gap-2 text-sm text-white/70">
                <span className="w-1.5 h-1.5 rounded-full bg-acutis-purple"></span>
                Segurança & Backup
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
