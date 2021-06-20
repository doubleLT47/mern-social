const express = require('express');
const router = express.Router();

const controller = require('../controllers/post.controller')

router.get('/', (req,res) => {
    res.send("welcome!")
})

module.exports = router
