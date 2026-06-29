import Hero from './Hero';
import ProblemSection from './ProblemSection';
import WhyWoodenToys from './WhyWoodenToys';
import InsideTheBox from './InsideTheBox';
import ProductShowcase from './ProductShowcase';
import OrderForm from './OrderForm';
import Footer from './Footer';
import { trackAddToCart } from '../utils/facebook-pixel';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [showStickyButton, setShowStickyButton] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const orderForm = document.getElementById('order-form');
      if (orderForm) {
        const orderFormRect = orderForm.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Hide button when order form is visible (with some margin)
        const isOrderFormVisible = orderFormRect.top < windowHeight && orderFormRect.bottom > 0;
        setShowStickyButton(!isOrderFormVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleStickyOrderClick = () => {
    // Track AddToCart when sticky button is clicked
    trackAddToCart("43 Piece Premium Wooden Kitchen Toy Set", 899);
    
    // Scroll to order form
    const orderForm = document.getElementById('order-form');
    if (orderForm) {
      orderForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Hero />
      <ProblemSection />
      <WhyWoodenToys />
      <InsideTheBox />
      <ProductShowcase />
      <OrderForm />
      <Footer />
      {/* Sticky Order Button - Hidden when order form is visible */}
      <div className={`fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-r from-white to-[#FFFEF7] border-t-2 border-[#D4AF37] z-50 backdrop-blur-sm transition-transform duration-300 ${showStickyButton ? 'translate-y-0' : 'translate-y-full'}`}>
        <button 
          onClick={handleStickyOrderClick}
          className="w-full bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-white font-bold py-3 rounded-xl text-lg hover:from-[#A0522D] hover:to-[#8B4513] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
            এখনই অর্ডার করুন
        </button>
      </div>
    </>
  );
}