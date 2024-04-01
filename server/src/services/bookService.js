const Book = require("../models/bookModel");
const User = require("../models/userModel");

exports.getAll = () => Book.find();

exports.getOne = (id) => Book.findById(id);

exports.getLast = (limit) => this.getAll().sort({ createdAt: -1 }).limit(limit);

exports.getOneDetailed = (id) => this.getOne(id).populate('owner', { password: 0 }).populate('category');

exports.getCategory = (categoryId) => Book.find({ category: categoryId }).sort({ createdAt: -1 });

exports.create = async (newData) => {
    const createdBook = await Book.create(newData);

    await User.findByIdAndUpdate(newData.owner, { $push: { createdBooks: createdBook._id } });

    return createdBook;
};

exports.update = (Id, newData, ownerId) =>
    Book.findByIdAndUpdate(Id, newData, { new: true, runValidators: true }).where("owner").equals(ownerId);

exports.delete = (Id, ownerId) => Book.findByIdAndDelete(Id).where("owner").equals(ownerId);

exports.bought = async (bookId, userId) => {
    const boughtBook = await Book.findByIdAndUpdate(bookId, { $push: { bought: userId }, sale: false }, { new: true, runValidators: true }).where("bought").ne(userId).where("owner").ne(userId);

    await User.findByIdAndUpdate(userId, { $push: { boughtBooks: boughtBook._id } });

    return boughtBook;
};

exports.search = ({ title, author, publisher, language, year, description }) => {
    const searchBooks = Book.find();
    const regex = (x) => new RegExp(x, "i");

    if (title) {
        searchBooks.find({ title: regex(title) });
    }
    if (author) {
        searchBooks.find({ author: regex(author) });
    }
    if (publisher) {
        searchBooks.find({ publisher: regex(publisher) });
    }
    if (language) {
        searchBooks.find({ language: regex(language) });
    }
    if (year) {
        searchBooks.find({ year });
    }
    if (description) {
        searchBooks.find({ description: regex(description) });
    }

    return searchBooks;
};
