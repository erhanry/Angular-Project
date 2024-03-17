const { model, Schema, Types: { ObjectId } } = require('mongoose');

const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10;

const userSchema = new Schema({
    firstName: {
        type: String,
        minLength: [2, "First name must be at least 2 character long"],
        required: [true, 'First name is required']
    },
    lastName: {
        type: String,
        minLength: [2, "Laast name must be at least 2 character long"],
        required: [true, 'Last name is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        match: [/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z]+$/, "Invalid Email Address"],
        lowercase: true,
        unique: true,
    },
    password: {
        type: String,
        minLength: [6, "Password must be at least 6 character long"],
        required: [true, 'Password is required'],
    },
    createdBooks: [{
        type: ObjectId,
        ref: 'Book',
    }],
}, { timestamps: true });

// hash password
userSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
});

userSchema.method('validatePassword', function (password) {
    return bcrypt.compare(password, this.password);
});

const User = model('User', userSchema);

module.exports = User;

