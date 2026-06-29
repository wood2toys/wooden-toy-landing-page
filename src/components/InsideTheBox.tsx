export default function InsideTheBox() {
  const items = ["হাঁড়ি", "পাতিল", "বাটি", "প্লেট", "গ্লাস", "চামচ", "ডিম", "আপেল", "রান্নার সরঞ্জাম"];
  return (
    <section className="px-4 py-16 bg-[#FDFBF7]">
      <h2 className="text-2xl font-bold mb-8 text-[#2D2424] tracking-tight">Inside The Box (মোট ৪৩টি)</h2>
      <div className="grid grid-cols-3 gap-4">
        {items.map((item, i) => (
          <div key={i} className="bg-white p-4 rounded-3xl shadow-sm text-center font-bold text-[#5F7161] border border-[#EBE3D5]">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
