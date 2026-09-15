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
    <section className="bg-gradient-to-br from-[#FFF8F0] via-[#FAF5F0] to-[#F5F0E8] px-2 sm:px-4 pt-4 sm:pt-6 md:pt-8 pb-6 sm:pb-8 text-center min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        <span className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-[#2C1810] px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6 md:mb-8 inline-block border-2 border-[#B8860B] shadow-lg">
          ✨ Premium Wooden Toy Collection
        </span>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#2C1810] mb-3 sm:mb-4 md:mb-6 leading-tight tracking-tight px-1 sm:px-2">
          আপনার সন্তানের শৈশব হোক<br className="block sm:hidden" /> আরও আনন্দময় ও সৃজনশীল! 👯‍♀️
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#5D4E37] mb-4 sm:mb-6 md:mb-8 max-w-xl mx-auto leading-relaxed font-medium px-2 sm:px-4">
          <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent">
            ৪৩ পিসের প্রিমিয়াম কাঠের খেলনা
          </span> সেট, যা খেলার মাধ্যমে শিশুর শেখা, কল্পনাশক্তি ও মেধা বিকাশে সহায়তা করে।
        </p>
        
        {/* Product Image */}
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto mb-4 sm:mb-6 md:mb-8 px-2 sm:px-4">
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg w-full">
            <img 
              src="/wooden-kitchen-set.jpg"
              alt="43 Piece Premium Wooden Kitchen Toy Set" 
              className="w-full h-auto object-cover"
            />
            {/* Price Badge on Image */}
            <div className="absolute top-1 sm:top-2 md:top-4 right-1 sm:right-2 md:right-4 bg-gradient-to-r from-red-500 to-red-600 text-white px-2 sm:px-3 md:px-4 py-1 sm:py-1 md:py-2 rounded-full font-bold text-xs sm:text-sm shadow-lg">
              অফার প্রাইস: ৳৮৯৯
            </div>
          </div>
          
          {/* Order Button below Image */}
          <div className="mt-3 sm:mt-4 md:mt-6 w-full">
            <button 
              onClick={() => {
                const orderForm = document.getElementById('order-form');
                if (orderForm) {
                  orderForm.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-3 sm:py-4 rounded-xl text-base sm:text-lg md:text-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border-2 border-orange-400"
            >
              🛒 এখনই অর্ডার করুন
            </button>
            <p className="text-center text-sm sm:text-base text-gray-600 mt-2 px-1 sm:px-2">সারা বাংলাদেশে যে কোন ঠিকানায় ডেলিভারি সুবিধা</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
