//Server
require('dotenv').config();
const app = require('express')();
const port = process.env.PORT;
const mongoose = require('mongoose');
const connectDB = require('./src/config/dbConn');

connectDB();

app.get('/', (req, res) => {

    res.send('Hello World');

});

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(port, () => console.log(`Server running on port ${port}`));
});