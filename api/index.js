const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const dotenv = require('dotenv');
const helmet = require('helmet');

dotenv.config();
const app = express();

const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log('Server is running!'));