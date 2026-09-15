export default function ProductShowcase() {
  const handleOrderClick = () => {
    // Scroll to order form
    const orderForm = document.getElementById('order-form');
    if (orderForm) {
      orderForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="px-4 py-6 sm:py-8 md:py-12 bg-gradient-to-br from-[#FAF5F0] to-[#F0E6D6]">
      <div className="max-w-xs sm:max-w-sm mx-auto">
        <div className="bg-gradient-to-br from-white to-[#FFFEF7] p-3 sm:p-4 md:p-6 rounded-2xl sm:rounded-3xl shadow-2xl border-4 border-[#D4AF37] relative overflow-hidden">
          {/* Golden border accent */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#D4AF37] to-[#FFD700]"></div>
          
          {/* Product Image */}
          <div className="mb-3 sm:mb-4 md:mb-6">
            <img 
              src="/wooden-kitchen-set.jpg" 
              alt="" 
              className="w-full h-32 sm:h-40 md:h-auto object-cover rounded-xl sm:rounded-2xl shadow-lg"
            />
          </div>

          {/* Original price crossed out */}
          <div className="text-center mb-2 sm:mb-3 md:mb-4">
            <span className="text-[#8B4513] line-through text-sm sm:text-base md:text-lg font-medium">পুরোনো মূল্য: ৳১২০০</span>
          </div>
          
          {/* Main offer price */}
          <div className="text-center mb-3 sm:mb-4 md:mb-6">
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black text-[#8B4513] mb-1 sm:mb-2" style={{fontFamily: 'serif'}}>
              অফার মূল্য:
            </div>
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-[#8B4513] to-[#A0522D] bg-clip-text text-transparent">
              ৳৮৯৯
            </div>
          </div>
          
          {/* Order button */}
          <button 
            onClick={handleOrderClick}
            className="w-full bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-white font-bold py-2 sm:py-3 md:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-base md:text-lg hover:from-[#A0522D] hover:to-[#8B4513] transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 shadow-lg hover:shadow-2xl transform hover:scale-105 border-2 border-[#D4AF37] mb-2 sm:mb-3 md:mb-4"
          >
            <span className="text-base sm:text-lg md:text-xl">👉</span>
            <span>এখনই অর্ডার করুন</span>
          </button>
          
          {/* Trust indicator */}
          <div className="text-center text-xs sm:text-sm text-[#8B4513] font-medium">
            🔒 ১০০% নিরাপদ ও বিশ্বস্ত
          </div>
        </div>
      </div>
    </section>
  );
}