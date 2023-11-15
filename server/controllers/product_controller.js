const express = require('express');
const db = require('')
const product = express.Router();
const { Product } = db

product.get('/product', (req, res) => {
    const { productId = '' } = req.query;
    try{
        const foundProducts = await Product.findAll({
            order: [[ 'product_id', 'ASC'], [ 'product_name', 'ASC']],
            where: {
                product_name: {
                    [Op.iLike] : `%${product_name}%`
                }
            }
        });
        console.log('displaying products', foundProducts);
        res.status(200).json(foundUsers);
    } catch (e) {
        console.log('Error', e);
        res.status(500).json(e);
    }
});

product.get()
