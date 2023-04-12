const mongoose = require('mongoose');
const db_uri = process.env.DATABASE_URI

const connectDB = async () => {
    try {
        await mongoose.connect(db_uri, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
    } catch (err) {
        console.error(err);
    }
}

module.exports = connectDB