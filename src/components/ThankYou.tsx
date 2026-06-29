import { motion } from "motion/react";
import { CheckCircle, Phone, Truck, Heart } from "lucide-react";

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8F0] via-[#FAF5F0] to-[#F5F0E8] flex items-center justify-center px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-lg w-full"
      >
        <div className="bg-gradient-to-br from-white to-[#FFFEF7] p-8 rounded-3xl shadow-2xl border-2 border-[#D4AF37] text-center relative overflow-hidden">
          {/* Gold accent line at top */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D4AF37] to-[#FFD700]"></div>
          
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="mb-6"
          >
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          </motion.div>

          {/* Main Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="space-y-4"
          >
            <h1 className="text-2xl font-bold text-[#2C1810] mb-4">
              🎉 ধন্যবাদ! আপনার অর্ডারটি সফলভাবে গ্রহণ করা হয়েছে। ✅
            </h1>
            
            <div className="bg-gradient-to-r from-[#FFF8DC] to-[#FFFACD] p-4 rounded-2xl border border-[#D4AF37]/30 mb-6">
              <p className="text-[#5D4E37] font-medium leading-relaxed flex items-start gap-2">
                <Phone className="w-5 h-5 text-[#8B4513] mt-0.5 flex-shrink-0" />
                আমাদের টিম শীঘ্রই আপনার সাথে যোগাযোগ করে অর্ডারটি নিশ্চিত করবে এবং দ্রুততম সময়ের মধ্যে ডেলিভারির ব্যবস্থা করবে।
              </p>
            </div>

            <div className="bg-gradient-to-r from-[#F0F8FF] to-[#E6F3FF] p-4 rounded-2xl border border-blue-200 mb-6">
              <p className="text-[#2C5282] font-medium leading-relaxed flex items-start gap-2">
                <Heart className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                💙 আমাদের ওপর আস্থা রাখার জন্য আন্তরিক ধন্যবাদ। আশা করি আমাদের পণ্য ও সেবায় আপনি সন্তুষ্ট হবেন।
              </p>
            </div>

            {/* Order Details Box */}
            <div className="bg-white/80 p-4 rounded-2xl border border-[#D4AF37]/20 mb-6">
              <h3 className="font-bold text-[#8B4513] mb-3 flex items-center gap-2">
                <Truck className="w-5 h-5" />
                অর্ডার তথ্য
              </h3>
              <div className="text-sm text-[#5D4E37] space-y-1">
                <p>📦 পণ্য: ৪৩ পিসের প্রিমিয়াম কাঠের খেলনা সেট</p>
                <p>💰 মূল্য: ৳৮৯৯</p>
                <p>🚚 ডেলিভারি চার্জ: ৳১০০</p>
                <p className="font-bold border-t pt-1 mt-2">সর্বমোট: ৳৯৯৯</p>
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-gradient-to-r from-[#E8F5E8] to-[#F0FFF0] p-4 rounded-2xl border border-green-200">
              <h3 className="font-bold text-green-700 mb-2">পরবর্তী ধাপ:</h3>
              <ul className="text-sm text-green-600 space-y-1 text-left">
                <li>✅ আমাদের টিম ২৪ ঘণ্টার মধ্যে কল করবে</li>
                <li>✅ অর্ডার নিশ্চিত করা হবে</li>
                <li>✅ ২-৩ দিনের মধ্যে ডেলিভারি</li>
                <li>✅ ক্যাশ অন ডেলিভারি সুবিধা</li>
              </ul>
            </div>

            {/* Back to Home Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/'}
              className="w-full bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-white font-bold py-3 rounded-xl text-lg hover:from-[#A0522D] hover:to-[#8B4513] transition-all duration-300 shadow-lg mt-6"
            >
              🏠 হোমে ফিরে যান
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}