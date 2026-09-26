import React, { useState, useEffect } from "react";
import { trackLead, trackInitiateCheckout } from "../utils/facebook-pixel";

const BACKEND_URL = "https://web-production-5ecb3.up.railway.app";

const quantityOptions = [
  { value: 1, text: "à¦¢à§‡à¦à¦•à¦¿ à¦¡à¦¾à¦‡à¦¨à¦¿à¦‚ à¦¸à¦¹ à§«à§¦ à¦ªà¦¿à¦¸à§‡à¦° à§§ à¦¸à§‡à¦Ÿ - à§³à§¯à§¯à§¯", price: 999 },
  { value: 2, text: "à¦¡à¦¾à¦‡à¦¨à¦¿à¦‚ à¦¸à¦¹ à§«à§¦ à¦ªà¦¿à¦¸à§‡à¦° à§¨ à¦¸à§‡à¦Ÿ - à§³à§§à§¯à§¯à§®", price: 1998 },
  { value: 3, text: "à¦¡à¦¾à¦‡à¦¨à¦¿à¦‚ à¦¸à¦¹ à§«à§¦ à¦ªà¦¿à¦¸à§‡à¦° à§© à¦¸à§‡à¦Ÿ - à§³à§¨à§¯à§¯à§­", price: 2997 },
];

export default function OrderForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [selectedQty, setSelectedQty] = useState(1);
  const [showDropdown, setShowDropdown] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const selectedOption = quantityOptions.find((o) => o.value === selectedQty)!;
  const deliveryCharge = 100;
  const totalPrice = selectedOption.price + deliveryCharge;

  useEffect(() => {
    trackInitiateCheckout(totalPrice);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    trackLead();
    const orderData = {
      customerName: name,
      phoneNumber: phone,
      address: address,
      quantity: selectedQty,
      productPrice: selectedOption.price,
      deliveryCharge: deliveryCharge,
      totalAmount: totalPrice,
      productName: selectedOption.text,
      orderDate: new Date().toISOString(),
      source: "wooden-toy-landing-page",
    };
    // Retry logic - 3 attempts
    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        const res = await fetch(`${BACKEND_URL}/api/orders`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(orderData),
        });
        const data = await res.json();
        if (data.success) {
          window.location.href = "/thank-you";
          return;
        }
      } catch (_) {
        if (attempt === 3) {
          window.location.href = "/thank-you";
          return;
        }
        await new Promise(r => setTimeout(r, 1000));
      }
    }
    window.location.href = "/thank-you";
  };

  return (
    <section id="order-form" className="px-2 sm:px-4 py-6 sm:py-8 md:py-16 bg-gradient-to-br from-[#F5F0E8] to-[#FAF5F0] border-t-2 border-[#D4AF37]">
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2C1810] mb-4 tracking-tight">à¦…à¦°à§à¦¡à¦¾à¦° à¦•à¦¨à¦«à¦¾à¦°à§à¦® à¦•à¦°à¦¤à§‡ à¦¨à¦¿à¦šà§‡à¦° à¦«à¦°à§à¦®à¦Ÿà¦¿ à¦ªà§‚à¦°à¦£ à¦•à¦°à§à¦¨</h2>
          <p className="text-base sm:text-lg text-[#5D4E37] font-medium">à¦†à¦ªà¦¨à¦¾à¦° à¦¸à¦ à¦¿à¦• à¦¤à¦¥à§à¦¯ à¦¦à¦¿à¦¯à¦¼à§‡ à¦†à¦®à¦¾à¦¦à§‡à¦° à¦¸à¦¾à¦¹à¦¾à¦¯à§à¦¯ à¦•à¦°à§à¦¨à¥¤</p>
        </div>
        <div className="bg-gradient-to-br from-white to-[#FFFEF7] p-6 rounded-3xl shadow-2xl border-2 border-[#D4AF37]/30">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-[#8B4513] font-semibold mb-1 text-sm sm:text-base">à¦†à¦ªà¦¨à¦¾à¦° à¦¨à¦¾à¦®</label>
              <input required type="text" placeholder="à¦†à¦ªà¦¨à¦¾à¦° à¦¨à¦¾à¦® à¦²à¦¿à¦–à§à¦¨" value={name} onChange={(e) => setName(e.target.value)}
                className="w-full p-3 sm:p-4 rounded-xl border-2 border-[#D4AF37]/20 bg-white text-[#2C1810] placeholder-[#8B4513]/50 focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all text-base sm:text-lg" />
            </div>
            <div>
              <label className="block text-[#8B4513] font-semibold mb-1 text-sm sm:text-base">à¦®à§‹à¦¬à¦¾à¦‡à¦² à¦¨à¦®à§à¦¬à¦°</label>
              <input required type="tel" placeholder="à¦†à¦ªà¦¨à¦¾à¦° à¦®à§‹à¦¬à¦¾à¦‡à¦² à¦¨à¦®à§à¦¬à¦° à¦²à¦¿à¦–à§à¦¨" value={phone} onChange={(e) => setPhone(e.target.value)}
                className="w-full p-3 sm:p-4 rounded-xl border-2 border-[#D4AF37]/20 bg-white text-[#2C1810] placeholder-[#8B4513]/50 focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all text-base sm:text-lg" />
            </div>
            <div>
              <label className="block text-[#8B4513] font-semibold mb-1 text-sm sm:text-base">à¦ à¦¿à¦•à¦¾à¦¨à¦¾</label>
              <textarea required placeholder="à¦—à§à¦°à¦¾à¦®, à¦¥à¦¾à¦¨à¦¾, à¦œà§‡à¦²à¦¾ à¦²à¦¿à¦–à§à¦¨" value={address} onChange={(e) => setAddress(e.target.value)} rows={2}
                className="w-full p-3 sm:p-4 rounded-xl border-2 border-[#D4AF37]/20 bg-white text-[#2C1810] placeholder-[#8B4513]/50 focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all text-base sm:text-lg resize-none" />
            </div>
            <div className="relative">
              <label className="block text-[#8B4513] font-semibold mb-2">à¦ªà¦°à¦¿à¦®à¦¾à¦£ (à¦¸à§‡à¦Ÿ)</label>
              <div className="w-full p-3 sm:p-4 rounded-xl border-2 border-[#D4AF37]/20 bg-white text-[#2C1810] cursor-pointer flex justify-between items-center"
                onClick={() => setShowDropdown(!showDropdown)}>
                <span className="text-sm sm:text-base truncate pr-2">{selectedOption.text}</span>
                <svg className={`w-5 h-5 flex-shrink-0 transform transition-transform ${showDropdown ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              {showDropdown && (
                <div className="absolute top-full left-0 right-0 bg-white border-2 border-[#D4AF37]/20 rounded-xl mt-1 shadow-lg z-10">
                  {quantityOptions.map((opt) => (
                    <div key={opt.value}
                      className={`p-4 cursor-pointer hover:bg-[#FFF8DC] transition-colors text-sm ${selectedQty === opt.value ? "bg-blue-500 text-white" : "text-[#2C1810]"}`}
                      onClick={() => { setSelectedQty(opt.value); setShowDropdown(false); }}>
                      {opt.text}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="bg-gradient-to-r from-[#FFF8DC] to-[#FFFACD] p-4 rounded-2xl space-y-2 text-sm border-2 border-[#D4AF37]/30 shadow-inner">
              <div className="flex justify-between text-[#8B4513]"><span>à¦ªà¦£à§à¦¯à§‡à¦° à¦®à§‚à¦²à§à¦¯:</span><span className="font-semibold">à§³{selectedOption.price}</span></div>
              <div className="flex justify-between text-[#8B4513]"><span>à¦¡à§‡à¦²à¦¿à¦­à¦¾à¦°à¦¿ à¦šà¦¾à¦°à§à¦œ:</span><span className="font-semibold">à§³{deliveryCharge}</span></div>
              <hr className="border-[#D4AF37]/50" />
              <div className="flex justify-between font-bold text-lg text-[#8B4513]"><span>à¦¸à¦°à§à¦¬à¦®à§‹à¦Ÿ:</span><span>à§³{totalPrice}</span></div>
            </div>
            <button type="submit" disabled={submitting}
              className="w-full bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-white font-bold py-3 sm:py-4 rounded-xl text-lg sm:text-xl hover:from-[#A0522D] hover:to-[#8B4513] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border-2 border-[#D4AF37] disabled:opacity-70 disabled:cursor-not-allowed">
              {submitting ? "â³ à¦…à¦°à§à¦¡à¦¾à¦° à¦¹à¦šà§à¦›à§‡..." : "âœ… à¦…à¦°à§à¦¡à¦¾à¦° à¦•à¦¨à¦«à¦¾à¦°à§à¦® à¦•à¦°à§à¦¨"}
            </button>
            <p className="text-center text-xs text-[#8B4513] font-medium">ðŸ”’ à¦†à¦ªà¦¨à¦¾à¦° à¦¤à¦¥à§à¦¯ à¦¸à¦®à§à¦ªà§‚à¦°à§à¦£ à¦¨à¦¿à¦°à¦¾à¦ªà¦¦ à¦“ à¦—à§‹à¦ªà¦¨à§€à¦¯à¦¼à¥¤</p>
          </form>
        </div>
      </div>
    </section>
  );
}