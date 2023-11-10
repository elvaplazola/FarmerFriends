const express = require('express')
const app = express()

app.get('/api', (req, res) =>{
    res.json({
        "produce": ["apple", "pear", "grapes"]
    })
})

app.listen('8000', () => console.log('PORT at 8000'))