import {Button, Layout, Menu} from "antd";
import {useAuthContext} from "../../context/AuthProvider/AuthProvider";
import {PoweroffOutlined} from "@ant-design/icons";
import {useState} from "react";

function Root() {
    const {username, logout} = useAuthContext();
    const [collapsed, setCollapsed] = useState(true);
    return (
        <Layout className={"container"}>
            <Layout.Sider collapsedWidth={"0px"} collapsible collapsed={collapsed}
                          onCollapse={(value) => setCollapsed(value)}
                          style={{background: "#4f202d", color: "white"}}>Slider</Layout.Sider>

            <Layout>
                <Layout.Header style={{background: "rgb(17,2,2)", height: "120px"}}>
                    <Menu
                        style={{backgroundColor: "black", display: "block", fontFamily: "Quicksand", marginTop: "25px"}}
                        mode="horizontal"
                        items={[
                            {
                                style: {float: "left"},
                                key: 'title',
                                label: <p style={{
                                    marginBottom: "0px",
                                    marginTop: "0px",
                                    fontSize: "70px",
                                    color: "#d3f261"
                                }}>Cinema GG</p>,

                            },
                            {
                                style: {float: "right"},
                                key: 'logout',
                                label: <Button size="large" icon={<PoweroffOutlined/>} type="primary" danger ghost
                                               onClick={logout}></Button>,

                            },
                            {
                                style: {float: "right"},
                                key: 'greet',
                                label: <p style={{
                                    marginBottom: "0px",
                                    marginTop: "0px",
                                    fontSize: "20px",
                                    color: "#d3f261"
                                }}>Hello {username}</p>,

                            }
                        ]}
                    ></Menu>
                </Layout.Header>

                <Layout.Content>Content</Layout.Content>
                <Layout.Footer style={{background: "rgb(17,2,2)"}}>Footer</Layout.Footer>
            </Layout>


        </Layout>)
}

export default Root;