
import "./Share.css"

import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";
import  { useContext, useEffect, useRef, useState } from "react";
import {AuthContext} from "../../context/AuthContext";
import { Cancel } from "@material-ui/icons";
import axios from "axios";

const Share = () => {
    const public_folder = process.env.REACT_APP_PUBLIC_FOLDER;
    const {user} = useContext(AuthContext);
    const desc = useRef();
    const [file, setFile]= useState(null);

    const handleSubmit =async (e) => {
        e.preventDefault();

        const newPost = {
            userId: user._id,
            desc: desc.current.value,
        }
        if (file) {
            const data = new FormData();
            const fileName = Date.now() + file.name;
            data.append("name", fileName);
            data.append("file", file);
            newPost.img = fileName;
            try {
                await axios.post("/upload", data);
            }
            catch (err) {
            }
        }

        try {
            await axios.post("/posts", newPost);
            window.location.reload();
        }
        catch (err) {

        }
    }
    
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src={user.profilePicture ? public_folder + user.profilePicture : `${public_folder}person/noavatar.png`} alt="" className="shareProfileImg" />
                    <input ref={desc} type="text" placeholder={`What in your mind, ${user.username}?`} className="shareInput" />
                </div>
                <hr className="shareHr" />
                {file && (
                    <div className="shareImgContainer">
                        <img src={URL.createObjectURL(file)} alt="" className="shareImg" />
                        <Cancel className="shareCancelImg" onClick={()=> setFile(null)}/>
                    </div>
                )}
                <form className="shareBottom" onSubmit={handleSubmit}>
                    <div className="shareOptions">
                        <label htmlFor="file" className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareIcon" />
                            <span className="shareOptionText">Photo or Image</span>
                            <input style={{display: "none"}} type="file" id="file" accept=".png, .jpeg, .jpg" onChange={e=>setFile(e.target.files[0])} />
                        </label>
                        <div className="shareOption">
                            <Label htmlColor="blue" className="shareIcon" />
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor="green" className="shareIcon" />
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
                            <span className="shareOptionText">Feelings</span>
                        </div>
                    </div>
                    <button className="shareButton">Share</button>
                </form>
            </div>
        </div>
    )
}

export default Share
