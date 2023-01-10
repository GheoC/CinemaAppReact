import axios from "axios";
import {useAuthContext} from "../../context/AuthProvider/AuthProvider";
import {useState} from "react";
import {loginFromJson} from "../../api/authenticate"
import LoginView from "../../components/LoginView";
import {useNavigate} from "react-router-dom";

function Login() {
    const {username, setLoggedUser} = useAuthContext();
    const [loginFailedMessage, setLoginFailedMessage] = useState('');
    const navigate = useNavigate();
    const onFinish = ({username, password}) => {
        axios.post('http://localhost:8080/authenticate', {
            username: username,
            password: password
        })
            .then(response => {
                if (response.status === 200) {
                    setLoggedUser(response.data);
                    localStorage.setItem('token', response.data.token);
                    navigate(-1);
                }
            })
            .catch(() => setLoginFailedMessage('Bad Credentials'));
    };

    // const onFinish = ({username, password}) => {
    //     loginFromJson({username, password})
    //         .then((user) => setLoggedUser(user))
    //         .catch((e) => setLoginFailedMessage(e.message));
    // }

    if (username) {
        navigate("/");
    }

    return (
        <>
            <LoginView onFinish={onFinish} loginFailedMessage={loginFailedMessage}
                       setLoginFailedMessage={setLoginFailedMessage}/>
        </>)
}

export default Login;