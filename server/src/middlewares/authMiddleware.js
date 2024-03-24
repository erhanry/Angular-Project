const { validateToken } = require('../services/userService');

exports.authMiddleware = () => async (req, res, next) => {
    const accessToken = req.headers['x-authorization'];

    if (accessToken) {
        try {
            const payload = await validateToken(accessToken);

            req.user = {
                _id: payload._id,
                email: payload.email,
                accessToken

            };
        } catch (err) {
            return res.status(401).json({ message: 'Invalid access token. Please log in' });
        }
    }

    next();
};

exports.isAuth = () => (req, res, next) => {
    if (req.user) {
        next();
    } else {
        res.status(401).json({ message: 'You are not authorized' });
    }
};
