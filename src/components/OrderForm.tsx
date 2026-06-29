import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { trackLead, trackInitiateCheckout, trackPurchase } from "../utils/facebook-pixel";

export default function OrderForm() {
  const [formData, setFormData] = useState({ name: "", phone: "", address: "", quantity: 1 });

  // Track InitiateCheckout when component loads
  useEffect(() => {
    trackInitiateCheckout(999);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Track Lead event when form is submitted
    trackLead();
    
    // Track Purchase event
    trackPurchase(999 * formData.quantity);
    
    console.log("Form submitted:", formData);
    
    // Redirect to thank you page
    window.location.href = '/thank-you';
  };

  return (
    <section id="order-form" className="px-4 py-16 bg-gradient-to-br from-[#F5F0E8] to-[#FAF5F0] border-t-2 border-[#D4AF37]">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#2C1810] mb-4 tracking-tight">✨ প্রিমিয়াম অর্ডার ফর্ম ✨</h2>
          <p className="text-[#5D4E37] font-medium">নিচের তথ্য পূরণ করুন</p>
        </div>
        
        <div className="bg-gradient-to-br from-white to-[#FFFEF7] p-6 rounded-3xl shadow-2xl border-2 border-[#D4AF37]/30">
          <form onSubmit={handleSubmit} className="space-y-5">
            <input 
              required 
              type="text" 
              placeholder="আপনার নাম" 
              className="w-full p-4 rounded-xl border-2 border-[#D4AF37]/20 bg-gradient-to-r from-white to-[#FFFEF7] text-[#2C1810] placeholder-[#8B4513] focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all" 
              onChange={(e) => setFormData({...formData, name: e.target.value})} 
            />
            <input 
              required 
              type="tel" 
              placeholder="মোবাইল নম্বর" 
              className="w-full p-4 rounded-xl border-2 border-[#D4AF37]/20 bg-gradient-to-r from-white to-[#FFFEF7] text-[#2C1810] placeholder-[#8B4513] focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all" 
              onChange={(e) => setFormData({...formData, phone: e.target.value})} 
            />
            <textarea 
              required 
              placeholder="সম্পূর্ণ ঠিকানা" 
              className="w-full p-4 rounded-xl border-2 border-[#D4AF37]/20 bg-gradient-to-r from-white to-[#FFFEF7] text-[#2C1810] placeholder-[#8B4513] focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all" 
              rows={3} 
              onChange={(e) => setFormData({...formData, address: e.target.value})} 
            />
            {/* Custom quantity field with product description */}
            <div className="relative">
              <label className="block text-[#8B4513] font-semibold mb-2 text-sm">পণ্যের পরিমাণ</label>
              <div className="bg-gradient-to-r from-[#FFF8DC] to-[#FFFACD] border-2 border-[#D4AF37]/30 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <span className="text-[#8B4513] font-semibold">৪৩ পিসের খেলনা ১ সেট ৳৮৯৯</span>
                  <input 
                    type="number" 
                    min={1} 
                    defaultValue={1} 
                    className="w-16 p-2 rounded-lg border border-[#D4AF37]/50 bg-white text-[#2C1810] text-center font-bold focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all" 
                    onChange={(e) => setFormData({...formData, quantity: parseInt(e.target.value)})} 
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-[#FFF8DC] to-[#FFFACD] p-4 rounded-2xl space-y-2 text-sm border-2 border-[#D4AF37]/30 shadow-inner">
                <div className="flex justify-between text-[#8B4513]"><span>পণ্যের মূল্য:</span> <span className="font-semibold">৳899</span></div>
                <div className="flex justify-between text-[#8B4513]"><span>ডেলিভারি চার্জ:</span> <span className="font-semibold">৳100</span></div>
                <hr className="border-[#D4AF37]/50"/>
                <div className="flex justify-between font-bold text-lg text-[#8B4513]"><span>সর্বমোট:</span> <span>৳999</span></div>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-white font-bold py-4 rounded-xl text-lg hover:from-[#A0522D] hover:to-[#8B4513] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border-2 border-[#D4AF37]"
            >
                ✅ প্রিমিয়াম অর্ডার নিশ্চিত করুন
            </button>
            <p className="text-center text-xs text-[#8B4513] font-medium">🔒 আপনার তথ্য সম্পূর্ণ নিরাপদ ও গোপনীয়।</p>
          </form>
        </div>
      </div>
    </section>
  );
}
