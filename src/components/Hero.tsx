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
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="https://i.postimg.cc/j5BbMzKz/wooden-kitchen-toy-set.jpg"
              alt="43 Piece Premium Wooden Kitchen Toy Set" 
              className="w-full h-auto object-cover"
            />
            {/* Price Badge on Image */}
            <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
              অফার প্রাইস: ৳৮৯৯
            </div>
          </div>
          
          {/* Quantity Selector */}
          <div className="mt-6 bg-gradient-to-br from-white to-[#FFFEF7] p-4 rounded-2xl shadow-lg border-2 border-[#D4AF37]/30">
            <h3 className="font-bold text-[#2C1810] mb-3 text-center">পরিমাণ (সেট)</h3>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 rounded-xl border-2 border-[#D4AF37]/20 bg-gradient-to-r from-[#FFF8DC] to-[#FFFACD] cursor-pointer hover:shadow-md transition-all">
                <span className="font-semibold text-[#8B4513]">৪৩ পিসের ১ সেট</span>
                <span className="font-bold text-[#8B4513]">৳৯৯৯</span>
                <div className="w-4 h-4 rounded-full border-2 border-[#D4AF37] bg-[#D4AF37]"></div>
              </div>
              
              <div className="flex items-center justify-between p-3 rounded-xl border-2 border-gray-200 bg-white cursor-pointer hover:shadow-md transition-all">
                <span className="font-semibold text-gray-700">৪৩ পিসের ২ সেট</span>
                <span className="font-bold text-green-600">৳১৮৯৯</span>
                <div className="w-4 h-4 rounded-full border-2 border-gray-300"></div>
              </div>
              
              <div className="flex items-center justify-between p-3 rounded-xl border-2 border-gray-200 bg-white cursor-pointer hover:shadow-md transition-all">
                <span className="font-semibold text-gray-700">৪৩ পিসের ৩ সেট</span>
                <span className="font-bold text-green-600">৳২৭৯৯</span>
                <div className="w-4 h-4 rounded-full border-2 border-gray-300"></div>
              </div>
            </div>
          </div>
          
          {/* Order Button below Quantity Selector */}
          <div className="mt-4">
            <button 
              onClick={() => {
                const orderForm = document.getElementById('order-form');
                if (orderForm) {
                  orderForm.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-4 rounded-xl text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border-2 border-orange-400"
            >
              🛒 এখনই অর্ডার করুন
            </button>
            <p className="text-center text-sm text-gray-600 mt-2">সারা বাংলাদেশে যে কোন ঠিকানায় ডেলিভারি সুবিধা</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
