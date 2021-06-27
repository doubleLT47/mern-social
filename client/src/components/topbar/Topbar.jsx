
import "./Topbar.css";

import { useContext } from "react";

import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const TopBar = () => {
    const public_folder = process.env.REACT_APP_PUBLIC_FOLDER;
    const {user} = useContext(AuthContext);

    return (
        <div className="topbarContainer">
            <Link to="/" className="topbarLeft">
                <span className="logo">MERN Social</span>
            </Link>
            <div className="topbarCenter">
                <div className="search">
                    <Search className="searchIcon"/>
                    <input type="text" placeholder="Search for friend, post or video" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <Link to="/" className="topbarLink">Homepage</Link>
                    <Link to={"/profile/"+user.username} className="topbarLink">Timeline</Link>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <Link to={`/profile/${user.username}`}>
                    <img src={user.profilePicture ? public_folder + user.profilePicture : `${public_folder}/person/noavatar.png`} alt="" className="topbarImg" />
                </Link>
            </div>
        </div>
    )
}

export default TopBar
