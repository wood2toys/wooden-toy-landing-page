import { useEffect, useState } from 'react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export default function AdminPanel() {
  const [orders, setOrders] = useState([]);
  const [stats, setStats] = useState({ total: 0, revenue: 0, today: 0 });
  const [showImageModal, setShowImageModal] = useState(false);
  const [showPriceModal, setShowPriceModal] = useState(false);
  const [images, setImages] = useState([]);
  const [priceForm, setPriceForm] = useState({ price: '', originalPrice: '', deliveryCharge: '', productName: '' });
  const [currentPrice, setCurrentPrice] = useState<any>(null);

  useEffect(() => {
    loadOrders();
    loadCurrentPrice();
  }, []);

  async function loadOrders() {
    try {
      const res = await fetch(`${API_URL}/orders`);
      const data = await res.json();
      if (data.success) {
        setOrders(data.orders);
        const today = new Date().toDateString();
        setStats({
          total: data.orders.length,
          revenue: data.orders.reduce((s: number, o: any) => s + (o.totalAmount || 0), 0),
          today: data.orders.filter((o: any) => new Date(o.createdAt).toDateString() === today).length
        });
      }
    } catch (e) { console.error(e); }
  }

  async function loadCurrentPrice() {
    try {
      const res = await fetch(`${API_URL}/price`);
      const data = await res.json();
      if (data.success) {
        setCurrentPrice(data);
        setPriceForm({ price: data.price, originalPrice: data.originalPrice, deliveryCharge: data.deliveryCharge, productName: data.productName });
      }
    } catch (e) { console.error(e); }
  }

  async function loadImages() {
    try {
      const res = await fetch(`${API_URL}/images`);
      const data = await res.json();
      if (data.success) setImages(data.images);
    } catch (e) { console.error(e); }
  }

  async function deleteOrder(id: string) {
    if (!confirm('এই অর্ডারটি মুছে দিতে চান?')) return;
    await fetch(`${API_URL}/orders/${id}`, { method: 'DELETE' });
    loadOrders();
  }

  async function updatePrice() {
    try {
      const res = await fetch(`${API_URL}/price`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(priceForm)
      });
      const data = await res.json();
      if (data.success) {
        alert('✅ মূল্য আপডেট হয়েছে!');
        setCurrentPrice(data);
        setShowPriceModal(false);
      }
    } catch (e) { alert('সমস্যা হয়েছে'); }
  }

  async function uploadImage(e: any) {
    const file = e.target.files[0];
    if (!file) return;
    const formData = new FormData();
    formData.append('image', file);
    try {
      const res = await fetch(`${API_URL}/upload-image`, { method: 'POST', body: formData });
      const data = await res.json();
      if (data.success) {
        alert('✅ ছবি আপলোড হয়েছে!');
        loadImages();
      }
    } catch (e) { alert('আপলোড সমস্যা'); }
    e.target.value = '';
  }

  function exportCSV() {
    if (!orders.length) return alert('কোন অর্ডার নেই');
    const csv = orders.map((o: any) =>
      `"${o.id}","${o.customerName}","${o.phoneNumber}","${o.address}","${o.quantity}","${o.totalAmount}","${new Date(o.createdAt).toLocaleDateString()}"`
    ).join('\n');
    const blob = new Blob([`"ID","নাম","ফোন","ঠিকানা","পরিমাণ","মোট","তারিখ"\n${csv}`], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = 'orders.csv'; a.click();
    URL.revokeObjectURL(url);
  }

  const backendBase = API_URL.replace('/api', '');

  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', background: 'linear-gradient(135deg, #f8fafc, #e2e8f0)', minHeight: '100vh', padding: '16px' }}>
      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #1e293b, #334155)', color: 'white', padding: '20px', borderRadius: '16px', marginBottom: '20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '1.5rem', margin: 0 }}>🧸 অ্যাডমিন প্যানেল</h1>
        <p style={{ margin: '4px 0 0', opacity: 0.8, fontSize: '0.85rem' }}>Wooden Toys Management</p>
      </div>

      {/* Action Buttons */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
        {[
          { label: '🔄 রিফ্রেশ', color: '#3b82f6', action: loadOrders },
          { label: '📊 এক্সপোর্ট', color: '#10b981', action: exportCSV },
          { label: '🖼️ ছবি আপলোড', color: '#f59e0b', action: () => { setShowImageModal(true); loadImages(); } },
          { label: '💰 মূল্য পরিবর্তন', color: '#8b5cf6', action: () => setShowPriceModal(true) },
        ].map(btn => (
          <button key={btn.label} onClick={btn.action}
            style={{ flex: 1, minWidth: '100px', background: btn.color, color: 'white', border: 'none', padding: '12px', borderRadius: '12px', fontWeight: 600, cursor: 'pointer', fontSize: '13px' }}>
            {btn.label}
          </button>
        ))}
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '20px' }}>
        {[
          { icon: '📦', value: stats.total, label: 'মোট অর্ডার' },
          { icon: '💰', value: `৳${stats.revenue.toLocaleString()}`, label: 'মোট আয়' },
          { icon: '🕐', value: stats.today, label: 'আজকের অর্ডার' },
        ].map(s => (
          <div key={s.label} style={{ background: 'white', padding: '16px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <div style={{ fontSize: '1.5rem' }}>{s.icon}</div>
            <div style={{ fontSize: '1.4rem', fontWeight: 700, color: '#1e293b' }}>{s.value}</div>
            <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Orders */}
      <div style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
        <div style={{ background: 'linear-gradient(135deg, #1e293b, #334155)', color: 'white', padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ margin: 0, fontSize: '1rem' }}>📋 সাম্প্রতিক অর্ডার</h2>
          <button onClick={loadOrders} style={{ background: 'rgba(255,255,255,0.2)', border: 'none', color: 'white', padding: '6px 12px', borderRadius: '8px', cursor: 'pointer', fontSize: '0.8rem' }}>🔄 রিফ্রেশ</button>
        </div>
        {orders.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px', color: '#64748b' }}>কোন অর্ডার নেই</div>
        ) : (
          orders.map((order: any) => (
            <div key={order.id} style={{ padding: '16px 20px', borderBottom: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ background: '#e2e8f0', padding: '2px 8px', borderRadius: '6px', fontSize: '0.75rem', fontFamily: 'monospace' }}>#{order.id}</span>
                <span style={{ background: '#dcfce7', color: '#166534', padding: '2px 10px', borderRadius: '20px', fontSize: '0.7rem', fontWeight: 600 }}>নতুন</span>
              </div>
              <div style={{ fontWeight: 600, marginBottom: '4px' }}>{order.customerName}</div>
              <div style={{ color: '#64748b', fontSize: '0.85rem', marginBottom: '8px' }}>📞 {order.phoneNumber}<br />📍 {order.address}</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <span style={{ color: '#059669', fontWeight: 700, fontSize: '1.1rem' }}>৳{order.totalAmount}</span>
                  <span style={{ color: '#94a3b8', fontSize: '0.75rem', marginLeft: '8px' }}>{new Date(order.createdAt).toLocaleDateString('bn-BD')}</span>
                </div>
                <button onClick={() => deleteOrder(order.id)} style={{ background: '#ef4444', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '8px', cursor: 'pointer', fontSize: '0.75rem' }}>মুছুন</button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Image Upload Modal */}
      {showImageModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.5)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ background: 'white', padding: '24px', borderRadius: '16px', width: '90%', maxWidth: '500px', maxHeight: '80vh', overflowY: 'auto' }}>
            <h3 style={{ marginBottom: '16px' }}>🖼️ Hero Image Upload</h3>
            <input type="file" accept="image/*" onChange={uploadImage} style={{ width: '100%', padding: '10px', border: '2px dashed #e2e8f0', borderRadius: '8px', marginBottom: '16px' }} />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: '10px', marginBottom: '16px' }}>
              {images.map((img: any) => (
                <div key={img.filename} style={{ border: '1px solid #e2e8f0', borderRadius: '8px', overflow: 'hidden' }}>
                  <img src={`${backendBase}${img.url}`} style={{ width: '100%', height: '80px', objectFit: 'cover' }} />
                  <div style={{ padding: '6px' }}>
                    <button onClick={() => { navigator.clipboard.writeText(`${backendBase}${img.url}`); alert('URL কপি হয়েছে!'); }}
                      style={{ width: '100%', background: '#10b981', color: 'white', border: 'none', padding: '4px', borderRadius: '4px', cursor: 'pointer', fontSize: '11px' }}>
                      URL কপি
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={() => setShowImageModal(false)} style={{ width: '100%', background: '#64748b', color: 'white', border: 'none', padding: '12px', borderRadius: '8px', cursor: 'pointer' }}>বন্ধ করুন</button>
          </div>
        </div>
      )}

      {/* Price Modal */}
      {showPriceModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.5)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ background: 'white', padding: '24px', borderRadius: '16px', width: '90%', maxWidth: '420px' }}>
            <h3 style={{ marginBottom: '16px' }}>💰 মূল্য সেটিংস</h3>
            {currentPrice && (
              <div style={{ background: '#f0fdf4', border: '1px solid #86efac', borderRadius: '8px', padding: '10px', marginBottom: '16px', fontSize: '13px', color: '#166534' }}>
                বর্তমান: ৳{currentPrice.price} | পুরোনো: ৳{currentPrice.originalPrice} | ডেলিভারি: ৳{currentPrice.deliveryCharge}
              </div>
            )}
            {[
              { label: 'পণ্যের নাম', key: 'productName', type: 'text' },
              { label: 'অফার মূল্য (৳)', key: 'price', type: 'number' },
              { label: 'পুরোনো মূল্য (৳)', key: 'originalPrice', type: 'number' },
              { label: 'ডেলিভারি চার্জ (৳)', key: 'deliveryCharge', type: 'number' },
            ].map(field => (
              <div key={field.key} style={{ marginBottom: '12px' }}>
                <label style={{ display: 'block', fontWeight: 600, marginBottom: '4px', fontSize: '13px' }}>{field.label}</label>
                <input type={field.type} value={(priceForm as any)[field.key]}
                  onChange={e => setPriceForm({ ...priceForm, [field.key]: e.target.value })}
                  style={{ width: '100%', padding: '10px', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box' }} />
              </div>
            ))}
            <div style={{ display: 'flex', gap: '10px', marginTop: '16px' }}>
              <button onClick={updatePrice} style={{ flex: 1, background: '#8b5cf6', color: 'white', border: 'none', padding: '12px', borderRadius: '8px', cursor: 'pointer', fontWeight: 600 }}>আপডেট করুন</button>
              <button onClick={() => setShowPriceModal(false)} style={{ flex: 1, background: '#64748b', color: 'white', border: 'none', padding: '12px', borderRadius: '8px', cursor: 'pointer' }}>বন্ধ করুন</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
