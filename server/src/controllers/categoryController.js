const categoryController = require('express').Router();

const { isAuth } = require('../middlewares/authMiddleware');
const api = require('../services/categoryService');
const errorMapper = require('../util/errorMapper');

const isOwner = () => async (req, res, next) => {
    const id = req.params.id;
    const owner = req.user?._id;

    try {
        const result = await api.getOne(id);

        if (result.owner == owner) {
            req.category = result;

            next();
        }
    } catch (err) {
        res.status(404).json({ message: 'Category not found' });
    }
};

categoryController.get('/', async (req, res) => {
    try {
        const category = await api.getAll();

        res.status(200).json(category);
    } catch (err) {
        res.status(400).json({ message: 'Bad request' });
    }
});

categoryController.post('/', isAuth(), async (req, res) => {
    const newData = req.body;
    const owner = req.user._id;

    try {
        const result = await api.create({ ...newData, owner });
        res.status(200).json(result);
    } catch (err) {
        const message = errorMapper(err);
        res.status(400).json({ message });
    }
});

categoryController.put('/:id', isAuth(), isOwner(), async (req, res) => {
    const newData = req.body;
    const oldData = req.category;

    try {
        const result = await api.update(oldData._id, newData, oldData.owner);

        res.status(200).json(result);
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: 'Request error' });
    }
});

categoryController.delete('/:id', isAuth(), isOwner(), async (req, res) => {
    const categoryId = req.params.id;
    const ownerId = req.user._id;

    try {
        const result = await api.delete(categoryId, ownerId);

        res.json(result);
    } catch (err) {
        res.status(404).json({ message: 'Category not found' });
    }

});

module.exports = categoryController;
