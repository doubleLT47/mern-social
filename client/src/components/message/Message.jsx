import "./Message.css"
import { format } from "timeago.js"

const Message = ({message, own}) => {
    const public_folder = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <div className={own ? "message own" : "message"}>
            <div className="message-top">
                <img src={public_folder+"person/noavatar.png"} alt="" className="message-img" />
                <p className="message-text">{message.text} </p>
            </div>
            <div className="message-bottom">
                {format(message.createdAt)}
            </div>
        </div>
    )
}

export default Message
