const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Veritabanı Bağlantısı (Render panelinden okur)
const MONGODB_URI = process.env.MONGODB_URI; 

mongoose.connect(MONGODB_URI)
  .then(() => console.log("Can Connect Veritabanı Bağlantısı Başarılı ✅"))
  .catch((err) => console.error("Veritabanı Hatası:", err));

// Örnek Bir Test API'si
app.get('/', (req, res) => {
  res.send('Can Connect Sunucusu ve Veritabanı Hazır! 🚀');
});

// Kayıt Olma API'si
app.post('/api/kayit-ol', async (req, res) => {
    // Buraya kayıt kodlarını ekleyeceğiz, önce bağlantıyı test edelim
    res.json({ mesaj: "Sunucu isteği aldı!" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Sunucu ${PORT} portunda çalışıyor.`));
