import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const images = [
  {
    url: "/images/gallery/caixa-iphone-1.jpg",
    caption: " "
  },
  {
    url: "/images/gallery/caixa-iphone-2.jpg",
    caption: " "
  },
  {
    url: "/images/gallery/caixa-iphone-3.jpg",
    caption: " "
  },
  {
    url: "/images/gallery/caixa-iphone-4.jpg",
    caption: " "
  },
  {
    url: "/images/gallery/caixa-iphone-5.jpg",
    caption: " "
  },
  {
    url: "/images/gallery/caixa-iphone-6.jpg",
    caption: " "
  }
];

const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [autoplay]);

  const nextSlide = () => {
    setAutoplay(false);
    setCurrentIndex((current) => (current + 1) % images.length);
  };

  const prevSlide = () => {
    setAutoplay(false);
    setCurrentIndex((current) => (current - 1 + images.length) % images.length);
  };

  const openModal = (index: number) => {
    setModalIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const navigateModal = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setModalIndex((current) => (current - 1 + images.length) % images.length);
    } else {
      setModalIndex((current) => (current + 1) % images.length);
    }
  };

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold text-center mb-6">
        Veja a qualidade das nossas caixas
      </h3>

      <div className="relative max-w-4xl mx-auto">
        {/* Main Carousel */}
        <div className="relative overflow-hidden rounded-xl shadow-lg">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0"
                onClick={() => openModal(index)}
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={image.url}
                    alt={image.caption}
                    className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                  <p className="text-center">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoplay(false);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-white w-4' 
                    : 'bg-white bg-opacity-50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          
          <button
            onClick={() => navigateModal('prev')}
            className="absolute left-4 text-white hover:text-gray-300 transition-colors"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          
          <button
            onClick={() => navigateModal('next')}
            className="absolute right-4 text-white hover:text-gray-300 transition-colors"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="max-w-4xl max-h-[80vh] w-full mx-4">
            <img
              src={images[modalIndex].url}
              alt={images[modalIndex].caption}
              className="w-full h-full object-contain"
            />
            <p className="text-white text-center mt-4 text-lg">
              {images[modalIndex].caption}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;