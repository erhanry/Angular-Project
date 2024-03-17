const userController = require('express').Router();

const { isAuth } = require('../middlewares/authMiddleware');
const api = require('../services/userService');
const errorMapper = require('../util/errorMapper');

userController.post('/register', async (req, res) => {
    const userData = req.body;

    try {
        const accessToken = await api.register(userData);

        res.status(201).json(accessToken);
    } catch (err) {
        const message = errorMapper(err);
        res.status(400).json({ message });
    }
});

userController.post('/login', async (req, res) => {
    const userData = req.body;

    try {
        const accessToken = await api.login(userData);

        res.status(200).json(accessToken);
    } catch (err) {
        const message = errorMapper(err);
        res.status(401).json({ message });
    }
});

userController.get('/profile', isAuth(), async (req, res) => {
    const owner = req.user._id;

    try {
        const userData = await api.getProfile(owner);

        res.status(200).json(userData);
    } catch (err) {
        const message = errorMapper(err);
        res.status(401).json({ message });
    }
});

userController.get('/logout', (req, res) => {
    api.logout(req.user.token);
    res.status(204).end();
});

module.exports = userController;
