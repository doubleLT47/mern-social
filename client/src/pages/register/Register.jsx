import "./Register.css";

import { useRef } from "react";
import { useHistory } from "react-router";
import axios from "axios";

const Register = () => {
    const email = useRef();
    const password = useRef();
    const rePassword = useRef();
    const username = useRef();
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password.current.value !== rePassword.current.value) {
            rePassword.current.setCustomValidity("Password don't match !")
        }
        else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value
            }

            try {
                await axios.post("/auth/register", user);
                history.push("/login")
            }
            catch (err) {

            }
        }
    }

    return (
        <div className="register">
            <div className="registerWrapper">
                <div className="registerLeft">
                    <h3 className="registerLogo">MERNSocial</h3>
                    <span className="registerDesc">Connect with friends and the world around you on MERN Social.</span>
                </div>
                <div className="registerRight">
                    <form className="registerBox" onSubmit={handleSubmit}>
                        <input type="text" placeholder="Username" required ref={username} className="registerInput" />
                        <input type="email" placeholder="Email" required ref={email} className="registerInput" />
                        <input type="password" minLength="6" placeholder="Password" required ref={password} className="registerInput" />
                        <input type="password" minLength="6" placeholder="Confirm Password" required ref={rePassword} className="registerInput" />
                        <button type="submit" className="registerButton">Sign up</button>
                        <button className="registerRegisterButton">Log into Account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register