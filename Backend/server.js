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

db.connect((err) => {
    if (err) {
       console.error('Error connecting to database:', err);
    } else {
       console.log('Connected to database');
    }
 });
 


app.listen(8001, () =>{
    console.log("listening")
});