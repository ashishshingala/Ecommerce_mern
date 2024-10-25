const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoute = require('./routes/userRoute')
require('dotenv').config();
require('./database/index')


const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());




app.use('/api/user', userRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
