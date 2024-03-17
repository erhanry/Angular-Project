const { model, Schema, Types: { ObjectId } } = require('mongoose');

const IMAGE_PATTERN = /^https?:\/\/.*\/.*\.(png|jpeg|jpg)$/i;

const bookSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        minlength: [3, "Title must at least 3 characters long"]
    },
    author: {
        type: String,
        required: [true, 'Author is required'],
        minlength: [3, "Author must at least 3 characters long"]
    },
    publisher: {
        type: String,
        required: [true, 'Publisher is required'],
        minlength: [3, "Publisher must at least 3 characters long"]
    },
    language: {
        type: String,
        required: [true, 'Language is required'],
    },
    year: {
        type: Number,
        min: [1950, 'Year must be between 1950 and 2050'],
        max: [2050, 'Year must be between 1950 and 2050'],
    },
    category: {
        type: ObjectId,
        required: [true, 'Category is required'],
        ref: 'Category'
    },
    price: {
        type: Number,
        min: [0.01, 'Price must be a positive number']
    },
    imgUrl: {
        type: String,
        validate: {
            validator: (value) => IMAGE_PATTERN.test(value),
            message: (props) => {
                return `${props.value} is not a valid image URL`;
            }
        }
    },
    sale: {
        type: Boolean,
        default: false
    },
    news: {
        type: Boolean,
        default: false
    },
    description: {
        type: String,
        minlength: [10, "Description must at least 10 characters long"],
        maxlength: [1000, "Description accepts a maximum of 1000 characters"],
    },
    owner: {
        type: ObjectId,
        required: [true, 'Owner is required'],
        ref: 'User'
    }
}, { timestamps: true });

const Book = model('Book', bookSchema);

module.exports = Book;
