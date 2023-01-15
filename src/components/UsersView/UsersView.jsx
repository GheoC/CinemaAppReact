import {Button, Popconfirm, Table} from "antd";
import {changeUserStatus} from "../../api/userApi";

function UsersView({users, setTriggerRenderMsg, openNotificationWithIconFromAdmin}) {
    function switchStatus(id, email) {
        return changeUserStatus(id).then(() => {
                setTriggerRenderMsg(`Rerender users at ${new Date()}`);
                openNotificationWithIconFromAdmin('warning', `User status changed successfully`, `${email}'s status was changed!`)
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
                            onConfirm={() => switchStatus(record.id, record.email)}>
                    <Button type="primary" shape="round" size={"small"} danger>Deactivate User</Button>
                </Popconfirm> ||
                (record.status === 'INACTIVE' && record.role !== 'ADMIN') &&
                <Popconfirm title={"Are you sure you want to activate this user"}
                            onConfirm={() => switchStatus(record.id, record.email)}>
                    <Button type="primary" shape="round" size={"small"}>Activate User</Button>
                </Popconfirm>
            ),
            width: "150px"
        }
    ];

    return <>
        <Table columns={columns} dataSource={users} rowKey={"id"} size={"small"}
               style={{display: "flex", justifyContent: "center"}}></Table>
    </>

}

export default UsersView;