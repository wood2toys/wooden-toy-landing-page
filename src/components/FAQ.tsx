export default function FAQ() {
  const faqs = [
    { q: "খেলনাটি কি নিরাপদ?", a: "হ্যাঁ, এটি সম্পূর্ণ প্রাকৃতিক এবং স্মুথ ফিনিশ করা যা শিশুর জন্য নিরাপদ।" },
    { q: "ডেলিভারি কত দিনে পাব?", a: "সাধারণত ৩-৫ কর্মদিবসের মধ্যে।" },
    { q: "ক্যাশ অন ডেলিভারি আছে?", a: "হ্যাঁ, সারা বাংলাদেশে ক্যাশ অন ডেলিভারি সুবিধা আছে।" }
  ];
  return (
    <section className="px-4 py-8 sm:py-12 md:py-16 bg-white">
      <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-[#2D2424] tracking-tight text-center">FAQ</h2>
      {faqs.map((f, i) => (
        <details key={i} className="mb-3 sm:mb-4 bg-[#FDFBF7] p-4 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl border border-[#EBE3D5]">
          <summary className="font-bold cursor-pointer text-[#5F7161] text-sm sm:text-base">{f.q}</summary>
          <p className="mt-2 text-[#6D5D5D] leading-relaxed text-sm sm:text-base">{f.a}</p>
        </details>
      ))}
    </section>
  );
}
