import './Newfeed.css'

import Share from "../share/Share";
import Post from "../post/Post";
import { Posts } from "../../dynamicData"

const Newfeed = () => {
    return (
        <div className="newfeed">
            <div className="feedWrapper">
                <Share />
                {Posts.map(post => (
                    <Post key={post.id} post={post}/>
                ))
                   
                }
            </div>
        </div>
    )
}

export default Newfeed
