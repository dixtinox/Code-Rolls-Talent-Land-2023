const User = require("../models/diet");
const statuses = require("../constants/statuses");
const EmailValidator = require("email-validator");

const algo = async (req, res) => {
    res.send("algo");
};

module.exports = algo;