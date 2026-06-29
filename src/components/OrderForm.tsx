import React, { useState } from "react";
import { motion } from "motion/react";

export default function OrderForm() {
  const [formData, setFormData] = useState({ name: "", phone: "", address: "", quantity: 1 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("আপনার অর্ডার সফলভাবে গৃহীত হয়েছে!");
  };

  return (
    <section className="px-4 py-16 bg-[#FDFBF7] border-t border-[#EBE3D5]">
      <h2 className="text-3xl font-bold text-center text-[#2D2424] mb-8 tracking-tight">অর্ডার করতে নিচের তথ্য পূরণ করুন</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-sm mx-auto">
        <input required type="text" placeholder="আপনার নাম" className="w-full p-4 rounded-xl border border-[#EBE3D5] bg-white text-[#2D2424] placeholder-[#8D8070] focus:ring-2 focus:ring-[#5F7161]/20" onChange={(e) => setFormData({...formData, name: e.target.value})} />
        <input required type="tel" placeholder="মোবাইল নম্বর" className="w-full p-4 rounded-xl border border-[#EBE3D5] bg-white text-[#2D2424] placeholder-[#8D8070] focus:ring-2 focus:ring-[#5F7161]/20" onChange={(e) => setFormData({...formData, phone: e.target.value})} />
        <textarea required placeholder="সম্পূর্ণ ঠিকানা" className="w-full p-4 rounded-xl border border-[#EBE3D5] bg-white text-[#2D2424] placeholder-[#8D8070] focus:ring-2 focus:ring-[#5F7161]/20" rows={3} onChange={(e) => setFormData({...formData, address: e.target.value})} />
        <input type="number" min={1} defaultValue={1} className="w-full p-4 rounded-xl border border-[#EBE3D5] bg-white text-[#2D2424] placeholder-[#8D8070] focus:ring-2 focus:ring-[#5F7161]/20" onChange={(e) => setFormData({...formData, quantity: parseInt(e.target.value)})} />
        
        <div className="bg-white p-4 rounded-2xl space-y-2 text-sm text-[#6D5D5D] border border-[#EBE3D5]">
            <div className="flex justify-between"><span>পণ্যের মূল্য:</span> <span>৳899</span></div>
            <div className="flex justify-between"><span>ডেলিভারি চার্জ:</span> <span>৳100</span></div>
            <div className="flex justify-between font-bold text-lg text-[#5F7161]"><span>সর্বমোট:</span> <span>৳999</span></div>
        </div>
        
        <button type="submit" className="w-full bg-[#5F7161] text-white font-bold py-4 rounded-xl text-lg hover:bg-[#4E5D50] transition">
            ✅ অর্ডার নিশ্চিত করুন
        </button>
        <p className="text-center text-xs text-[#8D8070]">🔒 আপনার তথ্য সম্পূর্ণ নিরাপদ।</p>
      </form>
    </section>
  );
}
