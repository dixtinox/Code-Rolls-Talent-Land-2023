const User = require("../models/user");
const statuses = require("../constants/statuses");
const EmailValidator = require("email-validator");

const singin = async (req, res) => {
  const {
    name,
    email,
    password,
    birthDate,
    gender,
    weight,
    height,
    healthHistory,
  } = req.body;

  if (!name || !email || !password || !birthDate || !gender) {
    return res.status(statuses.MISSINGREQUIRED);
  }
  if (!email || !EmailValidator.validate(email)) {
    return res.status(statuses.BADEMAIL).json();
  }
  const checkUser = await User.findOne({ email: email });
  if (checkUser) {
    return res.status(statuses.DUPLICATED).json();
  }

  const newUser = await User.create({
    name,
    email,
    password,
    birthDate,
    gender,
    weight,
    height,
    healthHistory,
  });

  return res.status(statuses.CREATED).json(newUser);
};

const login = async (req, res) => {
    const {
      email,
      password,
    } = req.body;

    if ( !email || !password) {
      return res.status(statuses.MISSINGREQUIRED);
    }
    if (!email || !EmailValidator.validate(email)) {
      return res.status(statuses.BADEMAIL).json();
    }
    const checkUser = await User.findOne({ email: email, password:password });
    if (!checkUser) {
      return res.status(statuses.NOTFOUND).json();
    }
    return res.status(statuses.OK).json(checkUser);
  };

module.exports = {
    singin,
    login,
}
