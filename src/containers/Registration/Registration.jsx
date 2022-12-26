import {useAuthContext} from "../../context/AuthProvider/AuthProvider";
import axios from "axios";
import {useState} from "react";
import UserLoggedWarning from "../../components/UserLoggedWarning";
import RegistrationView from "../../components/RegistrationView";

function Registration() {
    const {username} = useAuthContext();
    const [registrationStatus, setRegistrationStatus] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const resetMessages = () => {
        setErrorMessage('');
        setRegistrationStatus('');
    }
    const [finishColor, setFinishColor] = useState('');

    const onFinish = ({firstName, lastName, email, phoneNumber, formPassword}) => {
        axios.post('http://localhost:8080/api/v1/users', {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNumber: phoneNumber,
            password: formPassword
        })
            .then(response => {
                if (response.status === 200) {
                    setRegistrationStatus("Registration successful");
                    setFinishColor('green');
                }
            })
            .catch((e) => {
                if (e.response.status === 400) {
                    let errorMsg = '';
                    e.response.data.errors.forEach(({
                                                        field,
                                                        defaultMessage
                                                    }) => errorMsg = errorMsg + `${field}: ${defaultMessage}; `);
                    setErrorMessage(errorMsg);
                }

                if (e.response.status === 409) {
                    setErrorMessage("Email is already registered!");
                }
                setRegistrationStatus("Registration failed");
                setFinishColor('red');
            });
    };

    if (username) {
        return <>
            <UserLoggedWarning/>
        </>
    }

    return <RegistrationView registrationStatus={registrationStatus} onFinish={onFinish} errorMessage={errorMessage}
                             finishColor={finishColor} resetMessages={resetMessages}/>
}

export default Registration;