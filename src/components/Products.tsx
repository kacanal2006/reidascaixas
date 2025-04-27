import React from 'react';
import ProductCard from './ProductCard';

const Products: React.FC = () => {
  const handleProductClick = () => {
    window.open('https://wa.me/5519992302914', '_blank');
  };

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Escolha o combo ideal para o seu negócio
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Caixas originais de iPhone do modelo 11 até 16 Pro Max, incluindo versões Plus, Pro e E.
            Escolha livremente os modelos que mais interessam para sua loja.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProductCard 
            quantity={5} 
            price="R$ 59,90" 
            onClick={handleProductClick}
            imageUrl="/images/combo-5.PNG"
            checkoutUrl="https://pay.checkoutseguros.com/checkout/52b64c31-aa3b-4d94-b9b6-7e2e9eb2bc06"
          />
          <ProductCard 
            quantity={10} 
            price="R$ 99,90" 
            isPopular={true} 
            onClick={handleProductClick}
            imageUrl="/images/combo-10.PNG"
            checkoutUrl="https://pay.checkoutseguros.com/checkout/40f35515-8a33-4b8e-aa32-53d69df9614e"
          />
          <ProductCard 
            quantity={20} 
            price="R$ 179,90" 
            onClick={handleProductClick}
            imageUrl="/images/combo-20.PNG"
            checkoutUrl="https://pay.checkoutseguros.com/checkout/96ac2e76-a52c-45bf-8ba3-3f3a59025c92"
          />
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500">
            Precisa de um combo personalizado? 
            <a 
              href="https://wa.me/5519992302914" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 font-medium ml-1 hover:underline"
            >
              Entre em contato conosco.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Products;