export default function SimplePage() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          ৪৩ পিসের প্রিমিয়াম কাঠের খেলনা সেট
        </h1>
        <p className="text-gray-600">
          কল্পনাশক্তি ও মেধা বিকাশে সহায়তা করে।
        </p>
      </div>

      <div className="max-w-md mx-auto">
        {/* Product Image - Clean and Simple */}
        <div className="bg-white rounded-2xl p-4 shadow-lg border-4 border-yellow-400 mb-6">
          {/* Just the Product Image */}
          <div className="mb-4">
            <img 
              src="/assets/images/wooden-kitchen-set.jpg" 
              alt="43 Piece Premium Wooden Kitchen Toy Set" 
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>
          
          <div className="text-center">
            <div className="text-sm text-gray-500 line-through mb-1">
              পুরোনো মূল্য: ৳১২০০
            </div>
            <div className="text-4xl font-bold text-orange-600 mb-4">
              অফার মূল্য: ৳৮৯৯
            </div>
            
            <div className="flex justify-center gap-4 mb-6 text-sm">
              <span className="bg-green-100 px-3 py-1 rounded-full">
                ✅ ক্যাশ অন ডেলিভারি
              </span>
              <span className="bg-blue-100 px-3 py-1 rounded-full">
                🚚 সারা বাংলাদেশে
              </span>
            </div>
            
            <button 
              onClick={() => {
                const orderForm = document.getElementById('order-form');
                if (orderForm) {
                  orderForm.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-full bg-orange-500 text-white font-bold py-3 rounded-xl text-lg hover:bg-orange-600 transition"
            >
              👉 এখনই অর্ডার করুন
            </button>
            
            <div className="text-xs text-gray-500 mt-2">
              🔒 ১০০% নিরাপদ ও বিশ্বস্ত
            </div>
          </div>
        </div>

        {/* Order Form */}
        <div id="order-form" className="bg-white rounded-2xl p-6 shadow-lg">
          <h2 className="text-xl font-bold text-center mb-6 text-gray-800">
            অর্ডার করতে নিচের তথ্য পূরণ করুন
          </h2>
          
          <form onSubmit={(e) => {
            e.preventDefault();
            window.location.href = '/thank-you';
          }} className="space-y-4">
            <input 
              required 
              type="text" 
              placeholder="আপনার নাম" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500" 
            />
            <input 
              required 
              type="tel" 
              placeholder="মোবাইল নম্বর" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500" 
            />
            <textarea 
              required 
              placeholder="সম্পূর্ণ ঠিকানা" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500" 
              rows={3}
            />
            
            <div className="bg-gray-50 p-4 rounded-lg space-y-2 text-sm">
              <div className="flex justify-between"><span>পণ্যের মূল্য:</span> <span>৳৮৯৯</span></div>
              <div className="flex justify-between"><span>ডেলিভারি চার্জ:</span> <span>৳১০০</span></div>
              <hr />
              <div className="flex justify-between font-bold text-lg"><span>সর্বমোট:</span> <span>৳৯৯৯</span></div>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-orange-500 text-white font-bold py-3 rounded-lg text-lg hover:bg-orange-600 transition"
            >
              ✅ অর্ডার নিশ্চিত করুন
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}