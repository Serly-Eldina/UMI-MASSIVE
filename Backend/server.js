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
    const sql = "INSERT INTO user (`name`,`email`,`password`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
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
    const sql = "SELECT * FROM user WHERE `email` = ? AND `password` = ?";
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) {
            console.error("Error in Login:", err);
            return res.status(500).json({ error: "Internal Server Error" });
        }if(data.length > 0){
            return res.json("Success");
        
        }else{
            return res.json("Faile");
        }
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
    const { name, status, email, password } = req.body; // Ambil data yang diperbarui
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