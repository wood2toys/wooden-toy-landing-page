export default function ProductImage() {
  return (
    <section className="px-4 py-16 bg-gradient-to-br from-[#FAF5F0] to-[#F0E6D6]">
      <div className="max-w-2xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#2C1810] mb-4">🎯 আমাদের প্রিমিয়াম পণ্য</h2>
          <p className="text-[#5D4E37] font-medium">৪৩ পিসের সম্পূর্ণ রান্নাঘরের সেট</p>
        </div>
        
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#D4AF37] bg-gradient-to-br from-white to-[#FFFEF7]">
          {/* Golden accent borders */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#D4AF37] to-[#FFD700]"></div>
          <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-[#FFD700] to-[#D4AF37]"></div>
          
          {/* Main product image */}
          <div className="relative p-4">
            <img 
              src="/assets/images/wooden-kitchen-set.jpg" 
              alt="43 Piece Premium Wooden Kitchen Toy Set - Perfect for imaginative play and development" 
              className="w-full h-auto object-cover rounded-2xl shadow-lg"
            />
            
            {/* Image overlay with premium badge */}
            <div className="absolute top-8 left-8 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-[#2C1810] px-4 py-2 rounded-full text-sm font-bold shadow-lg border-2 border-white">
              ✨ Premium Quality
            </div>
            
            {/* Bottom info overlay */}
            <div className="absolute bottom-8 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-2xl border-2 border-[#D4AF37]/50 shadow-xl">
              <div className="text-center">
                <p className="text-[#8B4513] font-bold text-lg mb-1">প্রাকৃতিক কাঠের তৈরি</p>
                <p className="text-[#5D4E37] text-sm font-medium">নিরাপদ ও পরিবেশ বান্ধব</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Feature highlights below image */}
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="bg-white/80 p-4 rounded-2xl border border-[#D4AF37]/30 text-center shadow-md">
            <div className="text-2xl mb-2">🎨</div>
            <p className="text-[#8B4513] font-semibold text-sm">রঙিন ও আকর্ষণীয়</p>
          </div>
          <div className="bg-white/80 p-4 rounded-2xl border border-[#D4AF37]/30 text-center shadow-md">
            <div className="text-2xl mb-2">🛡️</div>
            <p className="text-[#8B4513] font-semibold text-sm">সম্পূর্ণ নিরাপদ</p>
          </div>
          <div className="bg-white/80 p-4 rounded-2xl border border-[#D4AF37]/30 text-center shadow-md">
            <div className="text-2xl mb-2">🧠</div>
            <p className="text-[#8B4513] font-semibold text-sm">মেধা বিকাশে সহায়ক</p>
          </div>
          <div className="bg-white/80 p-4 rounded-2xl border border-[#D4AF37]/30 text-center shadow-md">
            <div className="text-2xl mb-2">👶</div>
            <p className="text-[#8B4513] font-semibold text-sm">শিশুদের জন্য আদর্শ</p>
          </div>
        </div>
      </div>
    </section>
  );
}
