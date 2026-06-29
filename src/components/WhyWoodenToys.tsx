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
    <section className="px-4 py-16 bg-white">
      <h2 className="text-3xl font-bold text-center text-[#2D2424] mb-12 tracking-tight">কেন এই কাঠের খেলনা সেটটি আপনার শিশুর জন্য আদর্শ? 🪵</h2>
      <div className="grid grid-cols-2 gap-4">
        {points.map((p, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#FDFBF7] p-6 rounded-3xl border border-[#EBE3D5] text-center"
          >
            <p.icon className="text-[#5F7161] mx-auto mb-3" size={32} />
            <h3 className="font-bold text-[#2D2424] text-sm tracking-wide">{p.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
