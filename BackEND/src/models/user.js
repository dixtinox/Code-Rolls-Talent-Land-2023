const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const objectiveSchema = new Schema({
  dayNumber: { type: Number },
  drinkWater: { type: Boolean, default: false },
  followDiet: { type: Boolean, default: false },
  exercise: { type: Boolean, default: false },
  perfectDay: { type: Boolean, default: false },
}, { _id: false });

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: true,
    index: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  birthDate: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  weight: { type: Number },
  height: { type: Number },
  perfectDays: { type: Number },
  initialStreakDay: { type: Date, default: Date.now() },
  objectives: {
    type: [objectiveSchema],
    default: [
      {dayNumber: 0,},{dayNumber: 1,},{dayNumber: 2,},{dayNumber: 3,},
      {dayNumber: 4,},{dayNumber: 5,},{dayNumber: 6,},
    ],
  },
  healthHistory: {
    _id: false,
    type: new Schema({
      familyDiseases: String,
      pastDiseases: String,
      currentDiseases: String,
      currentMedications: String,
      habits: String,
    }),
  },
});

module.exports = mongoose.model("User", userSchema);
