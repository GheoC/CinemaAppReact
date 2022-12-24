import Root from "./Root";
import Login from "./Login";
import {useAuthContext} from "../context/AuthProvider/AuthProvider";
import {useEffect} from "react";
import axios from "axios";
import "../styles/App.css"

function App() {
    const {username, setLoggedUser} = useAuthContext();
    const isTokenStillValid = async () => {
        const tokenFromStorage = localStorage.getItem("token");
        if (tokenFromStorage) {
            await axios.get(`http://localhost:8080/check-token/${tokenFromStorage}`)
                .then((response) => {
                    setLoggedUser(response.data);
                })
                .catch(() => {
                    localStorage.removeItem("token");
                });
        }
    };

    useEffect(() => {
        isTokenStillValid();
    }, [])

    let isAuthenticated = false;
    if (username !== '') {
        isAuthenticated = true;
    }
    const isLoading = false;

    if (isLoading) {
        return 'Loading...'
    }

    if (isAuthenticated) {
        return <Root/>
    }

    return <>
        <Login/>
    </>
}

export default App;