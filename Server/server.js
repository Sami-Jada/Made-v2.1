const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());


// Connect backend to front end
const madeDB = mysql.createConnection(
    {
        user: "root",
        hose: "localhost",
        password: "0000",
        database: "made",
    }
)

app.post('/register', (req,res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const DOB = req.body.DOB
    const email = req.body.email;
    const password = req.body.password;

    madeDB.query("INSERT INTO users (firstName, lastName, DOB, email, password) VALUES (?,?,?,?,?)", [firstName, lastName, DOB, email, password],
    (err, result) => {
        if(result) {
            res.send(result);
        }
        else{
            res.send({message: "Enter the correct details"});
        }
    })
} )

app.post('/login', (req,res) => {

    const email = req.body.email;
    const password = req.body.password;

    madeDB.query("SELECT * FROM users WHERE email = ? AND password = ?", [ email, password],
    (err, result) => {
        if(err) {
            req.setEncoding({err: err});
        }
        else{
            if(result.length > 0) {
                res.send(result);
            } else{
                res.send({message: "Enter the correct details"})
            }
        }
    })
} )

app.listen(3001, () => {
    console.log("Server Running");
})