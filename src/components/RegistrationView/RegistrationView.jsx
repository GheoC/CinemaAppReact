import {Button, Form, Input, Layout} from "antd";
import loginBackground from "../../pictures/loginbackground.jpg";
import {Content} from "antd/es/layout/layout";
import {useNavigate} from "react-router-dom";

function RegistrationView({onFinish, resetMessages, finishColor, registrationStatus, errorMessage}) {
    const navigate = useNavigate();
    return (<Layout className={"container"}
                    style={{
                        backgroundImage: `url(${loginBackground})`,
                        backgroundRepeat: "round",
                        backgroundBlendMode: "luminosity",
                        height: "100vh"
                    }}>
        <Content style={{paddingTop: "80px"}}>
            <Form size={"large"} onFinish={onFinish} onFieldsChange={resetMessages}
                  labelCol={{
                      span: 9,
                  }}
                  wrapperCol={{
                      span: 7,
                  }}>
                <Form.Item name="firstName" requiredMark label={<label
                    style={{color: "#d3f261", fontSize: "32px", fontWeight: "Bolder"}}>First name:</label>}
                           rules={[{required: true, message: 'First name required'}]}>
                    <Input style={{fontSize: "24px"}}/>
                </Form.Item>

                <Form.Item name="lastName" requiredMark label={<label
                    style={{color: "#d3f261", fontSize: "32px", fontWeight: "Bolder"}}>Last name:</label>}
                           rules={[{required: true, message: 'Last name required'}]}>
                    <Input style={{fontSize: "24px"}}/>
                </Form.Item>

                <Form.Item name="email" requiredMark label={<label
                    style={{color: "#d3f261", fontSize: "32px", fontWeight: "Bolder"}}>Email:</label>}
                           rules={[{required: true, message: 'Last name required'}]}>
                    <Input style={{fontSize: "24px"}}/>
                </Form.Item>

                <Form.Item name="phoneNumber" requiredMark label={<label
                    style={{color: "#d3f261", fontSize: "32px", fontWeight: "Bolder"}}>Phone number:</label>}
                           rules={[{required: true, message: 'Last name required'}]}>
                    <Input style={{fontSize: "24px"}}/>
                </Form.Item>

                <Form.Item name="formPassword" requiredMark label={<label
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
                    style={{color: "white", marginLeft: "900px"}}>Do you have an account? </span>
                <a style={{color: "cyan"}} onClick={() => navigate("/login")}>Login</a>
                <br/>
                <br/>
                <p style={{
                    color: `${finishColor}`,
                    textAlign: "center",
                    fontSize: "40px",
                    marginLeft: "70px"
                }}>{registrationStatus}</p>
                <p style={{
                    color: "red",
                    textAlign: "center",
                    fontSize: "40px",
                    marginLeft: "70px"
                }}>{errorMessage}</p>
            </Form>
        </Content>
    </Layout>)
}

export default RegistrationView;