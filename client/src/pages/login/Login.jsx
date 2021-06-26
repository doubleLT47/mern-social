
import "./Login.css";

import { useRef, useContext } from "react";

import { loginCall } from "../../apiCalls";
import {AuthContext} from "../../context/AuthContext"
import { CircularProgress } from "@material-ui/core"

const Login = () => {
    const email = useRef();
    const password = useRef();
    const {user, isFetching, error, dispatch} = useContext(AuthContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        loginCall({email: email.current.value, password: password.current.value}, dispatch);
    }
    console.log(isFetching);
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">MERNSocial</h3>
                    <span className="loginDesc">Connect with friends and the world around you on MERN Social.</span>
                </div>
                <div className="loginRight" >
                    <form className="loginBox" onSubmit={handleSubmit}>
                        <input type="email" placeholder="Email" required className="loginInput" ref={email}/>
                        <input type="password" placeholder="Password" minLength="6" required className="loginInput" ref={password}/>
                        <button type="submit" disabled={isFetching} className="loginButton">{isFetching ? <CircularProgress color="white" size="25px"/> : "Log in"}</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">{isFetching ? <CircularProgress color="white" size="25px"/> : "Create a New Account"}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
