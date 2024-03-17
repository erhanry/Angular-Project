const { sign, verify } = require('../lib/jsonwebtoken');
const User = require('../models/userModel');

const blacklist = new Set();
const JWT_SECRET = 't gcsergcserg  b920n3w4dzfgadf@#ffcawert6v9';

exports.register = async (userData) => {
    if (userData.password !== userData.confirmPassword) {
        throw new Error("Password don't math");
    }

    // check if email is taken confirmPassword
    const existing = await User.findOne({ email: new RegExp(`^${userData.email}$`, 'i') });

    if (existing) {
        throw new Error('Email already exists');
    }

    const createdUser = await User.create(userData);

    const token = await createSession(createdUser);

    return token;
};

exports.login = async ({ email, password }) => {
    // check if user exists
    const user = await User.findOne({ email: new RegExp(`^${email}$`, 'i') });

    if (!user || !password) {
        throw new Error('Email or password is invalid');
    }

    // Check if password is valid
    const isValid = await user.validatePassword(password);

    if (!isValid) {
        throw new Error('Email or password is invalid');
    }

    const token = await createSession(user);

    return token;
};

exports.logout = async (token) => {
    blacklist.add(token);
};

async function createSession(user) {
    const payload = {
        _id: user._id,
        email: user.email
    };

    const accessToken = await sign(payload, JWT_SECRET, { expiresIn: '2h' });

    return Object.assign(payload, { accessToken });
}

exports.getProfile = (id) =>
    User.findById(id).select('-password').populate('createdBooks');


exports.validateToken = async (accessToken) => {
    if (blacklist.has(accessToken)) {
        throw new Error('Token is blacklisted');
    }
    return await verify(accessToken, JWT_SECRET);
};
