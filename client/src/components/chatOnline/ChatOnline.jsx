import "./ChatOnline.css"

const CHatOnline = () => {
    const public_folder = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <div className="chat-online">
            <div className="chat-online-friends">
                <div className="chat-online-img--container">
                    <img src={public_folder +"person/noavatar.png"} className="chat-online-img"  alt=""/>
                    <div className="chat-online-badge"></div>
                </div>
                <span className="chat-online-name">Luan Nguyen</span>
            </div>
        </div>
    )
}

export default CHatOnline
