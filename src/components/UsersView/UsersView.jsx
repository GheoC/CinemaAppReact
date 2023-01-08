import {Button, notification, Popconfirm, Table} from "antd";
import {changeUserStatus} from "../../api/userApi";

function UsersView({users, setTriggerRenderMsg, logout}) {
    const [api, contextHolder] = notification.useNotification();
    const openNotificationWithIcon = (type, msg) => {
        api[type]({
            message: 'User status changed successfully',
            description: msg,
        });
    };
    const switchStatus = (id, email, logout) => function switchStatus() {
        return changeUserStatus(id, logout).then(() => {
                setTriggerRenderMsg(`Rerender users at ${new Date()}`);
                openNotificationWithIcon('warning', `${email}'s status was changed!`)
            }
        );
    }
    const columns = [
        {
            title: "user id",
            dataIndex: "id",
            width: "100px",
            align: "center"
        },
        {
            title: "First Name",
            dataIndex: "firstName",
            width: "150px"
        },
        {
            title: "Last Name",
            dataIndex: "lastName",
            width: "150px"
        },
        {
            title: "Email",
            dataIndex: "email",
            width: "150px"
        },
        {
            title: "Phone Number",
            dataIndex: "phoneNumber",
            width: "100px",
            align: "center"
        },
        {
            title: "Role",
            dataIndex: "role",
            width: "100px"
        },
        {
            title: "Status",
            dataIndex: "status",
            width: "100px"
        },
        {
            title: "Change Status",
            render: (_, record) => (
                (record.status === 'ACTIVE' && record.role !== "ADMIN") &&
                <Popconfirm title={"Are you sure you want to deactivate this user"}
                            onConfirm={switchStatus(record.id, record.email, logout)}>
                    <Button type="primary" shape="round" size={"small"} danger>Deactivate User</Button>
                </Popconfirm> ||
                (record.status === 'INACTIVE' && record.role !== 'ADMIN') &&
                <Popconfirm title={"Are you sure you want to activate this user"}
                            onConfirm={switchStatus(record.id, record.email, logout)}>
                    <Button type="primary" shape="round" size={"small"}>Activate User</Button>
                </Popconfirm>
            ),
            width: "150px"
        }
    ];

    return <>
        {contextHolder}
        <Table columns={columns} dataSource={users} rowKey={"id"} size={"small"}
               style={{display: "flex", justifyContent: "center"}}></Table>
    </>

}

export default UsersView;