import './Newfeed.css'
import { useState, useEffect } from "react";
import axios from "axios";

import Share from "../share/Share";
import Post from "../post/Post";

const Newfeed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get('/posts/timeline/60ce975cf4292242388095ac');
            setPosts(res.data);
        }
        
        fetchPosts();
    },[])
    return (
        <div className="newfeed">
            <div className="feedWrapper">
                <Share />
                {posts.map(post => (
                    <Post key={post.id} post={post}/>
                ))
                   
                }
            </div>
        </div>
    )
}

export default Newfeed
