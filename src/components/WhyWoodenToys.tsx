import { motion } from "motion/react";
import { Brain, Palette, Clock, Leaf, ShieldCheck, Heart } from "lucide-react";

export default function WhyWoodenToys() {
  const points = [
    { icon: Brain, title: "মেধা ও চিন্তাশক্তির বিকাশ" },
    { icon: Palette, title: "সৃজনশীলতা বৃদ্ধি" },
    { icon: Clock, title: "দীর্ঘ সময় আনন্দে খেলতে পারবে" },
    { icon: Leaf, title: "প্রাকৃতিক ও নিরাপদ কাঠ" },
    { icon: ShieldCheck, title: "টেকসই ও দীর্ঘদিন ব্যবহারযোগ্য" },
    { icon: Heart, title: "শিশুদের জন্য নিরাপদ স্মুথ ফিনিশ" }
  ];

  return (
    <section className="px-4 py-8 sm:py-12 md:py-16 bg-white">
      <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-center text-[#2D2424] mb-8 sm:mb-10 md:mb-12 tracking-tight px-2">কেন এই কাঠের খেলনা সেটটি আপনার শিশুর জন্য আদর্শ? 🪵</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
        {points.map((p, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#FDFBF7] p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl md:rounded-3xl border border-[#EBE3D5] text-center"
          >
            <p.icon className="text-[#5F7161] mx-auto mb-2 sm:mb-3" size={20} />
            <h3 className="font-bold text-[#2D2424] text-sm sm:text-base tracking-wide leading-tight">{p.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
