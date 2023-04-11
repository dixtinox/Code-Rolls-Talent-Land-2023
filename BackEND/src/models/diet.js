const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const dietSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    user_id: {
        type: Number,
        required: true
    },
    meal_name: {
        type: String,
        required: true
    },
    meal:{
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
    }
       
    
});

module.exports = mongoose.model('Diet', dietSchema);