const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const jwt = require("jsonwebtoken")

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60 * 1 * 1000, // ms
    },
  })
);

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'react'
})

app.get("/login", (req, res) => {
    console.log(req.session.user)
    if(req.session.user){
        res.send({loggedIn: true, user: req.session.user})
    } else {
        res.send({loggedIn: false})
    }
})

app.get("/account", (req, res) => {
    db.query("SELECT * FROM account", (err, result) => {
        console.log(2)
        if(err){
            console.log({err: err});
        } else {
            res.send(result)
        }
    })
})

// app.get("/test", (req, res) => {
//     // res.send("SASA")
//     // res.json({name: "nama"})
//     res.send({name: "nama"})
// })

const verifyJWT = (req, res, next) => {
    const token = req.headers("x-access-token")

    if(!token){
        res.send("Token needed")
    } else {
        jwt.verify(token, "jwt", (err, decoded) => {

            if(err){
                res.send({auth: false, message: "Auth failed"})
            } else {
                req.userId = decoded.id
                next()
            }

        })
    }
}

app.get("/isAuth", verifyJWT, (req, res) => {
    res.send("Authentication confirm")
})

app.post("/login", (req, res) => {

    const username = req.body.username
    const password = req.body.password

    db.query("SELECT * FROM account WHERE username = ?", [username], (err, result) => {
        if(err){

            console.log({err: err});
        } else {
            if(result.length > 0){
                if(result[0].password === password){
                    
                    const id = result[0].id
                    const token = jwt.sign({id}, "jwt", {expiresIn: 300,})

                    req.session.user = req.body.username
                    res.send({auth: true, token: token, result: result})
                } else{
                    res.send("Wrong Password")
                }
            } else {
                res.send("Username Not Found")
            }
        }
    })
})



app.post("/logout", (req, res) => {
    // req.session.user = undefined
    req.session.destroy()
    // req.session.destroy
})


app.post("/register", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query("SELECT * FROM account WHERE username = ?", [username], (err, result) => {
        if(err){
            console.log(err)
        } else {
            if(result.length > 0){
                res.send("Username already taken")
            } else {
                db.query("INSERT INTO account (username, password) VALUES (?, ?)", [username, password], (err, result) => {
                    if(err){
                        console.log(err)
                    } else {
                        res.send("Value Inserted")
                    }
                })
            }
        }
    })
})


app.listen(5000, () => {console.log("server is running!!!")})