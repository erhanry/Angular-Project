const Book = require("../models/bookModel");

exports.getAll = () => Book.find();

exports.getOne = (id) => Book.findById(id);

exports.getLast = (limit) => this.getAll().sort({ createdAt: -1 }).limit(limit);

exports.getOneDetailed = (id) => this.getOne(id).populate('owner', { password: 0 }).populate('category');

// TODO
// exports.getCategory = (categoryId) => this.find({ category: categoryId }).sort({ createdAt: -1 });

exports.create = (newData) => Book.create(newData);

exports.update = (Id, newData, ownerId) =>
    Book.findByIdAndUpdate(Id, newData, { new: true, runValidators: true }).where("owner").equals(ownerId);

exports.delete = (Id, ownerId) => Book.findByIdAndDelete(Id).where("owner").equals(ownerId);

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
