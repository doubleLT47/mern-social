const express = require('express');
const router = express.Router();

const controller = require('../controllers/conversation.controller');

router.post('/', controller.createNewConversation);
router.get('/:userId', controller.getAllUserConversations);
router.get('/find/:firstUserId/:secondUserId', controller.getConversationOfGroup)


module.exports = router