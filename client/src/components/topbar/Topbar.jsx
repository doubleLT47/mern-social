import "./Topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom"

const TopBar = () => {
    const public_folder = process.env.REACT_APP_PUBLIC_FOLDER;

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
                    <Link to="/profile/luan" className="topbarLink">Timeline</Link>
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
                <img src={`${public_folder}/person/1.jpg`} alt="" className="topbarImg" />
            </div>
        </div>
    )
}

export default TopBar
