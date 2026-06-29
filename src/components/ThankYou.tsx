import { useEffect } from 'react';

export default function ThankYou() {
  useEffect(() => {
    // Facebook Pixel Purchase event
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Purchase', { value: 999, currency: 'BDT' });
    }
  }, []);

  return (
    <div style={{
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      margin: 0,
      padding: '12px',
      background: 'linear-gradient(135deg, #FFF8F0 0%, #F5F0E8 100%)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        background: 'linear-gradient(135deg, white 0%, #FFFEF7 100%)',
        padding: '24px 20px',
        borderRadius: '20px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        border: '2px solid #D4AF37',
        maxWidth: '400px',
        width: '100%',
        textAlign: 'center' as const,
        position: 'relative' as const,
        overflow: 'hidden'
      }}>
        {/* Top border decoration */}
        <div style={{
          content: "''",
          position: 'absolute' as const,
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'linear-gradient(90deg, #D4AF37 0%, #FFD700 100%)'
        }}></div>

        {/* Success Icon */}
        <div style={{
          width: '50px',
          height: '50px',
          background: '#22C55E',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 16px',
          color: 'white',
          fontSize: '24px'
        }}>
          ✅
        </div>

        <h1 style={{
          color: '#2C1810',
          fontSize: '18px',
          marginBottom: '16px',
          fontWeight: 'bold',
          lineHeight: '1.4'
        }}>
          🎉 ধন্যবাদ! আপনার অর্ডারটি সফলভাবে গ্রহণ করা হয়েছে। ✅
        </h1>

        <div style={{
          background: 'linear-gradient(90deg, #FFF8DC 0%, #FFFACD 100%)',
          padding: '12px',
          borderRadius: '12px',
          border: '1px solid #D4AF37',
          margin: '12px 0',
          color: '#5D4E37',
          fontWeight: '500',
          fontSize: '14px',
          lineHeight: '1.4'
        }}>
          📞 আমাদের টিম শীঘ্রই আপনার সাথে যোগাযোগ করে অর্ডারটি নিশ্চিত করবে এবং দ্রুততম সময়ের মধ্যে ডেলিভারির ব্যবস্থা করবে।
        </div>

        <div style={{
          background: 'linear-gradient(90deg, #F0F8FF 0%, #E6F3FF 100%)',
          padding: '12px',
          borderRadius: '12px',
          border: '1px solid #93C5FD',
          margin: '12px 0',
          color: '#5D4E37',
          fontWeight: '500',
          fontSize: '14px',
          lineHeight: '1.4'
        }}>
          💙 আমাদের ওপর আস্থা রাখার জন্য আন্তরিক ধন্যবাদ। আশা করি আমাদের পণ্য ও সেবায় আপনি সন্তুষ্ট হবেন।
        </div>

        <div style={{
          background: 'rgba(255,255,255,0.8)',
          padding: '12px',
          borderRadius: '12px',
          border: '1px solid rgba(212, 175, 55, 0.2)',
          margin: '12px 0',
          textAlign: 'left' as const
        }}>
          <h3 style={{
            color: '#8B4513',
            marginBottom: '8px',
            fontSize: '14px',
            fontWeight: '600'
          }}>
            🚚 অর্ডার তথ্য
          </h3>
          <div style={{
            display: 'grid',
            gap: '4px',
            fontSize: '12px',
            color: '#5D4E37'
          }}>
            <div>📦 পণ্য: ৪৩ পিসের প্রিমিয়াম কাঠের খেলনা সেট</div>
            <div>💰 মূল্য: ৳৮৯৯</div>
            <div>🚚 ডেলিভারি চার্জ: ৳১০০</div>
            <div style={{
              fontWeight: 'bold',
              borderTop: '1px solid #D4AF37',
              paddingTop: '4px',
              marginTop: '4px'
            }}>
              সর্বমোট: ৳৯৯৯
            </div>
          </div>
        </div>

        <button 
          onClick={() => window.location.href = '/'}
          style={{
            background: 'linear-gradient(90deg, #8B4513 0%, #A0522D 100%)',
            color: 'white',
            border: 'none',
            padding: '12px 20px',
            borderRadius: '10px',
            fontSize: '14px',
            fontWeight: 'bold',
            cursor: 'pointer',
            width: '100%',
            marginTop: '16px',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = 'linear-gradient(90deg, #A0522D 0%, #8B4513 100%)';
            e.currentTarget.style.transform = 'scale(1.02)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'linear-gradient(90deg, #8B4513 0%, #A0522D 100%)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          🏠 হোমে ফিরে যান
        </button>
      </div>
    </div>
  );
}