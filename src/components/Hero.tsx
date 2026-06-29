import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { trackViewContent, trackAddToCart } from "../utils/facebook-pixel";

export default function Hero() {
  // Track ViewContent when component mounts
  useEffect(() => {
    trackViewContent("43 Piece Premium Wooden Kitchen Toy Set", 899);
  }, []);

  const handleOrderClick = () => {
    // Track AddToCart when order button is clicked
    trackAddToCart("43 Piece Premium Wooden Kitchen Toy Set", 899);
    
    // Scroll to order form
    const orderForm = document.getElementById('order-form');
    if (orderForm) {
      orderForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-[#FFF8F0] via-[#FAF5F0] to-[#F5F0E8] px-4 pt-10 pb-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-[#2C1810] px-6 py-2 rounded-full text-sm font-bold mb-6 inline-block border-2 border-[#B8860B] shadow-lg">
          ✨ Premium Wooden Toy Collection
        </span>
        <h1 className="text-4xl font-extrabold text-[#2C1810] mb-6 leading-tight tracking-tight">
          আপনার সন্তানের শৈশব হোক আরও আনন্দময় ও সৃজনশীল! 👯‍♀️
        </h1>
        <p className="text-lg text-[#5D4E37] mb-8 max-w-xl mx-auto leading-relaxed font-medium">
          ৪৩ পিসের প্রিমিয়াম কাঠের খেলনা সেট, যা খেলার মাধ্যমে শিশুর শেখা, কল্পনাশক্তি ও মেধা বিকাশে সহায়তা করে।
        </p>
        
        {/* Product Image */}
        <div className="max-w-lg mx-auto mb-8">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="https://cdn.jsdelivr.net/gh/wood2toys/wooden-toy-landing-page/public/wooden-kitchen-set.jpg" 
              alt="43 Piece Premium Wooden Kitchen Toy Set" 
              className="w-full h-auto object-cover"
              onError={(e) => {
                // Multiple fallbacks
                if (e.currentTarget.src.includes('jsdelivr')) {
                  e.currentTarget.src = "https://raw.githubusercontent.com/wood2toys/wooden-toy-landing-page/main/public/wooden-kitchen-set.jpg";
                } else if (e.currentTarget.src.includes('github')) {
                  e.currentTarget.src = '/wooden-kitchen-set.jpg';
                } else {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement.innerHTML = '<div class="bg-gradient-to-br from-amber-100 to-orange-200 p-8 text-center"><div class="text-6xl mb-4">🧸</div><h3 class="font-bold text-amber-900">৪৩ পিস কাঠের খেলনা সেট</h3></div>';
                }
              }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
