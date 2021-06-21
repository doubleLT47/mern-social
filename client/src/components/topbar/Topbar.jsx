import "./Topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";

const TopBar = () => {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">MERN Social</span>
            </div>
            <div className="topbarCenter">
                <div className="search">
                    <Search className="searchIcon"/>
                    <input type="text" placeholder="Search for friend, post or video" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
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
                <img src="assets/person/1.jpg" alt="" className="topbarImg" />
            </div>
        </div>
    )
}

export default TopBar
