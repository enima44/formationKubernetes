const express = require('express')
const os = require('os')
const app = express()

const mysql = require('mysql')

const db = mysql.createConnection({
    host: "nom_du_service",
    user: '',
    password : ''
})

app.get('/', (req, res) => {
    db.connect((err) => {
    })
    res.end("Hello from our pod "+ os.hostname());
})

app.listen(3000, () => {

})