import {Button, Form, Input, Layout} from "antd";
import {Content} from "antd/es/layout/layout";
import loginBackground from "../../pictures/loginbackground.jpg"
import {useNavigate} from "react-router-dom";

function LoginView({loginFailedMessage, setLoginFailedMessage, onFinish}) {
    const navigate = useNavigate();
    return (
        <Layout className={"container"} style={{
            backgroundImage: `url(${loginBackground})`,
            backgroundRepeat: "round",
            backgroundBlendMode: "luminosity",
            height: "100vh"
        }}>
            <Content style={{paddingTop: "130px"}}>
                <Form size={"large"} onFinish={onFinish} onFieldsChange={() => setLoginFailedMessage('')}
                      labelCol={{
                          span: 9,
                      }}
                      wrapperCol={{
                          span: 7,
                      }}>
                    <Form.Item name="username" requiredMark label={<label
                        style={{color: "#d3f261", fontSize: "32px", fontWeight: "Bolder"}}>Username</label>}
                               rules={[{required: true, message: 'Username required'}]}>
                        <Input style={{fontSize: "24px"}}/>
                    </Form.Item>
                    <Form.Item name="password" requiredMark label={<label
                        style={{color: "#d3f261", fontSize: "32px", fontWeight: "Bolder"}}>Password</label>}
                               rules={[{required: true, message: 'Password required'}]}>
                        <Input.Password style={{fontSize: "24px"}}/>
                    </Form.Item>
                    <Button style={{
                        padding: "0px 50px",
                        margin: "0px 900px",
                        fontSize: "24px",
                        color: "indigo",
                        fontWeight: "bolder",
                        marginBottom: "20px"
                    }} htmlType="submit" type={'primary'}> Submit</Button>
                    <span
                        style={{color: "white", marginLeft: "900px"}}>Dont' have an account? </span>
                    <a style={{color: "cyan"}} onClick={()=>navigate("/register")}>Click here</a>
                    <br/>
                    <br/>
                    <p style={{color: "red", textAlign: "center", fontSize:"40px", marginLeft:"70px"}}>{loginFailedMessage}</p>
                </Form>
            </Content>
        </Layout>
    )
}

export default LoginView;