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
    <div className="min-h-screen bg-[#FDFBF7] font-sans text-[#2D2424]">
      <Hero />
      <ProductImage />
      <ProblemSection />
      <WhyWoodenToys />
      <InsideTheBox />
      <OrderForm />
      <FAQ />
      <Footer />
      {/* Sticky Order Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-[#EBE3D5] z-50">
        <button className="w-full bg-[#5F7161] text-white font-bold py-3 rounded-xl text-lg hover:bg-[#4E5D50] transition">
            এখনই অর্ডার করুন
        </button>
      </div>
    </div>
  );
}
