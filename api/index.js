require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');

const app = express();

const db = require('./config/db');
const route = require('./routes')

db.connect();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(morgan('common'));
app.use(helmet());

route(app)

app.listen(port, ()=> console.log('Server is running!'));