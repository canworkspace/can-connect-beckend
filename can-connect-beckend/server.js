const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Ana Sayfa Mesajı
app.get('/', (req, res) => {
  res.send('Can Connect Sunucusu Yayında! 🚀 (System Online)');
});

// Test Bağlantısı
app.get('/api/status', (req, res) => {
  res.json({
    durum: "aktif",
    mesaj: "Can Connect servisi sorunsuz çalışıyor."
  });
});

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı.`);
});
