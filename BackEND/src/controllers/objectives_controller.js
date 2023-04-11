const User = require("../models/user");
const statuses = require("../constants/statuses");
const validate = require("../validations/validations");
const { differenceInDays } = require("date-fns");

const IsPerfectDay = (user, dayNum) => {
  if (
    user.objectives[dayNum].drinkWater &&
    user.objectives[dayNum].followDiet &&
    user.objectives[dayNum].exercise
  ) {
    return true;
  }
  return false;
};

const CheckDailyStreak = async (req, res) => {
  const { user_id } = req.body;
  if (!user_id) {
    return res.status(statuses.MISSINGREQUIRED);
  }
  if (!validate.isObjectIdValid(user_id)) {
    return res.status(statuses.BADREQUEST).json();
  }
  let user = await User.findById(user_id).select("-password");
  if (!user) {
    return res.status(statuses.NOTFOUND).json();
  }

  //check if 7 or more days have passed to restart initial day streak

  const today = Date.now();
  const initialStreak = user.initialStreakDay;
  let differenceToday = differenceInDays(today, initialStreak);

  if (differenceToday >= 7) {
    differenceToday = 0;
    user.initialStreakDay = Date.now();
    user = await user.save();
  }
  const response = {
    user,
    currentDay: differenceToday,
  };

  return res.status(statuses.OK).json(response);
};

const CompleteDailyStreakFollowDiet = async (req, res) => {
  const { user_id } = req.body;
  if (!user_id) {
    return res.status(statuses.MISSINGREQUIRED);
  }
  if (!validate.isObjectIdValid(user_id)) {
    return res.status(statuses.BADREQUEST).json();
  }
  let user = await User.findById(user_id).select("-password");
  if (!user) {
    return res.status(statuses.NOTFOUND).json();
  }

  //check the number of days away from the initial streak day

  const today = Date.now();
  const initialStreak = user.initialStreakDay;
  let differenceToday = differenceInDays(today, initialStreak);

  if (differenceToday >= 7) {
    return res.status(statuses.BADREQUEST).json();
  }

  user.objectives[differenceToday].followDiet = true;
  user.objectives[differenceToday].perfectDay = IsPerfectDay(user,differenceToday)

  const changedUser = await user.save();
  return res.status(statuses.OK).json(changedUser);
};

const CompleteDailyStreakDrink = async (req, res) => {};

const CompleteDailyStreakExcercise = async (req, res) => {};

const GetIMC = async (req, res) => {};

const GetIdealWeight = async (req, res) => {};

module.exports = {
  CheckDailyStreak,
  CompleteDailyStreakFollowDiet,
  CompleteDailyStreakDrink,
  CompleteDailyStreakExcercise,
};
