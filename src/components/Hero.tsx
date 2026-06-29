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
            {/* Fallback to CSS illustration if image fails */}
            <div className="relative bg-gradient-to-br from-amber-50 to-orange-100 p-8">
              <div className="aspect-square bg-white rounded-xl p-6 shadow-inner">
                <div className="w-full h-full bg-gradient-to-br from-amber-100 to-orange-200 rounded-lg flex items-center justify-center relative overflow-hidden">
                  {/* Kitchen Items Grid Illustration */}
                  <div className="grid grid-cols-5 gap-1 w-full h-full p-3">
                    {/* Row 1 */}
                    <div className="bg-amber-600 rounded-full shadow-sm"></div>
                    <div className="bg-orange-500 rounded-lg shadow-sm"></div>
                    <div className="bg-amber-700 rounded-full shadow-sm"></div>
                    <div className="bg-orange-600 rounded-lg shadow-sm"></div>
                    <div className="bg-amber-500 rounded-full shadow-sm"></div>
                    
                    {/* Row 2 */}
                    <div className="bg-orange-700 rounded-lg shadow-sm"></div>
                    <div className="bg-amber-600 rounded-full shadow-sm"></div>
                    <div className="bg-orange-500 rounded-lg shadow-sm"></div>
                    <div className="bg-amber-700 rounded-full shadow-sm"></div>
                    <div className="bg-orange-600 rounded-lg shadow-sm"></div>
                    
                    {/* Row 3 */}
                    <div className="bg-amber-500 rounded-full shadow-sm"></div>
                    <div className="bg-orange-700 rounded-lg shadow-sm"></div>
                    <div className="bg-amber-600 rounded-full shadow-sm"></div>
                    <div className="bg-orange-500 rounded-lg shadow-sm"></div>
                    <div className="bg-amber-700 rounded-full shadow-sm"></div>
                    
                    {/* Row 4 */}
                    <div className="bg-orange-600 rounded-lg shadow-sm"></div>
                    <div className="bg-amber-500 rounded-full shadow-sm"></div>
                    <div className="bg-orange-700 rounded-lg shadow-sm"></div>
                    <div className="bg-amber-600 rounded-full shadow-sm"></div>
                    <div className="bg-orange-500 rounded-lg shadow-sm"></div>
                    
                    {/* Row 5 */}
                    <div className="bg-amber-700 rounded-full shadow-sm"></div>
                    <div className="bg-orange-600 rounded-lg shadow-sm"></div>
                    <div className="bg-amber-500 rounded-full shadow-sm"></div>
                    <div className="bg-orange-700 rounded-lg shadow-sm"></div>
                    <div className="bg-amber-600 rounded-full shadow-sm"></div>
                  </div>
                  
                  {/* Center Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-amber-900 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg border-2 border-white">
                      ৪৩ পিস কাঠের সেট
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-4">
                <h3 className="text-lg font-bold text-amber-900 mb-1">প্রিমিয়াম কাঠের রান্নাঘর সেট</h3>
                <p className="text-sm text-amber-700">সম্পূর্ণ ৪৩ পিস খেলনার সংগ্রহ</p>
              </div>
            </div>
            
            {/* Price Badge on Image */}
            <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
              অফার প্রাইস: ৳৮৯৯
            </div>
          </div>
          
          {/* Order Button below Image */}
          <div className="mt-6">
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
