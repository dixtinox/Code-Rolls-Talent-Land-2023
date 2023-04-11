const Diet = require("../models/diet");
const User = require("../models/user");
const statuses = require("../constants/statuses");
const validate = require("../validations/validations");

const algo = async (req, res) => {
  res.send("algo");
};

const createDiet = async (req, res) => {
  const { diet_name, user_id, diet_label, author } = req.body;
  if (!diet_name || !user_id ) {
    return res.status(statuses.MISSINGREQUIRED);
  }
  if (!validate.isObjectIdValid(user_id)) {
    return res.status(statuses.BADREQUEST).json();
  }
  const findUser = await User.findById(user_id);
  if (!findUser) {
    return res.status(statuses.NOTFOUND).json();
  }

  const newDiet = await Diet.create({
    user_id,
    diet_name,
    diet_label,
    author,
  })
  return res.status(statuses.CREATED).json(newDiet);
};

// const createMeal = async (req, res) => {
//     const { diet_id, meal_name, label, meal_time } = req.body;
//     if (!diet_name || !user_id ) {
//       return res.status(statuses.MISSINGREQUIRED);
//     }
//     if (!validate.isObjectIdValid(user_id)) {
//       return res.status(statuses.BADREQUEST).json();
//     }
//     const findUser = await User.findById(user_id);
//     if (!findUser) {
//       return res.status(statuses.NOTFOUND).json();
//     }
  
//     const newDiet = await Diet.create({
//       user_id,
//       diet_name,
//     })
//     return res.status(statuses.CREATED).json(newDiet);
//   };

module.exports = {
  algo,
  createDiet,
};
