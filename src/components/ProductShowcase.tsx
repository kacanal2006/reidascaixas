import React from 'react';

const ProductShowcase: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Caixas originais de iPhone
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Veja a qualidade e acabamento das caixas originais que oferecemos para valorizar sua loja.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="col-span-2 row-span-2 relative">
            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all h-full">
              <img
                src="/images/main-showcase.jpg"
                alt="iPhone Box Showcase"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all relative">
            <img
              src="/images/iphone-pro-series.jpg"
              alt="iPhone Pro Box"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg"></h3>
              <p className="text-gray-600"></p>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all relative">
            <img
              src="/images/iphone15-series.jpg"
              alt="iPhone 15 Box"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg"></h3>
              <p className="text-gray-600"></p>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all relative">
            <img
              src="/images/exposicao-profissional.jpg"
              alt="iPhone Display"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg"></h3>
              <p className="text-gray-600"></p>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all relative">
            <img
              src="/images/visual-premium.jpg"
              alt="Store Display"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg"></h3>
              <p className="text-gray-600"></p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            *As imagens são ilustrativas. As caixas são 100% originais e podem conter pequenos sinais de uso.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;