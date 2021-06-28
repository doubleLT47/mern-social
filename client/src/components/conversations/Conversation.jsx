
import "./Conversation.css"
import { useState, useEffect } from "react";
import axios from "axios";

const Conversation = ({conversation, currentUser}) => {
    const public_folder = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user,setUser] = useState(null);

    useEffect(() =>{
        const friendId = conversation.members.find(m => m !== currentUser._id)
    
        const getUser = async () => {
            try {
                const res = await axios.get("/users?userId="+friendId);

                setUser(res.data);
            }
            catch (err) {
                console.log(err)
            }
        }
        getUser();
    },[currentUser, conversation])

    return (
        <div className="conversation">
            <img src={user?.profilePicture ? public_folder + user.profilePicture: public_folder+"person/noavatar.png"} alt="" className="conversation-img" />
            <span className="conversation-name">{user?.username}</span>
        </div>
    )
}

export default Conversation
