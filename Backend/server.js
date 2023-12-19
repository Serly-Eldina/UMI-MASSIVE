const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "floria"
});

app.post('/Register', (req, res) => {
    console.log('Received data:', req.body);
    const sql = "INSERT INTO user (`name`,`email`,`password`,`is_login`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password,
        'isNotLogin'
    ];

    db.query(sql, [values], (err, data) => {
        if (err) {
            console.error("Error in registration:", err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        console.log("Registration successful:", data);
        return res.json(data);
    });
    
});

app.post('/Login', (req, res) => {
    console.log('Received data:', req.body);
    const sqlSelect = "SELECT * FROM user WHERE `email` = ? AND `password` = ?";
    db.query(sqlSelect, [req.body.email, req.body.password], (err, data) => {
        if (err) {
            console.error("Error in Login:", err);
            return res.status(500).json({ error: "Internal Server Error" });
        }

        if (data.length > 0) {
            // Lakukan update ke kolom isLogin = 'isLogin'
            const userId = data[0].id;
            const sqlUpdate = "UPDATE user SET is_login = 'isLogin' WHERE id = ?";
            
            db.query(sqlUpdate, [userId], (updateErr, updateData) => {
                if (updateErr) {
                    console.error("Error updating is_login:", updateErr);
                    return res.status(500).json({ error: "Internal Server Error" });
                }

                console.log("Login successful. Updated is_login:", updateData);
                return res.json("Success");
            });
        } else {
            return res.json("Fail");
        }
    });
});




// Endpoint untuk cek login status
app.post('/check-login', (req, res) => {
    const userEmail = req.body.email; // Ganti dengan atribut yang sesuai dengan request dari frontend
    const sql = "SELECT * FROM user WHERE `email` = ? AND `is_login` = ?";
    
    db.query(sql, [userEmail, 'isLogin'], (err, data) => {
        if (err) {
            console.error("Error in check-login:", err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        
        if (data.length > 0) {
            // Pengguna telah login
            return res.json("Success");
        } else {
            // Pengguna belum login, arahkan untuk login
            return res.json("Fail");
        }
    });
});

// Endpoint untuk mengupdate profil pengguna berdasarkan email
app.post('/updateUserProfile/:email', (req, res) => {
    const userEmail = req.params.email;
    const { name, email, password } = req.body;

    const sqlUpdate = "UPDATE user SET name=?, email=?, password=? WHERE email=?";
    
    db.query(sqlUpdate, [name, email, password, userEmail], (updateErr, updateData) => {
        if (updateErr) {
            console.error("Error updating user profile:", updateErr);
            return res.status(500).json({ error: "Internal Server Error" });
        }

        console.log("User profile updated successfully");
        return res.json({ message: "User profile updated successfully" });
    });
});

// Endpoint untuk logout
app.post('/logout', (req, res) => {
    const userEmail = req.body.email;
    const sqlUpdate = "UPDATE user SET is_login = 'isNotLogin' WHERE email = ?";
    
    db.query(sqlUpdate, [userEmail], (updateErr, updateData) => {
        if (updateErr) {
            console.error("Error updating is_login during logout:", updateErr);
            return res.status(500).json({ error: "Internal Server Error" });
        }

        console.log("Logout successful. Updated is_login:", updateData);
        return res.json("Success");
    });
});

app.get('/getUserData', (req, res) => {
    const sql = "SELECT * FROM user";
    db.query(sql, (err, data) => {
        if (err) {
            console.error("Error getting user data:", err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        return res.json(data);
    });
});

app.get('/getUserProfile/:email', (req, res) => {
    const userEmail = req.params.email;
    const sql = "SELECT * FROM user WHERE email = ?";
    
    db.query(sql, [userEmail], (err, data) => {
        if (err) {
            console.error("Error fetching user profile:", err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        if (data.length > 0) {
            return res.json(data[0]); // Asumsi hanya satu pengguna yang dikembalikan
        } else {
            return res.status(404).json({ message: "User profile not found" });
        }
    });
});



db.connect((err) => {
    if (err) {
       console.error('Error connecting to database:', err);
    } else {
       console.log('Connected to database');
    }
 });
 


// Endpoint untuk menghapus pengguna berdasarkan ID
app.delete('/deleteUser/:id', (req, res) => {
    const userId = req.params.id;
    const sql = "DELETE FROM user WHERE id = ?";
    db.query(sql, userId, (err, data) => {
        if (err) {
            console.error("Error deleting user:", err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        console.log("User deleted successfully");
        return res.json({ message: "User deleted successfully" });
    });
});

app.get('/getUserProfile/:id', (req, res) => {
    const userId = req.params.id;
    const sql = "SELECT * FROM user WHERE id = ?";
    db.query(sql, userId, (err, data) => {
        if (err) {
            console.error("Error getting user profile:", err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        if (data.length > 0) {
            return res.json(data[0]); // Asumsi hanya satu pengguna yang dikembalikan
        } else {
            return res.status(404).json({ message: "User profile not found" });
        }
    });
});
app.post('/updateUserProfile/:id', (req, res) => {
    const userId = req.params.id;
    const { name, status, email, password } = req.body; 
    const sql = "UPDATE user SET name=?, status=?, email=?, password=? WHERE id=?";
    db.query(sql, [name, status, email, password, userId], (err, result) => {
        if (err) {
            console.error("Error updating user profile:", err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        return res.json({ message: "User profile updated successfully" });
    });
});

app.listen(8001, () =>{
    console.log("listening")
});