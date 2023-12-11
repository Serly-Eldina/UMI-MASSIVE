import express from 'express';
import { createConnection } from 'mysql';


const app = express();
const port = 5173; // Ganti dengan port yang diinginkan
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Konfigurasi koneksi ke database
const db = createConnection({
  host: 'localhost',
  user: 'nama_user',
  password: 'password_user',
  database: 'nama_database'
});

db.connect((err) => {
  if (err) {
    console.error('Koneksi ke database gagal: ' + err.stack);
    return;
  }
  console.log('Terhubung ke database dengan ID ' + db.threadId);
});

// Definisikan rute untuk login
app.post('../src/pages/login', (req, res) => {
  const { username, password } = req.body;
  const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
  db.query(query, [username, password], (err, results) => {
    if (err) throw err;
    if (results.length > 0) {
      res.json({ success: true, message: 'Login berhasil' });
    } else {
      res.json({ success: false, message: 'Login gagal' });
    }
  });
});

// Definisikan rute untuk registrasi
app.post('../src/pages/register', (req, res) => {
  const { username, password } = req.body;
  const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
  db.query(query, [username, password], (err, results) => {
    if (err) throw err;
    res.json({ success: true, message: 'Registrasi berhasil' });
  });
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
