import {Button, Layout, Menu} from "antd";
import Title from "antd/lib/typography/Title";
import {PoweroffOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";

function MyHeader({isAuthenticated, username, logout}) {
    const navigate = useNavigate();
    return <Layout.Header style={{background: "rgb(17,2,2)", height: "100px"}}>
        <Menu
            style={{
                backgroundColor: "black",
                display: "block",
                fontFamily: "Quicksand",
                marginTop: "10px",
                height: "75px"
            }}
            mode="horizontal"
            items={[
                {
                    style: {float: "left"},
                    key: "title",
                    label: <Title
                        style={{color: "#d3f261", fontSize: "60px", fontFamily: "Quicksand"}}>Cinema
                        GG</Title>
                },
                {
                    style: {float: "right"},
                    key: 'logout',
                    label: (isAuthenticated &&
                        <Button size="large" icon={<PoweroffOutlined/>} type="primary" danger ghost
                                onClick={() => {
                                    logout();
                                    navigate("/");
                                }}></Button>)

                },
                {
                    style: {float: "right"},
                    key: 'greet',
                    label: (isAuthenticated && <p style={{
                        marginBottom: "0px",
                        marginTop: "0px",
                        fontSize: "20px",
                        color: "#d3f261"
                    }}>Hello {username}</p>)
                },
                {
                    style: {float: "right", marginTop: "10px"},
                    key: 'register',
                    label: (!isAuthenticated &&
                        <Button onClick={() => navigate("/register")}
                                size={"large"}
                                type={'primary'}
                                style={{
                                    fontSize: "20px",
                                    color: "indigo",
                                    fontWeight: "bolder"
                                }}> Register </Button>)
                },
                {
                    style: {float: "right", marginTop: "10px"},
                    key: 'login',
                    label: (!isAuthenticated &&
                        <Button onClick={() => navigate("/login")}
                                size={"large"}
                                type={'primary'}
                                style={{
                                    fontSize: "20px",
                                    color: "indigo",
                                    fontWeight: "bolder"
                                }}> Login </Button>)
                },
            ]}
        ></Menu>
    </Layout.Header>
}

export default MyHeader;