const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
  streak: { type: Number },
  objectives: {
    type: new Schema({ name: String, lastDayReached: Date, count: Number }),
    default: {
        name: "Beber agua",
        lastDayReached: Date.now(),
        count: 0,
    }
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
