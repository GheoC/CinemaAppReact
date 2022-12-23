import {createContext, useContext} from "react";
import {initialAuthState} from "./authReducer";
import useAuthReducer from "./useAuthReducer";

const AuthContext = createContext(initialAuthState)

export function useAuthContext() {
    return useContext(AuthContext)
}

export default function AuthProvider({children}) {
    const {username, role, userId, token, expirationDate, dispatch} = useAuthReducer();

    const setLoggedUser = (value) => {
        dispatch({type: "AUTHENTICATE", payload: value})
    };

    const logout = () => {
        dispatch({type: "LOGOUT"});
    };

    return (
        <AuthContext.Provider
            value={{
                username,
                role,
                userId,
                token,
                expirationDate,
                dispatch,
                setLoggedUser,
                logout
            }}>{children}</AuthContext.Provider>
    )
}