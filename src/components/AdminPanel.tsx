import { useEffect, useState } from 'react';

const BACKEND_URL = import.meta.env.VITE_API_URL?.replace('/api', '') || 'https://web-production-5ecb3.up.railway.app';
const API = `${BACKEND_URL}/api`;

const STATUS_COLORS: Record<string, string> = {
  Pending: '#f59e0b',
  Confirmed: '#3b82f6',
  Retry: '#8b5cf6',
  Delivered: '#10b981',
  Cancelled: '#ef4444',
};

const STATUS_BG: Record<string, string> = {
  Pending: '#fef3c7',
  Confirmed: '#dbeafe',
  Retry: '#ede9fe',
  Delivered: '#d1fae5',
  Cancelled: '#fee2e2',
};

export default function AdminPanel() {
  const [tab, setTab] = useState<'orders' | 'images' | 'settings'>('orders');
  const [orders, setOrders] = useState<any[]>([]);
  const [images, setImages] = useState<any[]>([]);
  const [stats, setStats] = useState({ total: 0, today: 0, revenue: 0 });
  const [priceForm, setPriceForm] = useState({ price: '999', originalPrice: '1200', deliveryCharge: '100', productName: '৪৮ পিসের ১ সেট + ফ্রি ঢেঁকি' });
  const [statusModal, setStatusModal] = useState<{ id: string; current: string } | null>(null);
  const [newOrderCount, setNewOrderCount] = useState(0);

  useEffect(() => { loadOrders(); loadImages(); loadPrice(); }, []);

  const [copiedId, setCopiedId] = useState<string | null>(null);

  async function loadOrders() {
    try {
      const res = await fetch(`${API}/orders`);
      const data = await res.json();
      if (data.success) {
        setOrders(data.orders);
        const today = new Date().toDateString();
        const todayOrders = data.orders.filter((o: any) => new Date(o.createdAt).toDateString() === today);
        setStats({
          total: data.orders.length,
          today: todayOrders.length,
          revenue: data.orders.reduce((s: number, o: any) => s + (o.totalAmount || 0), 0)
        });
        setNewOrderCount(data.orders.filter((o: any) => !o.status || o.status === 'Pending').length);
      }
    } catch (e) {}
  }

  async function loadImages() {
    try {
      const res = await fetch(`${API}/images`);
      const data = await res.json();
      if (data.success) setImages(data.images);
    } catch (e) {}
  }

  async function loadPrice() {
    try {
      const res = await fetch(`${API}/price`);
      const data = await res.json();
      if (data.success) setPriceForm({ price: data.price, originalPrice: data.originalPrice, deliveryCharge: data.deliveryCharge, productName: data.productName });
    } catch (e) {}
  }

  async function updateStatus(id: string, status: string) {
    await fetch(`${API}/orders/${id}/status`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status })
    });
    setOrders(prev => prev.map(o => o.id === id ? { ...o, status } : o));
    setStatusModal(null);
  }

  async function deleteOrder(id: string) {
    if (!confirm('মুছে দিতে চান?')) return;
    await fetch(`${API}/orders/${id}`, { method: 'DELETE' });
    setOrders(prev => prev.filter(o => o.id !== id));
  }

  function copyOrder(order: any) {
    const text = `নাম: ${order.customerName}\nফোন: ${order.phoneNumber}\nঠিকানা: ${order.address}\nপরিমাণ: ${order.quantity} সেট\nমোট: ৳${order.totalAmount}`;
    navigator.clipboard.writeText(text);
    setCopiedId(order.id);
    setTimeout(() => setCopiedId(null), 2000);
  }

  async function uploadImage(e: any) {
    const file = e.target.files[0];
    if (!file) return;
    const formData = new FormData();
    formData.append('image', file);
    const res = await fetch(`${API}/upload-image`, { method: 'POST', body: formData });
    const data = await res.json();
    if (data.success) { alert('আপলোড হয়েছে!'); loadImages(); }
    e.target.value = '';
  }

  async function updatePrice() {
    const res = await fetch(`${API}/price`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(priceForm)
    });
    const data = await res.json();
    if (data.success) alert('✅ মূল্য আপডেট হয়েছে!');
  }

  function downloadCSV() {
    if (!orders.length) return alert('কোন অর্ডার নেই');
    const csv = ['ID,নাম,ফোন,ঠিকানা,পরিমাণ,মোট,স্ট্যাটাস,তারিখ',
      ...orders.map(o => `"${o.id}","${o.customerName}","${o.phoneNumber}","${o.address}","${o.quantity}","${o.totalAmount}","${o.status || 'Pending'}","${new Date(o.createdAt).toLocaleDateString('bn-BD')}"`)
    ].join('\n');
    const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = 'orders.csv'; a.click();
  }

  const s = { fontFamily: 'sans-serif', background: '#f1f5f9', minHeight: '100vh' };

  return (
    <div style={s}>
      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #1e293b, #334155)', padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ color: 'white', fontWeight: 700, fontSize: '18px' }}>🧸 অ্যাডমিন প্যানেল</div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button onClick={loadOrders} style={{ background: '#f59e0b', color: 'white', border: 'none', padding: '8px 14px', borderRadius: '20px', fontWeight: 600, cursor: 'pointer', fontSize: '13px' }}>
            🔄 রিফ্রেশ {newOrderCount > 0 && <span style={{ background: 'red', borderRadius: '50%', padding: '0 6px', marginLeft: 4 }}>{newOrderCount}</span>}
          </button>
          <button onClick={downloadCSV} style={{ background: '#10b981', color: 'white', border: 'none', padding: '8px 14px', borderRadius: '20px', fontWeight: 600, cursor: 'pointer', fontSize: '13px' }}>⬇️ Download</button>
          <button onClick={() => alert('লগআউট')} style={{ background: '#ef4444', color: 'white', border: 'none', padding: '8px 14px', borderRadius: '20px', fontWeight: 600, cursor: 'pointer', fontSize: '13px' }}>→ লগআউট</button>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', background: 'white', borderBottom: '1px solid #e2e8f0' }}>
        {[
          { key: 'orders', icon: '🛒', label: 'অর্ডার' },
          { key: 'images', icon: '🖼️', label: 'ছবি' },
          { key: 'settings', icon: '⚙️', label: 'সেটিংস' },
        ].map(t => (
          <button key={t.key} onClick={() => setTab(t.key as any)}
            style={{ flex: 1, padding: '14px', border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '14px', background: tab === t.key ? 'white' : '#f8fafc', color: tab === t.key ? '#f59e0b' : '#64748b', borderBottom: tab === t.key ? '3px solid #f59e0b' : '3px solid transparent' }}>
            {t.icon} {t.label}
          </button>
        ))}
      </div>

      <div style={{ padding: '12px' }}>

        {/* ORDERS TAB */}
        {tab === 'orders' && (
          <div>
            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '8px', marginBottom: '12px' }}>
              {[
                { label: 'মোট অর্ডার', value: stats.total, color: '#3b82f6' },
                { label: 'আজকের', value: stats.today, color: '#10b981' },
                { label: `৳${stats.revenue.toLocaleString()}`, value: 'আয়', color: '#f59e0b' },
              ].map((s, i) => (
                <div key={i} style={{ background: 'white', borderRadius: '12px', padding: '12px', textAlign: 'center', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
                  <div style={{ fontSize: '20px', fontWeight: 700, color: s.color }}>{i === 2 ? s.label : s.value}</div>
                  <div style={{ fontSize: '11px', color: '#64748b' }}>{i === 2 ? s.value : s.label}</div>
                </div>
              ))}
            </div>

            {/* Order Cards */}
            {orders.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '40px', color: '#64748b', background: 'white', borderRadius: '12px' }}>কোন অর্ডার নেই</div>
            ) : (
              orders.map((order, idx) => {
                const status = order.status || 'Pending';
                const orderNum = orders.length - idx;
                return (
                  <div key={order.id} style={{ background: 'white', borderRadius: '16px', padding: '16px', marginBottom: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                    {/* Top row */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ color: '#64748b', fontSize: '13px' }}>#{orderNum}</span>
                        <span style={{ background: STATUS_BG[status], color: STATUS_COLORS[status], padding: '3px 10px', borderRadius: '20px', fontSize: '12px', fontWeight: 600 }}>{status}</span>
                      </div>
                      <span style={{ color: '#94a3b8', fontSize: '12px' }}>{new Date(order.createdAt).toLocaleDateString('bn-BD')} - {new Date(order.createdAt).toLocaleTimeString('bn-BD', { hour: '2-digit', minute: '2-digit' })}</span>
                    </div>

                    {/* Customer */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                      <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#f59e0b', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '16px', flexShrink: 0 }}>
                        {(order.customerName || 'N')[0]}
                      </div>
                      <div style={{ fontWeight: 700, fontSize: '16px', color: '#1e293b' }}>{order.customerName}</div>
                    </div>

                    {/* Phone */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                      <div style={{ color: '#475569', fontSize: '14px' }}>📞 {order.phoneNumber}</div>
                      <a href={`tel:${order.phoneNumber}`} style={{ background: '#10b981', color: 'white', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, textDecoration: 'none' }}>📞 কল</a>
                    </div>

                    {/* Address */}
                    <div style={{ color: '#475569', fontSize: '13px', marginBottom: '10px' }}>📍 {order.address}</div>

                    {/* Price row */}
                    <div style={{ display: 'flex', gap: '12px', marginBottom: '12px', fontSize: '13px', color: '#64748b' }}>
                      <span>{order.quantity} সেট</span>
                      <span>পণ্য: ৳{order.productPrice}</span>
                      <span>ডেলিভারি: {order.deliveryCharge === 0 ? 'ফ্রি' : `৳${order.deliveryCharge}`}</span>
                      <span style={{ color: '#ef4444', fontWeight: 700, fontSize: '15px', marginLeft: 'auto' }}>৳{order.totalAmount}</span>
                    </div>

                    {/* Actions */}
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                      <button onClick={() => copyOrder(order)} style={{ background: copiedId === order.id ? '#10b981' : '#f1f5f9', color: copiedId === order.id ? 'white' : '#475569', border: '1px solid #e2e8f0', padding: '8px 14px', borderRadius: '8px', cursor: 'pointer', fontSize: '13px', fontWeight: 600, transition: 'all 0.2s' }}>
                        {copiedId === order.id ? '✓ Copied' : '📋 Copy All'}
                      </button>
                      <select value={status} onChange={e => updateStatus(order.id, e.target.value)}
                        style={{ flex: 1, padding: '8px 12px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '13px', background: 'white', cursor: 'pointer' }}>
                        {['Pending', 'Confirmed', 'Retry', 'Delivered', 'Cancelled'].map(s => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                      <button onClick={() => deleteOrder(order.id)} style={{ background: '#fee2e2', color: '#ef4444', border: 'none', width: '36px', height: '36px', borderRadius: '8px', cursor: 'pointer', fontSize: '16px' }}>🗑️</button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        )}

        {/* IMAGES TAB */}
        {tab === 'images' && (
          <div>
            <div style={{ background: 'white', borderRadius: '16px', padding: '16px', marginBottom: '12px' }}>
              <h3 style={{ marginBottom: '12px', color: '#1e293b' }}>নতুন ছবি আপলোড</h3>
              <input type="file" accept="image/*" onChange={uploadImage} style={{ width: '100%', padding: '12px', border: '2px dashed #e2e8f0', borderRadius: '8px', marginBottom: '8px' }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
              {images.map(img => (
                <div key={img.filename} style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
                  <img src={`${BACKEND_URL}${img.url}`} style={{ width: '100%', height: '120px', objectFit: 'cover' }} />
                  <div style={{ padding: '8px' }}>
                    <button onClick={() => { navigator.clipboard.writeText(`${BACKEND_URL}${img.url}`); alert('URL কপি!'); }}
                      style={{ width: '100%', background: '#10b981', color: 'white', border: 'none', padding: '6px', borderRadius: '6px', cursor: 'pointer', fontSize: '12px' }}>
                      🔗 URL কপি
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SETTINGS TAB */}
        {tab === 'settings' && (
          <div style={{ background: 'white', borderRadius: '16px', padding: '16px' }}>
            <h3 style={{ marginBottom: '16px', color: '#1e293b' }}>💰 মূল্য সেটিংস</h3>
            {[
              { label: 'পণ্যের নাম', key: 'productName', type: 'text' },
              { label: 'অফার মূল্য (৳)', key: 'price', type: 'number' },
              { label: 'পুরোনো মূল্য (৳)', key: 'originalPrice', type: 'number' },
              { label: 'ডেলিভারি চার্জ (৳)', key: 'deliveryCharge', type: 'number' },
            ].map(f => (
              <div key={f.key} style={{ marginBottom: '12px' }}>
                <label style={{ display: 'block', fontWeight: 600, marginBottom: '4px', fontSize: '14px', color: '#374151' }}>{f.label}</label>
                <input type={f.type} value={(priceForm as any)[f.key]}
                  onChange={e => setPriceForm({ ...priceForm, [f.key]: e.target.value })}
                  style={{ width: '100%', padding: '12px', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '15px', boxSizing: 'border-box' as any }} />
              </div>
            ))}
            <button onClick={updatePrice} style={{ width: '100%', background: 'linear-gradient(135deg, #f59e0b, #d97706)', color: 'white', border: 'none', padding: '14px', borderRadius: '12px', fontSize: '16px', fontWeight: 700, cursor: 'pointer' }}>
              ✅ আপডেট করুন
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
