const Category = require("../models/categoryModel");

exports.create = (newData) => Category.create(newData);

exports.getAll = () => Category.find();

exports.update = (Id, newData, ownerId) =>
    Category.findByIdAndUpdate(Id, newData, { new: true, runValidators: true }).where("owner").equals(ownerId);

exports.delete = (Id, ownerId) => Category.findByIdAndDelete(Id).where("owner").equals(ownerId);
