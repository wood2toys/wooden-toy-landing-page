/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from './components/Hero';
import ProductImage from './components/ProductImage';
import ProblemSection from './components/ProblemSection';
import WhyWoodenToys from './components/WhyWoodenToys';
import InsideTheBox from './components/InsideTheBox';
import OrderForm from './components/OrderForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF8F0] to-[#F5F0E8] font-sans text-[#2C1810]">
      <Hero />
      <ProductImage />
      <ProblemSection />
      <WhyWoodenToys />
      <InsideTheBox />
      <OrderForm />
      <FAQ />
      <Footer />
      {/* Sticky Order Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-r from-white to-[#FFFEF7] border-t-2 border-[#D4AF37] z-50 backdrop-blur-sm">
        <button className="w-full bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-white font-bold py-3 rounded-xl text-lg hover:from-[#A0522D] hover:to-[#8B4513] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            এখনই অর্ডার করুন
        </button>
      </div>
    </div>
  );
}
