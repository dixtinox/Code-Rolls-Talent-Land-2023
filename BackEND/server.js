//Server
require('dotenv').config();
const app = require('express')();
const port = process.env.PORT;
const mongoose = require('mongoose');
const connectDB = require('./src/config/dbConn');
const mainRouter = require('./src/routes/index')
const cors = require('cors');

const corsOptions = require('./src/config/corsOptions');

connectDB();

app.use(cors(corsOptions));
app.use('/', mainRouter )

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(port, () => console.log(`Server running on port ${port}`));
});