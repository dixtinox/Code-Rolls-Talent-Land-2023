//Server
require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const mongoose = require('mongoose');
const connectDB = require('./src/config/dbConn');
const mainRouter = require('./src/routes/index')
const cors = require('cors');

const corsOptions = require('./src/config/corsOptions');

connectDB();

app.use(cors(corsOptions));
// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json 
app.use(express.json());
app.use('/', mainRouter )

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(port, () => console.log(`Server running on port ${port}`));
});