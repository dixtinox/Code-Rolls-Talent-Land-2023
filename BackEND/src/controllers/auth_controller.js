const User = require("../models/user");
const statuses = require("../constants/statuses");
const EmailValidator = require("email-validator");

const singin = async (req, res) => {
    console.log(req.body);
    res.status(statuses.CREATED).json({name: "juan"})
//   const {
//     name,
//     email,
//     password,
//     birthDate,
//     gender,
//     weight,
//     height,
//     healthHistory,
//   } = req.body;

//   if (!name || !email || !password || !birthDate || !gender) {
//     return res.status(statuses.MISSINGREQUIRED);
//   }
//   if (!email || !EmailValidator.validate(email)) {
//     return res.status(statuses.BADEMAIL).json();
//   }
//   const checkUser = await User.findOne({ email: email });
//   if (checkUser) {
//     res.status(statuses.DUPLICATED).json();
//   }

//   const newUser = await User.create({
//     name,
//     email,
//     password,
//     birthDate,
//     gender,
//     weight,
//     height,
//     healthHistory,
//   });
};


module.exports = {
    singin,
}
