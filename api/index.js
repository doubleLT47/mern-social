require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const helmet = require('helmet');
const multer = require('multer');
const path = require('path');

const app = express();

const db = require('./config/db');
const route = require('./routes')

db.connect();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({
    extended: false
}));
app.use(morgan('common'));
app.use(helmet());
app.use("/images", express.static(path.join(__dirname, "public/images")))

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images")
    },
    filename: (req, file, cb) => {
            cb(null,req.body.name);
    }
})

const upload = multer({storage});
app.post('/api/upload', upload.single("file"), (req, res) => {
    try {
        return res.status(200).json("file uploader successfully!");
    }
    catch (err) {
        return res.status(500).json("file uploader failed!");
    }
})

route(app)

app.listen(port, ()=> console.log('Server is running!'));