
import "./ChatOnline.css"
import { useState, useEffect } from "react";
import axios from "axios";

const CHatOnline = ({onlineUsers, currentId, setCurrentChat}) => {
    const public_folder = process.env.REACT_APP_PUBLIC_FOLDER;
    const [friends, setFriends] = useState([]);
    const [onlineFriends, setOnlineFriends] = useState([]);

    useEffect(() => {
        const fetchFriends = async () => {
            const res = await axios.get("/users/friends/"+currentId);

            setFriends(res.data);
        }

        fetchFriends();
    },[currentId]);

    useEffect(() => { 
        setOnlineFriends(friends.filter(f => onlineUsers.includes(f._id)));
    },[onlineUsers, friends]);

    const handleClick = async (user) => {
        try {
            const res = await axios.get('/conversation/find/'+currentId+'/'+user._id);
            setCurrentChat(res.data)
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="chat-online">
            {
                onlineFriends.map(f => (
                    <div className="chat-online-friends" onClick={() => handleClick(f)}>
                        <div className="chat-online-img--container">
                            <img src={f.profilePicture ? public_folder + f.profilePicture : public_folder + "person/noavatar.png"} className="chat-online-img"  alt=""/>
                            <div className="chat-online-badge"></div>
                        </div>
                        <span className="chat-online-name">{f.username}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default CHatOnline
