import { motion } from "motion/react";
import { Smartphone, Frown, Users } from "lucide-react";

export default function ProblemSection() {
  const problems = [
    { icon: Smartphone, title: "অতিরিক্ত স্ক্রিন টাইম", desc: "দীর্ঘ সময় মোবাইল বা টিভি ব্যবহারে শিশুর চোখ ও মনোযোগের ক্ষতি হতে পারে।" },
    { icon: Frown, title: "সৃজনশীলতার অভাব", desc: "মোবাইল গেম শিশুর কল্পনাশক্তি ও নতুন কিছু শেখার আগ্রহ কমিয়ে দেয়।" },
    { icon: Users, title: "একাকীত্ব", desc: "অন্য শিশুদের সাথে খেলাধুলা কমে গেলে সামাজিক দক্ষতা গড়ে ওঠা বাধাগ্রস্ত হয়।" }
  ];

  return (
    <section className="px-4 py-8 sm:py-12 md:py-16 bg-[#FDFBF7]">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-[#2D2424] mb-8 sm:mb-10 md:mb-12 tracking-tight px-2">আপনার সন্তান কি সারাদিন মোবাইলেই ব্যস্ত? 📱</h2>
      <div className="grid gap-4 sm:gap-5 md:gap-6">
        {problems.map((p, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-4 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl shadow-sm border border-[#EBE3D5] flex items-start gap-3 sm:gap-4"
          >
            <p.icon className="text-[#5F7161] shrink-0 mt-1" size={24} />
            <div>
              <h3 className="font-bold text-lg sm:text-xl mb-1 text-[#2D2424]">{p.title}</h3>
              <p className="text-[#6D5D5D] leading-relaxed text-base sm:text-lg">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
