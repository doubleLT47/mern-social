import "./Rightbar.css"

import { Users } from "../../dynamicData"
import Online from "../online/Online"

const Rightbar = ({user}) => {
    const public_folder = process.env.REACT_APP_PUBLIC_FOLDER;

    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img src={`${public_folder}/gift.png`} alt="" className="birthdayImg" />
                    <span className="birthdayText">
                        <b>Hiếu</b> and <b>3 others friend</b> have a birthday today
                    </span>
                </div>
                <img src={`${public_folder}/ad.png`} alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Online friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map((user => (
                        <Online key={user.id} user={user} />
                    )))}
                </ul>
            </>
        )
    }

    const ProfileRightbar = () =>{
        return (
            <>
                <h4 className="rightbarTitle">{user.username} information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">{user.city}</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">{user.from}</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoValue">{user.relationship === 1 ? "Single" : user.relationship === 2 ? "married" : "-"}</span>
                    </div>
                </div>
                <h4 className="rightbarTitle">{user.username} friends</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img src={`${public_folder}/person/2.jpg`} alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Hiếu Lợn</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src={`${public_folder}/person/3.jpg`} alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Hiếu Lợn</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src={`${public_folder}/person/4.jpg`} alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Hiếu Lợn</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src={`${public_folder}/person/5.jpg`} alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Hiếu Lợn</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src={`${public_folder}/person/6.jpg`} alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Hiếu Lợn</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src={`${public_folder}/person/7.jpg`} alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Hiếu Lợn</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src={`${public_folder}/person/8.jpg`} alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Hiếu Lợn</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src={`${public_folder}/person/9.jpg`} alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Hiếu Lợn</span>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {user ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    )
}

export default Rightbar
