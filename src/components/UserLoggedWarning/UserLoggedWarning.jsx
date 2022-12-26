import {Alert, Button, Layout, Space} from "antd";
import {useNavigate} from "react-router-dom";

function UserLoggedWarning(){
    const navigate = useNavigate();
    return (
        <Layout style={{padding: "100px", alignItems: "center"}}>
            <Alert style={{width: "50%", fontSize: "30px"}}
                   description="User is logged. Logout to register another user!"
                   type="warning"
                   showIcon
                   action={
                       <Space>
                           <Button size="large" onClick={() => navigate("/")}>
                               Home
                           </Button>
                       </Space>
                   }
            />
        </Layout>
    )

}

export default UserLoggedWarning;