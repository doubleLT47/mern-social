import './Newfeed.css'

import Share from "../share/Share";
import Post from "../post/Post";

const Newfeed = () => {
    return (
        <div className="newfeed">
            <div className="feedWrapper">
                <Share />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default Newfeed
