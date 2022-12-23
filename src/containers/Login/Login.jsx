import {Button, Form, Input, Layout} from "antd";
import axios from "axios";
import {useAuthContext} from "../../context/AuthProvider/AuthProvider";
import {useState} from "react";
import {loginFromJson} from "../../api/authenticate"

const {Content} = {...Layout}

function Login() {
    const {setLoggedUser} = useAuthContext();
    const [loginFailedMessage, setLoginFailedMessage] = useState('');
    const onFinish = ({username, password}) => {
        axios.post('http://localhost:8080/authenticate', {
            username: username,
            password: password
        })
            .then(response => {
                if (response.status === 200) {
                    setLoggedUser(response.data)
                    localStorage.setItem('token', response.data.token)
                }
            })
            .catch(() => setLoginFailedMessage('Bad Credentials'));
    };

    // const onFinish = ({username, password}) => {
    //     loginFromJson({username, password})
    //         .then((user) => setLoggedUser(user))
    //         .catch((e) => setLoginFailedMessage(e.message));
    // }

    return (
        <>
            <Layout>
                <Content title={"Hello"} style={{padding: "100px 370px"}}>
                    <Form size={"middle"} onFinish={onFinish} onFieldsChange={() => setLoginFailedMessage('')}>
                        <Form.Item name="username" requiredMark label="Username"
                                   rules={[{required: true, message: 'Username required'}]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item name="password" requiredMark label="Password"
                                   rules={[{required: true, message: 'Password required'}]}>
                            <Input.Password/>
                        </Form.Item>
                        <Button style={{padding: "0px 40px", margin: "0px 130px"}}
                                htmlType="submit" type={'primary'}> Submit</Button>
                        <br/>
                        <br/>
                        <p style={{color: "red", textAlign: "center"}}>{loginFailedMessage}</p>
                    </Form>
                </Content>
            </Layout>
        </>)
}

export default Login;