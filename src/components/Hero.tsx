import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-[#FDFBF7] px-4 pt-10 pb-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="bg-[#F0EBE3] text-[#5F7161] px-4 py-1 rounded-full text-sm font-bold mb-4 inline-block border border-[#D0C9C0]">
          🔥 Best Selling Wooden Toy Set
        </span>
        <h1 className="text-4xl font-extrabold text-[#2D2424] mb-6 leading-tight tracking-tight">
          আপনার সন্তানের শৈশব হোক আরও আনন্দময় ও সৃজনশীল! 🌈
        </h1>
        <p className="text-lg text-[#6D5D5D] mb-8 max-w-xl mx-auto leading-relaxed">
          ৪৩ পিসের প্রিমিয়াম কাঠের খেলনা সেট, যা খেলার মাধ্যমে শিশুর শেখা, কল্পনাশক্তি ও মেধা বিকাশে সহায়তা করে।
        </p>
        
        <div className="bg-white p-6 rounded-3xl shadow-xl border border-[#EBE3D5] max-w-sm mx-auto mb-8">
            <div className="text-[#8D8070] line-through mb-1">পুরোনো মূল্য: ৳১২০০</div>
            <div className="text-3xl font-black text-[#5F7161] mb-4 italic">অফার মূল্য: ৳৮৯৯</div>
            <div className="flex justify-center gap-4 text-sm text-[#8D8070] mb-6 font-medium">
                <span>✅ ক্যাশ অন ডেলিভারি</span>
                <span>🚚 সারা বাংলাদেশে হোম ডেলিভারি</span>
            </div>
            <button className="w-full bg-[#5F7161] text-white font-bold py-4 rounded-xl text-lg hover:bg-[#4E5D50] transition flex items-center justify-center gap-2">
                👉 এখনই অর্ডার করুন <ArrowRight size={20} />
            </button>
        </div>
      </motion.div>
    </section>
  );
}
