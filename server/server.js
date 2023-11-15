//Import express
const express = require('express');

//Import controllers
const shopController = require('./controllers/shop_controller')
const produceController = require('./controllers/produce_controller')

//Create express router
const app = express();

//Create routes
app.use('/', shopController);
app.use('/produce', produceController);
app.use('/livestock', livestockController);
app.use('/supplies', suppliesController);
app.use('/product', productController);
app.use('/cart', cartController);
app.use('/login', loginController);

//test route for backend
app.get('/api', (req, res) =>{
    res.json({
        "produce": ["apple", "pear", "grapes"]
    });
});

const PORT = 8000; // backend routing port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});