
import { useEffect } from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 relative overflow-hidden bg-acutis-black-dark border-t border-white/5">
      <div className="container px-6 mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
          <a href="#" className="flex items-center gap-2 mb-4">
            <img src="https://acutistechnology.com.br/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnovalogofundobranco.f667e628.png&w=128&q=75" alt="Acutis Technology" className="h-auto" />
          </a>
            
            <p className="text-white/70 text-sm mb-6">
              Desenvolvendo soluções digitais inovadoras que transformam negócios e impulsionam resultados.
            </p>
            
            <div className="flex gap-4">              
              <a 
                href="https://www.instagram.com/acutistechnology/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-acutis-purple/20 transition-colors"
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Links Column 1 */}
          <div>
            <h4 className="text-lg font-medium mb-4">Serviços</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                  Desenvolvimento de Aplicativos
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                  Sistemas Web
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                  Integrações de Pagamento
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                  Landing Pages
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                  Consultoria em TI
                </a>
              </li>
            </ul>
          </div>
          
          {/* Links Column 2 */}
          <div>
            <h4 className="text-lg font-medium mb-4">Empresa</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                  Sobre nós
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                  Cases
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                  Carreiras
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-medium mb-4">Newsletter</h4>
            <p className="text-sm text-white/70 mb-4">
              Inscreva-se para receber novidades, artigos e dicas sobre desenvolvimento de software.
            </p>
            
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Seu email" 
                className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-acutis-purple/50 focus:border-transparent"
              />
              <button 
                type="submit" 
                className="btn-gradient px-4 py-2 rounded-lg text-sm font-medium"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/50 mb-4 md:mb-0">
            &copy; {currentYear} Acutis Technology. Todos os direitos reservados.
          </p>
          
          <div className="flex gap-6">
            <a href="#" className="text-xs text-white/50 hover:text-white transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-xs text-white/50 hover:text-white transition-colors">
              Termos de Serviço
            </a>
            <a href="#" className="text-xs text-white/50 hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
