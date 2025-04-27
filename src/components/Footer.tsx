import React from 'react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-8">
          <div className="text-center mb-6">
            <h3 className="text-white text-xl font-semibold mb-2">Rei das Caixas</h3>
            <p className="text-sm">A melhor solução para lojistas e revendedores</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4">
            <a 
              href="https://wa.me/5519992302914" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors"
            >
              WhatsApp
            </a>
            <button 
              onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-white hover:text-blue-400 transition-colors"
            >
              FAQ
            </button>
            <button 
              onClick={scrollToTop}
              className="text-white hover:text-blue-400 transition-colors"
            >
              Voltar ao topo
            </button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-sm">
            &copy; {new Date().getFullYear()} Rei das Caixas. Todos os direitos reservados.
          </p>
          <p className="text-center text-xs mt-2">
            Apple e iPhone são marcas registradas da Apple Inc. Não somos afiliados à Apple Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;