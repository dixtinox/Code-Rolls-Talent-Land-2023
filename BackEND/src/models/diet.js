const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mealSchema = new Schema({
  label: { type: String, required: true },
  meal_time: { type: String, required: true },
  options: [
    {
      name: { type: String, required: true },
      details: { type: String, required: true },
    },
  ],
});

const dietSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, required: true,  ref: "User",},
  diet_name: { type: String, required: true },
  diet_label: { type: String, required: true },
  author: { type: String },
  meals: [mealSchema],
});

module.exports = mongoose.model("Diet", dietSchema);
