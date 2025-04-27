import React from 'react';
import { CheckCircle, Box } from 'lucide-react';

interface ProductCardProps {
  quantity: number;
  price: string;
  isPopular?: boolean;
  onClick: () => void;
  imageUrl?: string;
  checkoutUrl?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  quantity, 
  price, 
  isPopular = false, 
  onClick, 
  imageUrl,
  checkoutUrl 
}) => {
  return (
    <div className={`rounded-2xl overflow-hidden transition-all duration-300 ${
      isPopular 
        ? 'bg-gradient-to-b from-blue-50 to-white border-2 border-blue-500 shadow-lg transform hover:-translate-y-1' 
        : 'bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md'
    }`}>
      {isPopular && (
        <div className="bg-blue-500 text-white text-center py-2 font-semibold text-sm">
          MAIS VENDIDO
        </div>
      )}
      
      <div className="p-6 md:p-8">
        <div className="flex justify-center mb-6">
          {imageUrl ? (
            <div className="w-40 h-40 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all bg-gradient-to-b from-gray-50 to-white">
              <img 
                src={imageUrl} 
                alt={`Combo com ${quantity} caixas`} 
                className="w-full h-full object-contain p-3 hover:scale-105 transition-transform duration-300" 
              />
            </div>
          ) : (
            <div className={`rounded-full p-3 ${isPopular ? 'bg-blue-100' : 'bg-gray-100'}`}>
              <Box className={`h-8 w-8 ${isPopular ? 'text-blue-500' : 'text-gray-600'}`} />
            </div>
          )}
        </div>

        <div className="text-center mb-6">
          <p className="text-gray-500 mb-1">Combo com</p>
          <h3 className="text-4xl font-bold text-gray-900 mb-2">{quantity} caixas</h3>
          <div className="flex items-center justify-center">
            <span className="text-3xl font-bold text-blue-600">{price}</span>
          </div>
          <p className="text-gray-500 text-sm mt-1">Preço único</p>
        </div>

        <ul className="space-y-3 mb-8">
          <li className="flex items-start">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700">Escolha livre de modelos</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700">Frete grátis para todo o Brasil</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700">Envio em até 24h úteis</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700">100% originais</span>
          </li>
        </ul>

        {checkoutUrl ? (
          <a
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 rounded-full font-bold transition-all text-center block bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl animate-bounce"
          >
            Quero esse combo
          </a>
        ) : (
          <button
            onClick={onClick}
            className="w-full py-4 rounded-full font-bold transition-all bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl animate-bounce"
          >
            Quero esse combo
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;