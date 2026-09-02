require('dotenv').config();
const express = require('express');
const http = require('http');
const cors = require('cors');
const { initRavenDB } = require('./config/ravenDb');
const connectDB = require('./config/db');

// Initialize Databases
initRavenDB();
connectDB();

const path = require('path');
const app = express();
app.use(cors());
app.use(express.json());

// Serve static web client from 'public' folder with absolute path
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/status', (req, res) => {
  res.json({
    status: 'Online',
    server: 'Dominox Game Server (RavenDB Cloud + Native WebSocket)',
    timestamp: new Date()
  });
});

const server = http.createServer(app);

// Attach Native WebSockets Handler
require('./sockets/gameSocket')(server);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`===================================================`);
  console.log(`🚀 Dominox Native WebSocket Game Server running on port ${PORT}`);
  console.log(`===================================================`);
});