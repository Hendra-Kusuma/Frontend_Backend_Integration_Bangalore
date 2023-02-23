const Product = require('../models/models.js')

const getUser = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products)
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
}  

const getUserById = async (req, res) => {
    try {
        const products = await Product.findById();
        res.json(products);
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}   

const saveUser = async (req, res) => {
    const products = new Product(req.body);
    try {
        const insertedProduct = await products.save();
        res.status(201).json(insertedProduct)
    } catch (error) {
        res.status(400).json({ message: error.message})
    }
}   

const updateUser = async (req, res) => {
    try {
        const updatedProduct = await Product.updateOne({
            _id: req.params.id,
        }
        { $set: req.body}
    );
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message})
    }
};

const deleteUser = async (req, res) => {
    try {
        const deletedProduct = await Product.deleteOne({
            _id: req.params.id,
        });
        res.status(200).json(deletedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message})
    }
};

module.exports = {
    getUser,
    getUserById,
    saveUser,
    updateUser,
    deleteUser
}