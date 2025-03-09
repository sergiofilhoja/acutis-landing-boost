
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
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
    <section id="contact" className="section-padding relative overflow-hidden bg-acutis-black-dark">
      <div className="absolute inset-0 bg-mesh-pattern opacity-10"></div>
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-purple opacity-5 blur-[150px]"></div>
      
      <div className="container px-6 mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal-animation">
          <div className="inline-flex items-center py-1 px-4 rounded-full bg-acutis-purple/10 border border-acutis-purple/20 max-w-max mx-auto mb-4">
            <span className="text-xs font-medium text-acutis-purple-light">Entre em contato</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Vamos <span className="text-gradient">conversar</span>
          </h2>
          
          <p className="text-white/70">
            Preencha o formulário abaixo e nossa equipe entrará em contato em até 24 horas para discutir seu projeto.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-card rounded-xl p-6 reveal-animation">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nome completo
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-acutis-purple/50 focus:border-transparent"
                    placeholder="Seu nome"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-acutis-purple/50 focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Assunto
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-acutis-purple/50 focus:border-transparent"
                  placeholder="Assunto da mensagem"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensagem
                </label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-acutis-purple/50 focus:border-transparent resize-none"
                  placeholder="Descreva seu projeto ou dúvida"
                ></textarea>
              </div>
              
              <Button type="submit" className="btn-gradient w-full">
                Enviar mensagem
              </Button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-col gap-8 reveal-animation">
            <div>
              <h3 className="text-2xl font-bold mb-6">Informações de contato</h3>
              <p className="text-white/70 mb-8">
                Nossa equipe está pronta para atender você e discutir as melhores soluções para o seu negócio. Entre em contato pelos canais abaixo.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="glass-card rounded-xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-acutis-purple/20 flex items-center justify-center text-acutis-purple flex-shrink-0">
                  <Mail size={24} />
                </div>
                
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <p className="text-white/70 text-sm mb-1">Resposta em até 24 horas</p>
                  <a href="mailto:contato@acutis.com.br" className="text-acutis-purple-light hover:underline">
                    contato@acutis.com.br
                  </a>
                </div>
              </div>
              
              <div className="glass-card rounded-xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-acutis-purple/20 flex items-center justify-center text-acutis-purple flex-shrink-0">
                  <Phone size={24} />
                </div>
                
                <div>
                  <h4 className="font-medium mb-1">Telefone</h4>
                  <p className="text-white/70 text-sm mb-1">Segunda a Sexta, 9h às 18h</p>
                  <a href="tel:+551199999999" className="text-acutis-purple-light hover:underline">
                    +55 (11) 99999-9999
                  </a>
                </div>
              </div>
              
              <div className="glass-card rounded-xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-acutis-purple/20 flex items-center justify-center text-acutis-purple flex-shrink-0">
                  <MapPin size={24} />
                </div>
                
                <div>
                  <h4 className="font-medium mb-1">Endereço</h4>
                  <p className="text-white/70 text-sm mb-1">Visitas com agendamento prévio</p>
                  <address className="not-italic text-acutis-purple-light">
                    Av. Paulista, 1000 - Bela Vista<br />
                    São Paulo - SP, 01310-100
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
