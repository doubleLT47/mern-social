const express = require('express');
const router = express.Router();

const controller = require('../controllers/post.controller')

//create a post
router.post('/', controller.handleCreatePost)

//update a post
router.put('/:id', controller.handleUpdatePost)

//delete a post
router.delete('/:id', controller.handleDeletePost)

//like a post
router.put('/:id/like', controller.handleLikePost)

//get a post
router.get('/:id', controller.handleGetPost)

//get all posts
router.get('/timeline/:userId', controller.handleGetAllPost)

module.exports = router