const {schema, model} = require('mongoose');

const dietSchema = new schema({
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
        type: new schema({
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

model.exports = model('Diet', dietSchema);