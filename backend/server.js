const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// PUBG Game Servers Configuration
const pubgServers = [
  { id: 1, server: 'Asia-Seoul', region: 'KR', host: '203.104.128.0' },
  { id: 2, server: 'Asia-Shanghai', region: 'CN', host: '115.159.0.0' },
  { id: 3, server: 'Asia-Bangkok', region: 'TH', host: '1.179.0.0' },
  { id: 4, server: 'Middle-East', region: 'AE', host: '185.10.64.0' },
  { id: 5, server: 'Europe-London', region: 'UK', host: '178.32.0.0' },
  { id: 6, server: 'America-NA', region: 'US', host: '13.107.0.0' },
  { id: 7, server: 'South-America', region: 'BR', host: '187.33.0.0' },
];

// Simulate ping check function
const simulatePingCheck = (server) => {
  const basePing = 50 + Math.random() * 100;
  return Math.round(basePing);
};

const getPingStatus = (ping) => {
  if (ping < 50) return 'good';
  if (ping < 100) return 'fair';
  return 'poor';
};

// API Routes

// Get all servers
app.get('/api/servers', (req, res) => {
  try {
    const serversWithPing = pubgServers.map((server) => ({
      ...server,
      ping: simulatePingCheck(server.server),
      status: getPingStatus(simulatePingCheck(server.server)),
    }));
    res.json(serversWithPing);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching servers' });
  }
});

// Check ping for specific server
app.post('/api/ping', (req, res) => {
  try {
    const { server } = req.body;
    const serverData = pubgServers.find((s) => s.server === server);

    if (!serverData) {
      return res.status(404).json({ error: 'Server not found' });
    }

    const ping = simulatePingCheck(server);
    const status = getPingStatus(ping);

    res.json({
      server: serverData.server,
      region: serverData.region,
      ping,
      status,
      timestamp: new Date(),
    });
  } catch (error) {
    res.status(500).json({ error: 'Error checking ping' });
  }
});

// Get server recommendations
app.get('/api/recommendations', (req, res) => {
  try {
    const serversWithPing = pubgServers.map((server) => ({
      ...server,
      ping: simulatePingCheck(server.server),
    }));

    const sortedServers = serversWithPing.sort((a, b) => a.ping - b.ping);
    const recommendations = sortedServers.slice(0, 3);

    res.json(recommendations);
  } catch (error) {
    res.status(500).json({ error: 'Error getting recommendations' });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
});
