const express = require('express');
const produceController = require ('./controllers/produce_controller');

const app = express();
app.use('/', produceController);

app.get('/api', (req, res) =>{
    res.json({
        "produce": ["apple", "pear", "grapes"]
    });
});

const PORT = 8000; // backend routing port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});