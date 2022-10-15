const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log("I heard a sound ")
    res.json({ 
        username: 'Aw shucks',
        dont: "dont",
        wont: "yo",
        sumpinL: 123,
        LOL: 'åß',
    })
})

app.listen(port, () => {
    console.log("I'm listening on port " + port)
})
