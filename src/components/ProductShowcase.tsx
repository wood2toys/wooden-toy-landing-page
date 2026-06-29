export default function ProductShowcase() {
  const handleOrderClick = () => {
    // Scroll to order form
    const orderForm = document.getElementById('order-form');
    if (orderForm) {
      orderForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="px-4 py-12 bg-gradient-to-br from-[#FAF5F0] to-[#F0E6D6]">
      <div className="max-w-sm mx-auto">
        <div className="bg-gradient-to-br from-white to-[#FFFEF7] p-8 rounded-3xl shadow-2xl border-4 border-[#D4AF37] relative overflow-hidden">
          {/* Golden border accent */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#D4AF37] to-[#FFD700]"></div>
          
          {/* Product Image */}
          <div className="mb-6">
            <img 
              src="/assets/images/wooden-kitchen-set.jpg" 
              alt="" 
              className="w-full h-auto object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Original price crossed out */}
          <div className="text-center mb-4">
            <span className="text-[#8B4513] line-through text-lg font-medium">পুরোনো মূল্য: ৳১২০০</span>
          </div>
          
          {/* Main offer price */}
          <div className="text-center mb-6">
            <div className="text-5xl font-black text-[#8B4513] mb-2" style={{fontFamily: 'serif'}}>
              অফার মূল্য:
            </div>
            <div className="text-6xl font-extrabold bg-gradient-to-r from-[#8B4513] to-[#A0522D] bg-clip-text text-transparent">
              ৳৮৯৯
            </div>
          </div>
          
          {/* Order button */}
          <button 
            onClick={handleOrderClick}
            className="w-full bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-white font-bold py-5 rounded-2xl text-xl hover:from-[#A0522D] hover:to-[#8B4513] transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-2xl transform hover:scale-105 border-2 border-[#D4AF37] mb-4"
          >
            <span className="text-2xl">👉</span>
            <span>এখনই অর্ডার করুন</span>
          </button>
          
          {/* Trust indicator */}
          <div className="text-center text-sm text-[#8B4513] font-medium">
            🔒 ১০০% নিরাপদ ও বিশ্বস্ত
          </div>
        </div>
      </div>
    </section>
  );
}