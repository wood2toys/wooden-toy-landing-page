import { useState, useEffect } from 'react';

const BACKEND_URL = import.meta.env.VITE_API_URL?.replace('/api', '') || 'https://web-production-5ecb3.up.railway.app';

export default function ProductShowcase() {
  const [productImage, setProductImage] = useState("/wooden-kitchen-set.jpg");
  const [price, setPrice] = useState(999);
  const [originalPrice, setOriginalPrice] = useState(1200);

  useEffect(() => {
    fetchLatestProductImage();
    fetchPrice();

    const handleMessage = (event) => {
      if (event.data.type === 'HERO_IMAGE_UPDATED') fetchLatestProductImage();
      if (event.data.type === 'PRICE_UPDATED') fetchPrice();
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  const fetchPrice = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/api/price`);
      const data = await response.json();
      if (data.success) {
        setPrice(data.price);
        setOriginalPrice(data.originalPrice);
      }
    } catch (error) {
      console.log('Using default price');
    }
  };

  const fetchLatestProductImage = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/api/images`);
      const data = await response.json();
      if (data.success && data.images.length > 0) {
        setProductImage(`${BACKEND_URL}${data.images[0].url}`);
      }
    } catch (error) {
      console.log('Using default image');
    }
  };

  const handleOrderClick = () => {
    const orderForm = document.getElementById('order-form');
    if (orderForm) orderForm.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="px-2 sm:px-4 py-3 sm:py-4 bg-gradient-to-br from-[#FAF5F0] to-[#F0E6D6]">
      <div className="max-w-[280px] sm:max-w-xs mx-auto">
        <div className="bg-gradient-to-br from-white to-[#FFFEF7] p-2 sm:p-3 rounded-lg sm:rounded-xl shadow-md border border-[#D4AF37] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D4AF37] to-[#FFD700]"></div>
          
          {/* Product Image */}
          <div className="mb-2">
            <img 
              src={productImage}
              alt="Wooden Toy Set"
              className="w-full h-auto max-h-24 sm:max-h-28 object-contain rounded-md sm:rounded-lg shadow-sm bg-gray-50"
            />
          </div>

          {/* Original price crossed out */}
          <div className="text-center mb-1">
            <span className="text-[#8B4513] line-through text-xs font-medium">পুরোনো মূল্য: ৳{originalPrice}</span>
          </div>
          
          {/* Main offer price */}
          <div className="text-center mb-2">
            <div className="text-xs sm:text-sm font-bold text-[#8B4513]" style={{fontFamily: 'serif'}}>
              অফার মূল্য:
            </div>
            <div className="text-lg sm:text-xl font-extrabold bg-gradient-to-r from-[#8B4513] to-[#A0522D] bg-clip-text text-transparent">
              ৳{price}
            </div>
          </div>
          
          {/* Order button */}
          <button 
            onClick={handleOrderClick}
            className="w-full bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-white font-bold py-1.5 sm:py-2 rounded-md sm:rounded-lg text-xs hover:from-[#A0522D] hover:to-[#8B4513] transition-all duration-300 flex items-center justify-center gap-1 shadow-sm hover:shadow-md transform hover:scale-105 mb-1"
          >
            <span className="text-xs">👉</span>
            <span>এখনই অর্ডার করুন</span>
          </button>
          
          <div className="text-center text-[10px] sm:text-xs text-[#8B4513] font-medium">
            🔒 ১০০% নিরাপদ ও বিশ্বস্ত
          </div>
        </div>
      </div>
    </section>
  );
}
