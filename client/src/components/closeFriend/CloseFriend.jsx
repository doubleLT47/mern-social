import "./CloseFriend.css"

const CloseFriend = ({user}) => {
    const public_folder = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <li className="sidebarFriend">
            <img src={public_folder+user.profilePicture} alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">{user.username}</span>
        </li>
    )
}

export default CloseFriend
