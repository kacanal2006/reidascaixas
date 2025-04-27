import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="flex items-center justify-between w-full py-5 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqItems = [
    {
      question: "As caixas vêm com acessórios?",
      answer: "Não, vendemos apenas as caixas originais, sem acessórios (cabos, fones, carregadores ou manuais)."
    },
    {
      question: "Posso escolher os modelos?",
      answer: "Sim! Você tem total liberdade para escolher os modelos que desejar dentro do seu combo, desde o iPhone 11 até o iPhone 16 Pro Max, incluindo todas as versões (Plus, Pro e E)."
    },
    {
      question: "São novas?",
      answer: "As caixas são 100% originais da Apple, porém são usadas e podem apresentar pequenos sinais de uso. Garantimos a originalidade e bom estado de conservação de todas as caixas."
    },
    {
      question: "Qual o prazo de envio?",
      answer: "Enviamos em até 24 horas úteis após a confirmação do pagamento. O frete é PAC gratuito para todo o Brasil."
    },
    {
      question: "Como é feito o pagamento?",
      answer: "Aceitamos Pix (pagamento instantâneo) e cartão de crédito!"
    },
    {
      question: "Posso comprar em maior quantidade?",
      answer: "Sim! Para pedidos acima de 20 unidades, entre em contato pelo WhatsApp e consulte quais caixas temos disponível no estoque."
    }
  ];

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Dúvidas Frequentes
        </h2>
        
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm p-6 md:p-8">
          {faqItems.map((item, index) => (
            <FAQItem 
              key={index} 
              question={item.question} 
              answer={item.answer} 
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Ainda tem dúvidas?{" "}
            <a 
              href="https://wa.me/5519992302914" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 font-medium hover:underline"
            >
              Fale conosco pelo WhatsApp
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;