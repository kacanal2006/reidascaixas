import React from 'react';

const CallToAction: React.FC = () => {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-blue-600">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Pronto para valorizar sua loja?
        </h2>
        <p className="text-blue-100 max-w-2xl mx-auto mb-8">
          Não perca a oportunidade de melhorar a apresentação dos seus produtos com caixas originais de iPhone a preços imbatíveis.
        </p>
        <button
          onClick={scrollToProducts}
          className="bg-white text-blue-600 hover:bg-gray-100 font-semibold rounded-full px-8 py-3 transition-all shadow-lg hover:shadow-xl"
        >
          Ver combos disponíveis
        </button>
      </div>
    </section>
  );
};

export default CallToAction;