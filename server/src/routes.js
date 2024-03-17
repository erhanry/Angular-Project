const router = require('express').Router();

const categoryController = require('./controllers/categoryController');
const bookController = require('./controllers/bookController');
const userController = require('./controllers/userController');

router.get('/', (req, res) => res.json({ message: 'RESTful services it\'s working!' }));

router.use('/api/category', categoryController);
router.use('/api/books', bookController);
router.use('/api/users', userController);

router.all('*', (req, res) => res.status(404).json({ message: 'Resource not found' }));

module.exports = router;
