const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const keys = require('./config/keys');
const user = require('./models/user');
require('./services/passport');

mogoose.connect(keys.mongoURI);
const app = express();
authRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
