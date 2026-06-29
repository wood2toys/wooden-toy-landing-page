import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { trackLead, trackInitiateCheckout, trackPurchase } from "../utils/facebook-pixel";

export default function OrderForm() {
  const [formData, setFormData] = useState({ name: "", phone: "", address: "", quantity: 1 });
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [showDropdown, setShowDropdown] = useState(false);

  const quantityOptions = [
    { value: 1, text: "৪৩ পিসের ১ সেট - ৳৮৯৯", price: 899 },
    { value: 2, text: "৪৩ পিসের ২ সেট - ৳১৭৯৮", price: 1798 },
    { value: 3, text: "৪৩ পিসের ৩ সেট - ৳২৬৯৭", price: 2697 },
  ];

  const selectedOption = quantityOptions.find(opt => opt.value === selectedQuantity);
  const totalPrice = selectedOption.price + 100; // Adding delivery charge

  // Track InitiateCheckout when component loads
  useEffect(() => {
    trackInitiateCheckout(totalPrice);
  }, [totalPrice]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Track Lead event when form is submitted
    trackLead();
    
    // Track Purchase event
    trackPurchase(totalPrice);
    
    // Prepare order data
    const orderData = {
      customerName: formData.name,
      phoneNumber: formData.phone,
      address: formData.address,
      quantity: selectedQuantity,
      productPrice: selectedOption.price,
      deliveryCharge: 100,
      totalAmount: totalPrice,
      productName: "43 Piece Premium Wooden Kitchen Toy Set",
      orderDate: new Date().toISOString(),
      source: "wooden-toy-landing-page"
    };

    try {
      // Send order to your Railway backend
      const response = await fetch(`${import.meta.env.VITE_API_URL}/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData)
      });

      if (response.ok) {
        console.log("Order saved successfully to Vercel backend:", orderData);
        // Redirect to thank you page
        window.location.href = '/thank-you.html';
      } else {
        // If API fails, still redirect (user experience first)
        console.log("Vercel API failed, but proceeding:", orderData);
        window.location.href = '/thank-you.html';
      }
    } catch (error) {
      // If network error, still redirect (user experience first)  
      console.log("Network error with Vercel backend, but proceeding:", orderData);
      window.location.href = '/thank-you.html';
    }
  };

  return (
    <section id="order-form" className="px-4 py-16 bg-gradient-to-br from-[#F5F0E8] to-[#FAF5F0] border-t-2 border-[#D4AF37]">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#2C1810] mb-4 tracking-tight">অর্ডার কনফার্ম করতে নিচের ফর্মটি পূরণ করুন</h2>
          <p className="text-[#5D4E37] font-medium">আপনার সঠিক তথ্য দিয়ে আমাদের সাহায্য করুন।</p>
        </div>
        
        <div className="bg-gradient-to-br from-white to-[#FFFEF7] p-6 rounded-3xl shadow-2xl border-2 border-[#D4AF37]/30">
          <form onSubmit={handleSubmit} className="space-y-5">
            <input 
              required 
              type="text" 
              placeholder="আপনার নাম লিখুন" 
              className="w-full p-4 rounded-xl border-2 border-[#D4AF37]/20 bg-gradient-to-r from-white to-[#FFFEF7] text-[#2C1810] placeholder-[#8B4513] focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all" 
              onChange={(e) => setFormData({...formData, name: e.target.value})} 
            />
            <input 
              required 
              type="tel" 
              placeholder="আপনার মোবাইল নম্বর লিখুন" 
              className="w-full p-4 rounded-xl border-2 border-[#D4AF37]/20 bg-gradient-to-r from-white to-[#FFFEF7] text-[#2C1810] placeholder-[#8B4513] focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all" 
              onChange={(e) => setFormData({...formData, phone: e.target.value})} 
            />
            <textarea 
              required 
              placeholder="গ্রাম, থানা, জেলা লিখুন" 
              className="w-full p-4 rounded-xl border-2 border-[#D4AF37]/20 bg-gradient-to-r from-white to-[#FFFEF7] text-[#2C1810] placeholder-[#8B4513] focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all" 
              rows={3} 
              onChange={(e) => setFormData({...formData, address: e.target.value})} 
            />
            
            {/* Quantity Dropdown */}
            <div className="relative">
              <label className="block text-[#8B4513] font-semibold mb-2">পরিমাণ (সেট)</label>
              <div 
                className="w-full p-4 rounded-xl border-2 border-[#D4AF37]/20 bg-gradient-to-r from-white to-[#FFFEF7] text-[#2C1810] cursor-pointer flex justify-between items-center"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <span>{selectedOption.text}</span>
                <svg className={`w-5 h-5 transform transition-transform ${showDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
              
              {showDropdown && (
                <div className="absolute top-full left-0 right-0 bg-white border-2 border-[#D4AF37]/20 rounded-xl mt-1 shadow-lg z-10">
                  {quantityOptions.map((option) => (
                    <div
                      key={option.value}
                      className={`p-4 cursor-pointer hover:bg-[#FFF8DC] transition-colors ${
                        selectedQuantity === option.value ? 'bg-blue-500 text-white' : 'text-[#2C1810]'
                      }`}
                      onClick={() => {
                        setSelectedQuantity(option.value);
                        setFormData({...formData, quantity: option.value});
                        setShowDropdown(false);
                      }}
                    >
                      {option.text}
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <div className="bg-gradient-to-r from-[#FFF8DC] to-[#FFFACD] p-4 rounded-2xl space-y-2 text-sm border-2 border-[#D4AF37]/30 shadow-inner">
                <div className="flex justify-between text-[#8B4513]"><span>পণ্যের মূল্য:</span> <span className="font-semibold">৳{selectedOption.price}</span></div>
                <div className="flex justify-between text-[#8B4513]"><span>ডেলিভারি চার্জ:</span> <span className="font-semibold">৳100</span></div>
                <hr className="border-[#D4AF37]/50"/>
                <div className="flex justify-between font-bold text-lg text-[#8B4513]"><span>সর্বমোট:</span> <span>৳{totalPrice}</span></div>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-white font-bold py-4 rounded-xl text-lg hover:from-[#A0522D] hover:to-[#8B4513] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border-2 border-[#D4AF37]"
            >
                ✅ অর্ডার কনফার্ম করুন
            </button>
            <p className="text-center text-xs text-[#8B4513] font-medium">🔒 আপনার তথ্য সম্পূর্ণ নিরাপদ ও গোপনীয়।</p>
          </form>
        </div>
      </div>
    </section>
  );
}
