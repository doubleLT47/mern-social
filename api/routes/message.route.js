const express = require("express");
const router = express.Router();

const controller = require("../controllers/message.controller")

router.post('/', controller.handleNewMessage);

router.get('/:conversationId', controller.handleGetAllMessages);

module.exports = router
