import "./Post.css";

import { useState } from "react";

import { MoreVert } from "@material-ui/icons"
import { Users } from "../../dynamicData"

const Post = ({post}) => {
    const [like, setLike] = useState(post.like);
    const [isLike, setIsLike] = useState(false);

    const likeHandle = () => {
        setLike(isLike ? like - 1 : like + 1);
        setIsLike(!isLike);
    }

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={Users.filter((user) => user.id === post.userId)[0].profilePicture} alt="" className="postProfileImg" />
                        <span className="postUsername">
                            {Users.filter((user) => user.id === post.userId)[0].username}
                        </span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img src={post.photo} alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                    <img className="likeIcon" src="./assets/like.png" alt="" onClick={likeHandle}/>
                    <img className="likeIcon" src="./assets/heart.png" alt="" onClick={likeHandle} />
                    <span className="pótLikeCounter">{like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
