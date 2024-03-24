const bookController = require('express').Router();

const { isAuth } = require('../middlewares/authMiddleware');
const api = require('../services/bookService');
const errorMapper = require('../util/errorMapper');

const isOwner = () => async (req, res, next) => {
    const id = req.params.id;
    const owner = req.user?._id;

    try {
        const result = await api.getOne(id);

        if (result.owner == owner) {
            req.book = result;
            next();
        }
    } catch (err) {
        res.status(404).json({ message: 'Book not found' });
    }
};

bookController.get('/', async (req, res) => {
    try {
        const books = await api.getAll();

        res.status(200).json(books);
    } catch (err) {
        res.status(400).json({ message: 'Bad request' });
    }
});

bookController.post('/', isAuth(), async (req, res) => {
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

bookController.get("/search", async (req, res) => {
    const searchParam = req.query;

    try {
        const result = await api.search(searchParam);

        res.status(200).json(result);
    } catch (err) {
        res.status(404).json({ message: 'Book not found' });

    }

});

bookController.get('/last/:limit', async (req, res) => {
    const limit = req.params.limit;

    try {
        const result = await api.getLast(limit);

        res.status(200).json(result);
    } catch (err) {
        res.status(404).json({ message: 'Book not found' });

    }
});

bookController.get('/:id/details', async (req, res) => {
    const id = req.params.id;

    try {
        const result = await api.getOneDetailed(id);

        res.status(200).json(result);
    } catch (err) {
        res.status(404).json({ message: 'Book not found' });

    }
});

bookController.get('/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const result = await api.getOne(id);

        res.status(200).json(result);
    } catch (err) {
        res.status(404).json({ message: 'Book not found' });

    }
});

bookController.get('/category/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const result = await api.getCategory(id);
        console.log(id);
        res.status(200).json(result);
    } catch (err) {
        res.status(404).json({ message: 'Book not found' });

    }
});

bookController.put('/:id', isAuth(), isOwner(), async (req, res) => {
    const newData = req.body;
    const oldData = req.book;

    try {
        const result = await api.update(oldData._id, newData, oldData.owner);

        res.status(200).json(result);
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: 'Request error' });
    }
});

bookController.delete('/:id', isAuth(), isOwner(), async (req, res) => {
    const bookId = req.params.id;
    const ownerId = req.user._id;

    try {
        const result = await api.delete(bookId, ownerId);

        res.json(result);
    } catch (err) {
        res.status(404).json({ message: 'Book not found' });
    }

});

module.exports = bookController;
