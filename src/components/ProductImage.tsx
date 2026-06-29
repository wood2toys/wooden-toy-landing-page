export default function ProductImage() {
  return (
    <section className="px-4 py-8 bg-gradient-to-br from-[#FAF5F0] to-[#F0E6D6]">
      <div className="max-w-lg mx-auto">
        {/* Just the beautiful product image without any box */}
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src="/assets/images/wooden-kitchen-set.jpg" 
            alt="43 Piece Premium Wooden Kitchen Toy Set - Perfect for imaginative play and development" 
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
