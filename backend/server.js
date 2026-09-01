const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/pubg-optimizer')
  .then(() => console.log('✅ MongoDB متصل شد'))
  .catch((err) => console.error('❌ خطای MongoDB:', err));

// Routes
app.use('/api/auth', authRoutes);

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: '✅ سرور فعال است', timestamp: new Date() });
});

// Ping Test Endpoints
app.get('/api/servers', (req, res) => {
  const servers = [
    { server: 'Asia-Seoul', region: 'کوریای جنوبی', ping: 45, status: 'good' },
    { server: 'Asia-Shanghai', region: 'چین', ping: 55, status: 'good' },
    { server: 'Middle-East', region: 'خاورمیانه', ping: 65, status: 'fair' },
    { server: 'Europe-London', region: 'انگلستان', ping: 120, status: 'fair' },
  ];
  res.json(servers);
});

app.post('/api/ping', (req, res) => {
  const { server } = req.body;
  const ping = Math.floor(Math.random() * 100) + 20;
  res.json({
    server,
    ping,
    status: ping < 50 ? 'good' : ping < 100 ? 'fair' : 'poor',
    timestamp: new Date(),
  });
});

// Error Handler
app.use((err, req, res, next) => {
  console.error('خطا:', err);
  res.status(500).json({ error: 'خطای سرور داخلی' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`\n🚀 سرور در پورت ${PORT} اجرا می‌شود`);
  console.log(`📍 لینک: http://localhost:${PORT}`);
  console.log(`✅ API آماده است!\n`);
});

module.exports = app;