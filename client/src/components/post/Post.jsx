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
    const public_folder = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={public_folder+Users.filter((user) => user.id === post.userId)[0].profilePicture} alt="" className="postProfileImg" />
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
                    <img src={public_folder+post.photo} alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                    <img className="likeIcon" src={`${public_folder}/like.png`} alt="" onClick={likeHandle}/>
                    <img className="likeIcon" src={`${public_folder}/heart.png`} alt="" onClick={likeHandle} />
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
