const express = require('express')
const app = express()

const PORT = 8080
const HOST = '0.0.0.0'

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile('index.html')
})

app.listen(PORT, HOST)
console.log(`server running on ${HOST}:${PORT}`)
