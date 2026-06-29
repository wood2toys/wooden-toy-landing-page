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

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-[#FFF8F0] via-[#FAF5F0] to-[#F5F0E8] px-4 pt-10 pb-16 text-center">
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
        
        <div className="bg-gradient-to-br from-white to-[#FFFEF7] p-8 rounded-3xl shadow-2xl border-2 border-[#D4AF37] max-w-sm mx-auto mb-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D4AF37] to-[#FFD700]"></div>
            <div className="text-[#8B4513] line-through mb-2 text-lg">পুরোনো মূল্য: ৳১২০০</div>
            <div className="text-4xl font-black text-[#8B4513] mb-4 italic bg-gradient-to-r from-[#8B4513] to-[#A0522D] bg-clip-text text-transparent">অফার মূল্য: ৳৮৯৯</div>
            <div className="flex justify-center gap-4 text-sm text-[#5D4E37] mb-6 font-semibold">
                <span className="flex items-center gap-1">✅ ক্যাশ অন ডেলিভারি</span>
                <span className="flex items-center gap-1">🚚 সারা বাংলাদেশে</span>
            </div>
            <button 
              onClick={handleOrderClick}
              className="w-full bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-white font-bold py-4 rounded-xl text-lg hover:from-[#A0522D] hover:to-[#8B4513] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
                👉 এখনই অর্ডার করুন <ArrowRight size={20} />
            </button>
        </div>
      </motion.div>
    </section>
  );
}
