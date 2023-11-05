const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

app.get('/getPost', (req, res) => {
    res.send('Hello World!')
})

app.listen('5000', () => console.log('PORT at 5000'))