
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Procon Digital",
    description: "Sistema para procons que inclui ferramenta institucional, dashboard para acompanhamento de denúncias e reclamações, e aplicativo para cidadãos realizarem reclamações.",
    image: "https://i.imgur.com/PfbRKrP.png",
    category: "Sistemas Integrados",
    features: ["Dashboard administrativo", "App para cidadãos", "Gestão de denúncias", "Relatórios automatizados"]
  },
  {
    id: 2,
    title: "K Distribuidora",
    description: "Sistema completo para distribuidoras de cosméticos com landing page de conversão e dashboard administrativo para gestão do negócio.",
    image: "https://i.imgur.com/Csbdl6o.png",
    category: "E-commerce & Gestão",
    features: ["Landing page de alta conversão", "Painel administrativo", "Gestão de produtos", "Relatórios de vendas"]
  },
  {
    id: 3,
    title: "Vip Loterias",
    description: "Loteria digital com interfaces para administrador e usuários, permitindo gerenciamento de bilhetes, carteiras, jogos disponíveis e transações financeiras.",
    image: "https://i.imgur.com/UzEYz9o.png",
    category: "Plataforma de Jogos",
    features: ["Gestão de bilhetes", "Apostas online", "Carteira digital", "Integração de pagamentos"]
  },
  {
    id: 4,
    title: "Escola do Consumidor",
    description: "Sistema educacional com landing page, área do aluno para cadastro e acesso a cursos, e administrador para gestão de cursos, professores e aulas.",
    image: "https://i.imgur.com/c1tIMKX.png",
    category: "Plataforma Educacional",
    features: ["Área do aluno", "Catálogo de cursos", "Sistema de aulas", "Gestão de conteúdo"]
  }
];

export function Projects() {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const [isVisible, setIsVisible] = useState({});

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
    <section id="projects" className="section-padding relative overflow-hidden bg-acutis-black-dark">
      <div className="absolute inset-0 bg-mesh-pattern opacity-10"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-purple opacity-5 blur-[150px]"></div>
      
      <div className="container px-6 mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal-animation">
          <div className="inline-flex items-center py-1 px-4 rounded-full bg-acutis-purple/10 border border-acutis-purple/20 max-w-max mx-auto mb-4">
            <span className="text-xs font-medium text-acutis-purple-light">Projetos realizados</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Nossos <span className="text-gradient">cases</span> de sucesso
          </h2>
          
          <p className="text-white/70">
            Conheça alguns dos projetos que desenvolvemos e os resultados que alcançamos para nossos clientes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Project Showcase */}
          <div className="reveal-animation order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-xl glass-card p-1">
              <div className="absolute inset-0 bg-gradient-purple opacity-10"></div>
              <img 
                src={activeProject.image} 
                alt={activeProject.title} 
                className="w-full h-[300px] md:h-[400px] object-cover rounded-lg"
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 glass-card rounded-b-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="inline-block px-3 py-1 text-xs rounded-full bg-acutis-purple/20 text-acutis-purple-light mb-2">
                      {activeProject.category}
                    </span>
                    <h3 className="text-xl font-bold mb-2 text-black">{activeProject.title}</h3>
                    <p className="text-sm text-white/70 mb-4 max-w-lg text-black">
                      {activeProject.description}
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-3">
                  {activeProject.features.map((feature, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 text-xs bg-white/5 border border-black/10 rounded-md text-black"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Project Selection */}
          <div className="flex flex-col gap-4 reveal-animation order-1 lg:order-2">
            <h3 className="text-2xl font-bold mb-2">Selecione um projeto</h3>
            <p className="text-white/70 mb-6">
              Clique em um dos projetos abaixo para ver mais detalhes e compreender como podemos ajudar seu negócio com soluções digitais personalizadas.
            </p>
            
            <div className="space-y-4">
              {projects.map((project) => (
                <div 
                  key={project.id}
                  className={`glass-card rounded-xl p-5 cursor-pointer transition-all duration-300 hover:border-acutis-purple/50 ${
                    activeProject.id === project.id ? 'border-acutis-purple/70 shadow-lg shadow-acutis-purple/10' : 'border-white/10'
                  }`}
                  onClick={() => setActiveProject(project)}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium mb-1">{project.title}</h4>
                      <p className="text-xs text-white/70">{project.category}</p>
                    </div>
                    <ChevronRight 
                      size={20} 
                      className={`text-acutis-purple transition-transform duration-300 ${
                        activeProject.id === project.id ? 'rotate-90' : ''
                      }`} 
                    />
                  </div>
                </div>
              ))}
            </div>
            
            {/* <Button className="btn-gradient font-medium w-full mt-4">
              Ver todos os projetos
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
