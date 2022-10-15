const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log("I heard a sound ")
    res.send("Hello world")
})

app.listen(port, () => {
    console.log("I'm listening on port " + port)
})
