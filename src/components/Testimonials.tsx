import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    text: "Os mano tem o contato em... valeu rapaziada, bão dimais as caixas TOP TOP TOP",
    name: "Junior Vitinho",
    location: "Santos - SP"
  },
  {
    text: "Recomendo demais! Não botei fé no primeiro momento não, em sp as mesmas caixas custam 5x mais, unico problema é q na transportadora amassou duas caixinhas, mas de resto fiquei surpreendido pelo preço e por serem caixinhas realmente ORIGINAIS. Valeu Rei! Grande abraço!",
    name: "Cesar P.",
    location: "Ribeirão Preto - SP"
  },
  {
    text: "Nota 1000 Super atenciosos e super barato ai se eu soubesse deles antes de montar minha loja o qto nao tinha economizad",
    name: "Jakliny Gonçalves B.",
    location: "Belo Horizonte - MG"
  },
  {
    text: "Gostei mas as caixas podem vir com menos rasuras falo pq comprei o combo com 20 e 6 delas tem pequenos detalhes e estavam sujas, tive que limpar todas..poderiam ser mais caprichosos",
    name: "Raul Marques",
    location: "Curitiba - PR"
  },
  {
    text: "PODE COMPRAR, VALE CADA CENTAVO!!!! VENDO NO MERCADOLIVRE PENA QUE AS VEZES FALTA DE ALGUNS MODELOS! 10000% PESSOAL DE CONFIANÇA",
    name: "Caio Enrique M",
    location: "Campo Grande - MS"
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay]);

  const handlePrev = () => {
    setAutoplay(false);
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setAutoplay(false);
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          O que nossos clientes dizem
        </h2>
        
        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-2xl shadow-md p-8 text-center">
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 text-lg italic mb-6">"{testimonial.text}"</p>
                    <p className="font-semibold text-gray-900">
                      {testimonial.name} • <span className="text-blue-600">{testimonial.location}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>
        
        <div className="flex justify-center mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setAutoplay(false);
                setActiveIndex(index);
              }}
              className={`w-2.5 h-2.5 rounded-full mx-1 transition-all ${
                index === activeIndex ? 'bg-blue-500 w-5' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;