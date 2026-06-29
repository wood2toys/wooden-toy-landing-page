const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// In-memory storage for orders
let orders = [];

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// API Routes
app.post('/api/orders', (req, res) => {
  try {
    const order = {
      id: Date.now().toString(),
      ...req.body,
      createdAt: new Date().toISOString()
    };
    
    orders.push(order);
    console.log('New order:', order);
    
    res.status(201).json({ success: true, order });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to create order' });
  }
});

app.get('/api/orders', (req, res) => {
  res.json({ success: true, orders: orders.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) });
});

app.delete('/api/orders/:id', (req, res) => {
  const orderId = req.params.id;
  const initialLength = orders.length;
  orders = orders.filter(order => order.id !== orderId);
  
  if (orders.length < initialLength) {
    res.json({ success: true, message: 'Order deleted' });
  } else {
    res.status(404).json({ success: false, message: 'Order not found' });
  }
});

// Admin panel
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});

module.exports = app;