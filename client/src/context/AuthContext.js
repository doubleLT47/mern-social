import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer"; 

const INITIAL_STATE = {
    user: {
    _id: "60ce975cf4292242388095ac",
    profilePicture: "person/1.jpg",
    coverPicture: "",
    followings: [],
    followers: [],
    isAdmin: false,
    username: "john",
    email: "john@gmail.com",
    desc: "font-end Dev",
    city: "Hồ Chí Minh City",
    from: "Dak Lak",
    relationship: 1
    },
    isFetching: false,
    error: false
};

export const AuthContext = createContext(INITIAL_STATE)

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    return (
        <AuthContext.Provider  value={{user: state.user, isFetching: state.isFetching, error: state.error, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}
