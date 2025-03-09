import { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: '',
  });
  
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.current) return;
    
    setIsSubmitting(true);
    setFormStatus({ type: null, message: '' });

    // EmailJS credentials
    const serviceId = 'service_sfck4qn';
    const templateId = 'template_3ucdexp';
    const publicKey = 'uXFgoZVf3D8yGWROP';

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        console.log('SUCCESS!', result.text);
        setFormStatus({
          type: 'success',
          message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
        });
        // Reset form
        if (form.current) {
          form.current.reset();
        }
      })
      .catch((error) => {
        console.log('FAILED...', error.text);
        setFormStatus({
          type: 'error',
          message: 'Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.'
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

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
            {formStatus.type && (
              <div className={`p-4 rounded-lg mb-6 ${
                formStatus.type === 'success' 
                  ? 'bg-green-500/10 text-green-400 border border-green-500/20' 
                  : 'bg-red-500/10 text-red-400 border border-red-500/20'
              }`}>
                {formStatus.message}
              </div>
            )}
            
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="user_name" className="block text-sm font-medium mb-2">
                    Nome completo
                  </label>
                  <input 
                    type="text" 
                    id="user_name"
                    name="user_name" 
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-acutis-purple/50 focus:border-transparent"
                    placeholder="Seu nome"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="user_email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="user_email"
                    name="user_email" 
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-acutis-purple/50 focus:border-transparent"
                    placeholder="seu@email.com"
                    required
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
                  name="subject" 
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-acutis-purple/50 focus:border-transparent"
                  placeholder="Assunto da mensagem"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensagem
                </label>
                <textarea 
                  id="message"
                  name="message" 
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-acutis-purple/50 focus:border-transparent resize-none"
                  placeholder="Descreva seu projeto ou dúvida"
                  required
                ></textarea>
              </div>
              
              <Button 
                type="submit" 
                className="btn-gradient w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
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
                  <a href="mailto:acutistechnology@gmail.com" className="text-acutis-purple-light hover:underline">
                    acutistechnology@gmail.com
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
                  <a href="tel:+5583999378382" className="text-acutis-purple-light hover:underline">
                    +55 (83) 99937-8382
                  </a>
                </div>
              </div>
              
              <div className="glass-card rounded-xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-acutis-purple/20 flex items-center justify-center text-acutis-purple flex-shrink-0">
                  <MapPin size={24} />
                </div>
                
                <div>
                  <h4 className="font-medium mb-1">Endereço</h4>
                  <p className="text-white/70 text-sm mb-1">Agendamento prévio de reuniões</p>
                  <address className="not-italic text-acutis-purple-light">
                    Remoto
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