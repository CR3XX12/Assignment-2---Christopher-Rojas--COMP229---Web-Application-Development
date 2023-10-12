const Categories = require('../models/Categories')

// Controller functions for CRUD operations
const createCategories = async (req, res) => {
    const body = req.body;

    Categories.create(body).then(result => {
        res.json({ success: true })
    })
};

const getCategories = async (req, res) => {
    Categories.find({}).then(result => {
        res.json({ result })

    })
};

const getCategoriesById = async (req, res) => {
    const params = req.params;

    Categories.find({ _id: params.id }).then(result => {
        res.json(result)
    })
};

const updateCategories = async (req, res) => {
    const body = req.body;
    const id = req.params.id

    Categories.updateOne({ _id: id }, body).then(result => {
        res.json(result)
    }).catch(err => {
        console.error(err)
        res.json({ error: true })
    })
};

const deleteCategories = async (req, res) => {
    const id = req.params.id;


    Categories.deleteOne({ _id: id }).then(result => {
        res.json(result)
    })
};

module.exports = {
    createCategories,
    getCategories,
    getCategoriesById,
    updateCategories,
    deleteCategories,
};
