
const Post = require('../models/Post');
const User = require('../models/User');

//create a post
module.exports.handleCreatePost = async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();

        res.status(200).json(savedPost)
    }
    catch (err) {
        res.status(500).json(err)
    }
}

//update a post
module.exports.handleUpdatePost = async (req, res) => {
    try {
        console.log("asdsdas")
        const post = await Post.findById(req.params.id);

        if (post.userId === req.body.userId) {
            await post.updateOne({ $set: req.body});

            res.status(200).json("The post has been updated!");
        }
        else {
            res.status(403).json("You can update only your posts!");
        }
    }
    catch (err) {
        res.status(500).json(err);
    }
}

//delete a post
module.exports.handleDeletePost = async (req, res) => {
 try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.deleteOne();
      res.status(200).json("the post has been deleted");
    } else {
      res.status(403).json("you can delete only your post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
}

//like a post/ dislike a post
module.exports.handleLikePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post.likes.includes(req.body.userId)) {
          await post.updateOne({ $push: { likes: req.body.userId } });
          res.status(200).json("The post has been liked");
        } else {
          await post.updateOne({ $pull: { likes: req.body.userId } });
          res.status(200).json("The post has been disliked");
        }
      } catch (err) {
        res.status(500).json(err);
      }
}

//get a post
module.exports.handleGetPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
      } catch (err) {
        res.status(500).json(err);
      }
}

//get user's all posts
module.exports.handleGetAllPostOfUser = async (req, res) => {
  try {
    const user = await User.findOne({username: req.params.username})
      const posts = await Post.find({userId: user._id})
      res.status(200).json(posts)
    } catch (err) {
      res.status(500).json(err);
    }
}

//get all posts
module.exports.handleGetAllPost = async (req, res) => {
    try {
        const currentUser = await User.findById(req.params.userId);
        //Get userPost
        const userPosts = await Post.find({ userId: currentUser._id });
        const friendPosts = await Promise.all(
          currentUser.followings.map((friendId) => {
            //Get friend's post of user
            return Post.find({ userId: friendId });
          })
        );
        res.status(200).json(userPosts.concat(...friendPosts))
      } catch (err) {
        res.status(500).json(err);
      }
}