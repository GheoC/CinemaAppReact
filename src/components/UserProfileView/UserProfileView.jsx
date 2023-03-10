import {Button, Card, Descriptions, Layout, Popconfirm} from "antd";
import {changeUserStatus} from "../../api/userApi";
import {useNavigate} from "react-router-dom";

function UserProfileView({user, userId, logout, role}) {
    const navigate = useNavigate();
    return <Layout>
        <Layout.Content style={{padding: "25px", height: "85vh"}}>
            <Card style={{width: "1000px", height: "500px", marginLeft: "75px", marginTop: "15px"}}>
                <Descriptions title="User Info" column={2} layout="horizontal" labelStyle={{fontSize: "20px"}}
                              contentStyle={{fontSize: "26px"}}>
                    <Descriptions.Item label="First Name">{user.firstName}</Descriptions.Item>
                    <Descriptions.Item label="Last Name">{user.lastName}</Descriptions.Item>
                    <Descriptions.Item label="Email">{user.email}</Descriptions.Item>
                    <Descriptions.Item label="Phone number">{user.phoneNumber}</Descriptions.Item>
                    <Descriptions.Item span={2}></Descriptions.Item>
                    <Descriptions.Item label="Status">{user.status}</Descriptions.Item>
                    {role !== 'ADMIN' && <Descriptions.Item>
                        <Popconfirm
                            title={"Are you sure you want to deactivate your account! If you click ok you wont be able to log on the account"}
                            onConfirm={() =>
                                changeUserStatus(userId)
                                    .then(() => {
                                        logout();
                                        navigate("/")
                                    })
                                    .catch((e) => {
                                        if (e.response.status === 401) {
                                            console.log("Token has expired! Login again")
                                            logout();
                                        }
                                        if (e.response.status === 403) {
                                            console.log("Access Denied");
                                        }
                                    })}>
                            <Button type="primary" danger shape="round" size={"large"}>Deactivate User</Button>
                        </Popconfirm>
                    </Descriptions.Item>}
                </Descriptions>
            </Card>
        </Layout.Content>
    </Layout>
}

export default UserProfileView;