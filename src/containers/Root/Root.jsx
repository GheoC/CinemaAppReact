import {Layout} from "antd";

function Root() {
    return (
        <Layout>
            <Layout.Sider style={{background: "#4f202d", color: "white"}}>Slider</Layout.Sider>
            <Layout>
                <Layout.Header style={{background: "rgba(140,6,8,0.33)"}}>Header</Layout.Header>
                <Layout.Content style={{innerHeight: "800px"}}>Content</Layout.Content>
                <Layout.Footer style={{background: "rgba(140,6,8,0.33)"}}>Footer</Layout.Footer>
            </Layout>
        </Layout>)
}

export default Root;