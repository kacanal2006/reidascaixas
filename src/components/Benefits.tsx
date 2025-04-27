import React from 'react';
import { Package, BadgeCheck, DollarSign, Truck, Store, Award } from 'lucide-react';
import Gallery from './Gallery';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <BadgeCheck className="h-8 w-8 text-blue-500" />,
      title: "100% Originais Apple",
      description: "Caixas reais de iPhone, iPad e MacBook"
    },
    {
      icon: <DollarSign className="h-8 w-8 text-blue-500" />,
      title: "Preço de Oportunidade",
      description: "Economize até 80% comparado ao mercado tradicional"
    },
    {
      icon: <Package className="h-8 w-8 text-blue-500" />,
      title: "Estoques Reais no Brasil",
      description: "Todos modelos de caixa a pronta entrega em Americana - SP. Envio rápido e seguro."
    },
    {
      icon: <Store className="h-8 w-8 text-blue-500" />,
      title: "Decore sua Loja",
      description: "Visual que inspira confiança como uma Apple Store"
    },
    {
      icon: <Award className="h-8 w-8 text-blue-500" />,
      title: "Aumente o Valor",
      description: "Caixa original gera percepção premium"
    },
    {
      icon: <Truck className="h-8 w-8 text-blue-500" />,
      title: "Frete Grátis",
      description: "Entrega gratuita para todo o Brasil"
    }
  ];

  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Por que investir em caixas originais transforma suas vendas?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all flex flex-col items-center text-center"
              >
                <div className="bg-blue-50 p-3 rounded-full w-fit mb-4 flex items-center justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-lg text-gray-700 mb-6">
              Na venda de iPhones, iPads e MacBooks, cada detalhe conta.
              Uma caixa original gera confiança instantânea e aumenta o valor percebido no ato da venda.
              Grandes vendedores investem na experiência. Você também pode.
            </p>
          </div>

          <Gallery />

          <div className="relative rounded-2xl overflow-hidden mb-8 mt-12">
            <div className="aspect-w-16 aspect-h-9">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/video/benefits.webm" type="video/webm" />
                Seu navegador não suporta vídeos.
              </video>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={scrollToProducts}
              className="bg-red-600 hover:bg-red-700 text-white font-bold rounded-full px-8 py-4 inline-flex items-center transition-all shadow-lg hover:shadow-xl text-lg animate-bounce"
            >
              Garantir minhas caixas antes que acabe!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;