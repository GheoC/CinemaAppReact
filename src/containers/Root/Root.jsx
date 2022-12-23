import {Button, Layout} from "antd";
import {useAuthContext} from "../../context/AuthProvider/AuthProvider";
import {PoweroffOutlined} from "@ant-design/icons";

function Root() {

    const {logout} = useAuthContext();
    return (
        <Layout>
            <Layout.Sider style={{background: "#4f202d", color: "white"}}>Slider</Layout.Sider>
            <Layout>
                <Layout.Header style={{background: "rgb(17,2,2)", alignItems: "right"}}>
                    <Button icon={<PoweroffOutlined />} type="primary" danger ghost onClick={logout}></Button>
                </Layout.Header>
                <Layout.Content style={{innerHeight: "800px"}}>Content</Layout.Content>
                <Layout.Footer style={{background: "rgba(140,6,8,0.33)"}}>Footer</Layout.Footer>
            </Layout>
        </Layout>)
}

export default Root;