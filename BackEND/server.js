//Server
require('dotenv').config();
const app = require('express')();
const port = process.env.PORT;
const mongoose = require('mongoose');
const connectDB = require('./src/config/dbConn');
const mainRouter = require('./src/routes/index')

connectDB();

app.use('/', mainRouter )

// app.get('/', (req, res) => {

//     res.send('Hello World');

// });

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(port, () => console.log(`Server running on port ${port}`));
});