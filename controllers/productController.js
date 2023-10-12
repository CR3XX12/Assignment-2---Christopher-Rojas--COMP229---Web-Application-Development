const Product = require('../models/Product')

// Controller functions for CRUD operations
const createProduct = async (req, res) => {
    const body = req.body;

    Product.create(body).then(result => {
        res.json({ success: true })
    })
};

const getProducts = async (req, res) => {
    var keyword = req.query.name;

    if (keyword == null) {
        Product.find({}).then(result => {
            res.json({ result })
    
        })
    }
    else {
        try {
            keyword = keyword.replace('[','').replace(']','').trim();
            const products = await Product.find({
                name: { $regex: keyword, $options: 'i' }
            });
            
            res.status(200).json(products);
        }
        catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Server error while fetching products.' });
        }
    }
};





const getProductById = async (req, res) => {
    const params = req.params;

    Product.find({ _id: params.id }).then(result => {
        res.json(result)
    })
};

const updateProduct = async (req, res) => {
    const body = req.body;
    const id = req.params.id

    Product.updateOne({ _id: id }, body).then(result => {
        res.json(result)
    }).catch(err => {
        console.error(err)
        res.json({ error: true })
    })
};

const deleteProduct = async (req, res) => {
    const id = req.params.id;


    Product.deleteOne({ _id: id }).then(result => {
        res.json(result)
    })
};

module.exports = {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
};
