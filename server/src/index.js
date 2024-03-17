const path = require('path');

const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');
const { corsMiddleware } = require('./middlewares/corsMiddleware');
const { authMiddleware } = require('./middlewares/authMiddleware');

const APP_PORT = 3000;
const DB_URL = 'mongodb://localhost:27017/bookstore';

async function start() {
    try {
        await mongoose.connect(DB_URL);
    } catch (err) {
        console.log('Error connecting to database');
        return process.exit(1);
    }

    // Local Variables
    const app = express();

    // Middlewares
    app.use(express.static(path.resolve(__dirname, 'public')));
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use(corsMiddleware());
    app.use(authMiddleware());

    // Routes
    app.use(routes);

    app.listen(APP_PORT, () => console.log(`REST Service started on port http://localhost:${APP_PORT}`));
}

start();

mongoose.connection.on("connected", () => console.log('Successfully connected to the database!'));
mongoose.connection.on("disconnected", () => console.log('DB is disconnected!'));
