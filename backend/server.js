import express from "express"
import mysql from "mysql"
import cors from "cors"

const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'loto'
})

app.use(express.json());
app.use(cors())

app.get('/', (req, res)=>{
    res.json("hello it is backend");
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

    db.query(q, [values], (err, data)=>{
        if(err) return res.json(err)
        return res.json("Data was successfully added")
    })
})

// Start the server
app.listen(8800, () => {
  console.log('Server was started');
});