import Hero from './Hero';
import ProductImage from './ProductImage';
import ProblemSection from './ProblemSection';
import WhyWoodenToys from './WhyWoodenToys';
import InsideTheBox from './InsideTheBox';
import OrderForm from './OrderForm';
import Footer from './Footer';
import { trackAddToCart } from '../utils/facebook-pixel';

export default function HomePage() {
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
      <ProductImage />
      <ProblemSection />
      <WhyWoodenToys />
      <InsideTheBox />
      <OrderForm />
      <Footer />
      {/* Sticky Order Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-r from-white to-[#FFFEF7] border-t-2 border-[#D4AF37] z-50 backdrop-blur-sm">
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