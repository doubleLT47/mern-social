
import "./Profile.css"

import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Newfeed from '../../components/newfeed/Newfeed';
import Rightbar from '../../components/rightbar/Rightbar';

const Profile = () => {
    return (
        <>
            <Topbar />
            <div className="homeContainer">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src="./assets/person/3.jpg" alt="" className="profileCoverImg" />
                            <img src="./assets/person/1.jpg" alt="" className="profileUserImg" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Nguyễn Thành Luân</h4>
                            <span className="profileInfoDesc">font-end Dev</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Newfeed />
                        <Rightbar profile/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
