import express from "express"
import mysql from "mysql"
import cors from "cors"
import session from 'express-session';

const app = express();


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'loto'
})

app.use(express.json());
app.use(cors())

const oneDay = 1000 * 60 * 60 * 24;

var sess;

app.use(session({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false
  }));

app.get('/', (req, res)=>{
    res.json("hello it is backend");
})

app.get('/api', (req, res) => {
    console.log(req.session);
    console.log(sess);
    if(sess == undefined)
        return res.json({});
    if(sess.flag != "undefined")
    return res.json({authenticated: sess.flag, username: sess.username})
    return res.json({});
    
});

app.post('/api/user', (req, res) =>{
    console.log(req.body.stat);
    req.session.username = req.body.username;
    req.session.flag = req.body.stat;
    sess = req.session
    console.log(sess);

    res.json({ success: req.body.stat });
})

app.get('/users', (req, res) =>{
    const q = "SELECT * FROM users";
    db.query(q, (err, data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.post("/users", (req, res)=>{
    const q = "INSERT INTO users (`user_name`, `password`, `wallet`) VALUES (?)"
    const values = [
        req.body.username,
        req.body.password,
        req.body.wallet,
    ];

    console.log(req);
    db.query(q, [values], (err, data)=>{
        if(err) return res.json(err)
        return res.json("Data was successfully added")
    })
})

// Start the server
app.listen(8800, () => {
  console.log('Server was started');
});