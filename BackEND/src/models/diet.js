const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const dietSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    diet_name: {
        type: String,
        required: true,
        trim: true,
    },
    diet_label: {
        type: String,
        trim: true,
    },
    author: {
        type: String,
        trim: true,
    },
    meal:[{
        type: new Schema({
            label:{
                type: String
            },
            name:{
                type: String
            },
            meal_time:{
                type: String
            },
            details:{
                type: String
            }
        }),
    }]
       
    
});

module.exports = mongoose.model('Diet', dietSchema);