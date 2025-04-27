import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Products from './components/Products';
import ProductShowcase from './components/ProductShowcase';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  useEffect(() => {
    // Update page title
    document.title = "Caixas Originais de iPhone | Para Lojistas e Revendedores";
    
    // Find the title element with data-default attribute and update favicon if it exists
    const titleElement = document.querySelector('title[data-default]');
    if (titleElement) {
      // Update favicon to a more appropriate icon
      const faviconLink = document.querySelector('link[rel="icon"]');
      if (faviconLink) {
        faviconLink.setAttribute('href', 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%23000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M3 9h18"/><path d="M3 15h18"/></svg>');
      }
    }
  }, []);

  return (
    <div className="antialiased text-gray-800 overflow-x-hidden">
      <Hero />
      <Benefits />
      <Products />
      <ProductShowcase />
      <Testimonials />
      <FAQ />
      <CallToAction />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;