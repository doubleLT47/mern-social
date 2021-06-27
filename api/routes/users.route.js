const express = require('express');
const router = express.Router();

const controller = require('../controllers/users.controller')

//update user
router.put('/:id', controller.handleUpdateUser);
//delete user
router.delete('/:id', controller.handleDeleteUser);
//get a user
router.get('/', controller.handleGetUser);
//get friends
router.get('/friends/:userId', controller.handleGetFriends)
//follow a user
router.put('/:id/follow', controller.handleFollowUser)
//un follow a user
router.put('/:id/unfollow', controller.handleUnFollowUser)
module.exports = router
