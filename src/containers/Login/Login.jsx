import {useAuthContext} from "../../context/AuthProvider/AuthProvider";
import {useState} from "react";
import {authenticate, loginFromJson} from "../../api/authenticate"
import LoginView from "../../components/LoginView";
import {useNavigate} from "react-router-dom";

function Login() {
    const {setLoggedUser} = useAuthContext();
    const [loginFailedMessage, setLoginFailedMessage] = useState('');
    const navigate = useNavigate();
    const onFinish = ({usernameFromForm, password}) => {
        authenticate(usernameFromForm, password)
            .then((data) => {
                setLoggedUser(data);
                localStorage.setItem('token', data.token);
                navigate(-1);
            })
            .catch(() => setLoginFailedMessage('Bad Credentials'));
    };

    // const onFinish = ({username, password}) => {
    //     loginFromJson({username, password})
    //         .then((user) => setLoggedUser(user))
    //         .catch((e) => setLoginFailedMessage(e.message));
    // }

    // if (username) {
    //     navigate("/");
    // }

    return (
        <>
            <LoginView onFinish={onFinish} loginFailedMessage={loginFailedMessage}
                       setLoginFailedMessage={setLoginFailedMessage}/>
        </>)
}

export default Login;