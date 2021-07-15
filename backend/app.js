const express = require('express');
const errorHandler = require('./middleware/error');
const cors = require('cors')
const mongoose = require('mongoose');

const app = express();
require('dotenv').config();

app.use(express.json());
const router = require('./routes/');
app.use(cors());
const port = process.env.PORT || 3000;

// mongoDB connection
mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    console.log('suceesfully connected');
}).catch((err) => {
    console.log('error in data base connection')
})
app.use('/api/', router);


app.use(errorHandler);
app.listen(port, () => {
    console.log('Listening on port', port);
});