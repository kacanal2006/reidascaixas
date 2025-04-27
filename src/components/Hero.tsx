import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white pt-16 pb-16 md:pt-24 md:pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden mb-12">
            <div className="aspect-w-16 aspect-h-9 max-h-[70vh]">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/video/showcase.webm" type="video/webm" />
                <source src="/video/showcase.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
            </div>
          </div>

          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Estoques limitados: caixas originais Apple para você decorar sua loja ou entregar o aparelho de forma premium!
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4">
              Compre caixas 100% originais e pague até 80% menos que no mercado. Estoque real, envio rápido e frete grátis para todo o Brasil!
            </p>
            <p className="text-gray-600 max-w-3xl mx-auto mb-8">
              Transforme a apresentação da sua loja e entregue mais valor em cada venda.
              Caixas originais de iPhone, iPad e MacBook são o detalhe que fideliza clientes e cria uma experiência premium de verdade.
              Estoques limitados. Preço especial. Oportunidade para quem sabe que o detalhe faz toda diferença nas vendas.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            <button 
              onClick={scrollToProducts}
              className="bg-red-600 hover:bg-red-700 text-white font-bold rounded-full px-8 py-4 flex items-center justify-center transition-all shadow-lg hover:shadow-xl w-full md:w-auto text-lg animate-bounce"
            >
              Garantir minhas caixas originais agora! <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;