const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// In-memory storage for orders
let orders = [];

// Configure multer for file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = path.join(__dirname, 'uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    // Generate unique filename with timestamp
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, 'hero-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  },
  fileFilter: function (req, file, cb) {
    // Check if file is an image
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'), false);
    }
  }
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

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

// Image upload endpoint
app.post('/api/upload-image', upload.single('image'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No image file uploaded' });
    }

    const imageUrl = `/uploads/${req.file.filename}`;
    const description = req.body.description || '';

    console.log('Image uploaded:', {
      filename: req.file.filename,
      size: req.file.size,
      description: description
    });

    res.json({ 
      success: true, 
      message: 'Image uploaded successfully',
      imageUrl: imageUrl,
      filename: req.file.filename,
      description: description
    });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ success: false, message: 'Failed to upload image' });
  }
});

// Get uploaded images
app.get('/api/images', (req, res) => {
  try {
    const uploadsDir = path.join(__dirname, 'uploads');
    if (!fs.existsSync(uploadsDir)) {
      return res.json({ success: true, images: [] });
    }

    const files = fs.readdirSync(uploadsDir);
    const images = files
      .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
      .map(file => ({
        filename: file,
        url: `/uploads/${file}`,
        uploadDate: fs.statSync(path.join(uploadsDir, file)).mtime
      }))
      .sort((a, b) => new Date(b.uploadDate) - new Date(a.uploadDate));

    res.json({ success: true, images });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to get images' });
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