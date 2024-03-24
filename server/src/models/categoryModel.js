const { model, Schema, Types: { ObjectId } } = require('mongoose');

const categorySchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        minlength: [3, "Title must at least 3 characters long"]
    },
    path: {
        type: String,
        unique: true,
        required: [true, 'Path is required'],
        minlength: [3, "Path must at least 3 characters long"]
    },
    owner: {
        type: ObjectId,
        required: [true, 'Owner is required'],
        ref: 'User'
    }
}, { timestamps: true });

const Category = model('Category', categorySchema);

module.exports = Category;
