const User = require("../models/user");
const statuses = require("../constants/statuses");
const validate = require("../validations/validations");
const { differenceInDays } = require("date-fns");

//globals for points
const dailySinglePoints = 1;
const perfectDayPoints = 5;
const perfectWeekPoints = 20;

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

const IsPerfectWeek = (user) => {
  const sum = user.objectives.reduce((total, obj) => total + obj.perfectDay, 0);
  if (sum == 7) {
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
    user.objectives.forEach((obj) => {
      obj.drinkWater = false;
      obj.followDiet = false;
      obj.exercise = false;
      obj.perfectDay = 0;
    });
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

  if (user.objectives[differenceToday].followDiet == true) {
    return res.status(statuses.BADREQUEST).json();
  }

  //set to true the daily objective and add points
  let perfectDayVal = 0;
  let sumPoints = dailySinglePoints;
  user.objectives[differenceToday].followDiet = true;

  //check for peerfect day and week bonus

  if (IsPerfectDay(user, differenceToday)) {
    sumPoints = sumPoints + perfectDayPoints;
    perfectDayVal = 1;
    user.objectives[differenceToday].perfectDay = perfectDayVal;
  }

  if (IsPerfectWeek(user)) {
    sumPoints = sumPoints + perfectWeekPoints;
  }

  //save user with points and accomplished objectives
  user.nutriPoints = user.nutriPoints + sumPoints;
  user.perfectDays = user.perfectDays + perfectDayVal;

  const changedUser = await user.save();
  return res.status(statuses.OK).json(changedUser);
};

const CompleteDailyStreakDrink = async (req, res) => {
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
  if (user.objectives[differenceToday].drinkWater == true) {
    return res.status(statuses.BADREQUEST).json();
  }

  //set to true the daily objective and add points
  let perfectDayVal = 0;
  let sumPoints = dailySinglePoints;
  user.objectives[differenceToday].drinkWater = true;

  //check for peerfect day and week bonus

  if (IsPerfectDay(user, differenceToday)) {
    sumPoints = sumPoints + perfectDayPoints;
    perfectDayVal = 1;
    user.objectives[differenceToday].perfectDay = perfectDayVal;
  }

  if (IsPerfectWeek(user)) {
    sumPoints = sumPoints + perfectWeekPoints;
  }

  //save user with points and accomplished objectives
  user.nutriPoints = user.nutriPoints + sumPoints;
  user.perfectDays = user.perfectDays + perfectDayVal;

  const changedUser = await user.save();
  return res.status(statuses.OK).json(changedUser);
};

const CompleteDailyStreakExcercise = async (req, res) => {
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
  if (user.objectives[differenceToday].exercise == true) {
    return res.status(statuses.BADREQUEST).json();
  }
//set to true the daily objective and add points
let perfectDayVal = 0;
let sumPoints = dailySinglePoints;
user.objectives[differenceToday].exercise = true;

//check for peerfect day and week bonus

if (IsPerfectDay(user, differenceToday)) {
  sumPoints = sumPoints + perfectDayPoints;
  perfectDayVal = 1;
  user.objectives[differenceToday].perfectDay = perfectDayVal;
}

if (IsPerfectWeek(user)) {
  sumPoints = sumPoints + perfectWeekPoints;
}

//save user with points and accomplished objectives
user.nutriPoints = user.nutriPoints + sumPoints;
user.perfectDays = user.perfectDays + perfectDayVal;

const changedUser = await user.save();
return res.status(statuses.OK).json(changedUser);
};

const GetIMC = async (req, res) => {};

const GetIdealWeight = async (req, res) => {};

module.exports = {
  CheckDailyStreak,
  CompleteDailyStreakFollowDiet,
  CompleteDailyStreakDrink,
  CompleteDailyStreakExcercise,
};
