
import "./Profile.css";

import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";

import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Newfeed from '../../components/newfeed/Newfeed';
import Rightbar from '../../components/rightbar/Rightbar';

const Profile = () => {
    const public_folder = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user,setUser] = useState({});
    const username = useParams().username;
    

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users?username=${username}`);
            setUser(res.data);
        }
        
        fetchUser();
    },[username])
    return (
        <>
            <Topbar />
            <div className="homeContainer">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src={user.coverPicture || public_folder+"person/noCover.png"} alt="" className="profileCoverImg" />
                            <img src={user.coverPicture || public_folder+"person/noavatar.png"} alt="" className="profileUserImg" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">{user.username}</h4>
                            <span className="profileInfoDesc">{user.desc}</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Newfeed username={username} />
                        <Rightbar user={user}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
