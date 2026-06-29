export default function ProductImage() {
  return (
    <section className="px-4 py-8">
      <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
        <img 
          src="/toy-set.jpg" 
          alt="Wooden Toy Set" 
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}
