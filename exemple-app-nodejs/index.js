const express = require('express')
const os = require('os')
const app = express()

app.get('/', (req, res) => {
    res.end("Hello from our pod "+ os.hostname());
})

app.listen(3000, () => {
    
})