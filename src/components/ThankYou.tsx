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
      padding: '20px',
      background: 'linear-gradient(135deg, #FFF8F0 0%, #F5F0E8 100%)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        background: 'linear-gradient(135deg, white 0%, #FFFEF7 100%)',
        padding: '40px',
        borderRadius: '30px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        border: '2px solid #D4AF37',
        maxWidth: '500px',
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
          height: '4px',
          background: 'linear-gradient(90deg, #D4AF37 0%, #FFD700 100%)'
        }}></div>

        {/* Success Icon */}
        <div style={{
          width: '64px',
          height: '64px',
          background: '#22C55E',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 20px',
          color: 'white',
          fontSize: '28px'
        }}>
          ✅
        </div>

        <h1 style={{
          color: '#2C1810',
          fontSize: '24px',
          marginBottom: '20px',
          fontWeight: 'bold'
        }}>
          🎉 ধন্যবাদ! আপনার অর্ডারটি সফলভাবে গ্রহণ করা হয়েছে। ✅
        </h1>

        <div style={{
          background: 'linear-gradient(90deg, #FFF8DC 0%, #FFFACD 100%)',
          padding: '16px',
          borderRadius: '16px',
          border: '1px solid #D4AF37',
          margin: '16px 0',
          color: '#5D4E37',
          fontWeight: '500'
        }}>
          📞 আমাদের টিম শীঘ্রই আপনার সাথে যোগাযোগ করে অর্ডারটি নিশ্চিত করবে এবং দ্রুততম সময়ের মধ্যে ডেলিভারির ব্যবস্থা করবে।
        </div>

        <div style={{
          background: 'linear-gradient(90deg, #F0F8FF 0%, #E6F3FF 100%)',
          padding: '16px',
          borderRadius: '16px',
          border: '1px solid #93C5FD',
          margin: '16px 0',
          color: '#5D4E37',
          fontWeight: '500'
        }}>
          💙 আমাদের ওপর আস্থা রাখার জন্য আন্তরিক ধন্যবাদ। আশা করি আমাদের পণ্য ও সেবায় আপনি সন্তুষ্ট হবেন।
        </div>

        <div style={{
          background: 'rgba(255,255,255,0.8)',
          padding: '16px',
          borderRadius: '16px',
          border: '1px solid rgba(212, 175, 55, 0.2)',
          margin: '16px 0',
          textAlign: 'left' as const
        }}>
          <h3 style={{
            color: '#8B4513',
            marginBottom: '12px',
            fontSize: '16px'
          }}>
            🚚 অর্ডার তথ্য
          </h3>
          <p style={{ margin: '4px 0', fontSize: '14px', color: '#5D4E37' }}>
            📦 পণ্য: ৪৩ পিসের প্রিমিয়াম কাঠের খেলনা সেট
          </p>
          <p style={{ margin: '4px 0', fontSize: '14px', color: '#5D4E37' }}>
            💰 মূল্য: ৳৮৯৯
          </p>
          <p style={{ margin: '4px 0', fontSize: '14px', color: '#5D4E37' }}>
            🚚 ডেলিভারি চার্জ: ৳১০০
          </p>
          <p style={{
            fontWeight: 'bold',
            borderTop: '1px solid #D4AF37',
            paddingTop: '8px',
            marginTop: '8px',
            fontSize: '14px',
            color: '#5D4E37'
          }}>
            সর্বমোট: ৳৯৯৯
          </p>
        </div>

        <button 
          onClick={() => window.location.href = '/'}
          style={{
            background: 'linear-gradient(90deg, #8B4513 0%, #A0522D 100%)',
            color: 'white',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '12px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            width: '100%',
            marginTop: '20px',
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