import {Button, Form, Input, Layout} from "antd";
import {Content} from "antd/es/layout/layout";

function LoginView({loginFailedMessage, setLoginFailedMessage, onFinish}) {
    return (
        <Layout>
            <Content style={{padding: "100px 370px"}}>
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
    )
}

export default LoginView;