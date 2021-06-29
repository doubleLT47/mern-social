
import "./Messenger.css"

import { useState, useContext, useEffect, useRef } from "react"

import Topbar from '../../components/topbar/Topbar';
import Conversation from '../../components/conversations/Conversation';
import Message from '../../components/message/Message';
import ChatOnline from '../../components/chatOnline/ChatOnline';
import { AuthContext } from '../../context/AuthContext';
import axios from "axios";
import { io } from "socket.io-client"

const Messenger = () => {
    const { user } = useContext(AuthContext) ;
    const [conversations, setConversations] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [arrivalMessage, setArrivalMessage] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const socket = useRef();
    const scrollRef = useRef();

    useEffect(() => {
        socket.current = io("http://localhost:3300");
        socket.current.on('get-message', (data) => {
            setArrivalMessage({
                sender: data.senderId,
                text: data.text,
                createdAt: Date.now()
            })
        })
    },[]);

    useEffect(() => {
        arrivalMessage && currentChat?.members.includes(arrivalMessage.sender) && setMessages((prev) => [...prev, arrivalMessage])
    }, [arrivalMessage, currentChat])

    useEffect(() => {
        socket.current.emit("add-user", user._id);
        socket.current.on("get-users", users=> {
            setOnlineUsers(user.followings.filter(f => users.some(u=> u.userId === f)))
        })
    },[user])

    useEffect(() => {
        const fetchConversations = async () => {
            try {
                const res = await axios.get("/conversation/"+user?._id);
                
                setConversations(res.data)
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchConversations();
    },[user])

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const res = await axios.get("/message/"+currentChat?._id);

                setMessages(res.data)
            }
            catch (err) { console.log(err)}
        }
        fetchMessages();
    },[currentChat])

    const handleClick = async (e) => {
        e.preventDefault();
        const message = {
            sender: user._id,
            text: newMessage,
            conversationId: currentChat._id
        };

        const receiverId = currentChat.members.find(member => member !== user._id);

        socket.current.emit('send-message', {
            senderId: user._id,
            receiverId: receiverId,
            text: newMessage
        })

        try {
            const res = await axios.post("/message", message);

            setMessages([...messages, res.data])
            setNewMessage("");
        }
        catch (err) { console.log(err)}

    }

    useEffect(() => {
        scrollRef.current?.scrollIntoView({behavior: "smooth"});
    }, [messages])

    return (
        <> 
            <Topbar />
            <div className="messenger">
                <div className="chat-menu">
                    <div className="chat-menu-wrapper">
                        <input type="text" placeholder="Search for friends" className="chat-menu--input"/>
                        {conversations.map(conversation => (
                            <div onClick={() => setCurrentChat(conversation)}>
                                <Conversation key={conversation._id} conversation={conversation} currentUser={user} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="chat-box">
                    <div className="chat-box-wrapper">
                        {
                            currentChat ?
                            <>
                                <div className="chat-box--top">
                                    {
                                        messages.map(message => (
                                            <div ref={scrollRef}>
                                                <Message key={message._id} message={message} own={message.sender === user._id}/>

                                            </div>
                                        ))
                                    }
                                </div>
                                <div className="chat-box--bottom">
                                    <textarea 
                                    placeholder="Write somethings ... " 
                                    className="chat-message--input" 
                                    onChange={(e)=>setNewMessage(e.target.value)}
                                    value={newMessage}
                                    ></textarea>
                                    <button className="chat-submit--button" onClick={handleClick} >Send</button>
                                </div>
                            </>
                            : 
                            <span className="no-conversation--text">Open a conversation  to start a chat</span>
                        }
                    </div>
                </div>
                <div className="chat-online">
                    <div className="chat-online-wrapper">
                            <ChatOnline onlineUsers={onlineUsers} currentId={user._id} setCurrentChat={setCurrentChat}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Messenger
