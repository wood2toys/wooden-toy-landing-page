export default function ProductShowcase() {
  return (
    <section className="px-4 py-12 bg-gradient-to-br from-[#FAF5F0] to-[#F0E6D6]">
      <div className="max-w-sm mx-auto">
        <div className="bg-gradient-to-br from-white to-[#FFFEF7] p-8 rounded-3xl shadow-2xl border-4 border-[#D4AF37] relative overflow-hidden">
          {/* Golden border accent */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#D4AF37] to-[#FFD700]"></div>
          
          {/* Product Image - Clean without any overlays */}
          <div>
            <img 
              src="/assets/images/wooden-kitchen-set.jpg" 
              alt="" 
              className="w-full h-auto object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}