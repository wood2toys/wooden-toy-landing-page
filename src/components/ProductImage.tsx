export default function ProductImage() {
  return (
    <section className="px-4 py-12 bg-gradient-to-br from-[#FAF5F0] to-[#F0E6D6]">
      <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-gradient-to-r from-[#D4AF37] to-[#FFD700] relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/20 to-transparent pointer-events-none"></div>
        <img 
          src="/assets/images/wooden-kitchen-set.jpg" 
          alt="43 Piece Premium Wooden Kitchen Toy Set - Perfect for imaginative play and development" 
          className="w-full h-auto object-cover relative z-10"
        />
        <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-2xl border border-[#D4AF37]/50">
          <p className="text-[#8B4513] font-semibold text-center">✨ Premium Quality Natural Wood ✨</p>
        </div>
      </div>
    </section>
  );
}
