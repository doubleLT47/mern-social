import "./Post.css";

import { useState, useEffect } from "react";
import axios from "axios";
import { format } from "timeago.js"

import { MoreVert } from "@material-ui/icons";
import { Link } from "react-router-dom"

const Post = ({post}) => {
    const [like, setLike] = useState(post.likes.length);
    const [isLike, setIsLike] = useState(false);
    const [user, setUser] = useState({});

    const likeHandle = () => {
        setLike(isLike ? like - 1 : like + 1);
        setIsLike(!isLike);
    }
    const public_folder = process.env.REACT_APP_PUBLIC_FOLDER;

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users?userId=${post.userId}`);
            setUser(res.data);
        }
        
        fetchUser();
    },[post.userId])

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`/profile/${user.username}`}>
                            <img src={user.profilePicture || public_folder+"person/noavatar.png"} alt="" className="postProfileImg" />
                        </Link>
                        <span className="postUsername">
                            {user.username}
                        </span>
                        <span className="postDate">{format(post.createdAt)}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img src={public_folder+post.img} alt="" className="postImg" />
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
