const mongoose = require("mongoose");
const User = require("../models/user");
const statuses = require("../constants/statuses");
const EmailValidator = require("email-validator");
const validate = require("../validations/validations");

const Update = async (req, res) => {
  const {
    id,
    name,
    email,
    password,
    birthDate,
    gender,
    weight,
    height,
    healthHistory,
  } = req.body;

  if (!id || !name || !email || !birthDate || !gender) {
    return res.status(statuses.MISSINGREQUIRED);
  }
  if (!email || !EmailValidator.validate(email)) {
    return res.status(statuses.BADEMAIL).json();
  }
  if (!validate.isvalidatGender(gender)) {
    return res.status(statuses.BADGENDER).json();
  }
  const checkUser = await User.findOne({ email: email });
  if (!checkUser) {
    return res.status(statuses.NOTFOUND).json();
  }

  const newUser = await User.findByIdAndUpdate(
    { _id: id },
    {
      $set: {
        name,
        email,
        password,
        birthDate,
        gender,
        weight,
        height,
        healthHistory,
      },
    },
    { new: true }
  );

  return res.status(statuses.CREATED).json(newUser);
};

module.exports = {
  Update,
};
