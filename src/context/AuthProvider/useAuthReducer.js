import {useReducer} from "react";
import authReducer, {initialAuthState} from "./authReducer";

export default function useAuthReducer() {
    const [state, dispatch] = useReducer(
        authReducer,
        {...initialAuthState},
        () => ({...initialAuthState})
    );

    return {...state, dispatch};
}