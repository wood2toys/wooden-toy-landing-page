export default function InsideTheBox() {
  const items = ["হাঁড়ি", "পাতিল", "বাটি", "প্লেট", "গ্লাস", "চামচ", "ডিম", "আপেল", "রান্নার সরঞ্জাম"];
  return (
    <section className="px-4 py-8 sm:py-12 md:py-16 bg-[#FDFBF7]">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-[#2D2424] tracking-tight text-center">Inside The Box (মোট ৪৩টি)</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8">
        {items.map((item, i) => (
          <div key={i} className="bg-white p-2 sm:p-3 md:p-4 rounded-2xl sm:rounded-3xl shadow-sm text-center font-bold text-[#5F7161] border border-[#EBE3D5] text-sm sm:text-base md:text-lg">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
