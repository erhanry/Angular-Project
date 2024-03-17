const { promisify } = require("util");
const jwt = require("jsonwebtoken");

const sign = promisify(jwt.sign);
const verify = promisify(jwt.verify);

module.exports = {
    sign,
    verify,
};
