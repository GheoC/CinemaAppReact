import {Button, Image, Layout, notification, Popconfirm, QRCode, Table, Typography} from "antd";
import {cancelTicket} from "../../api/ticketsApi";

function TicketsView({tickets, username, logout, setTriggerRenderMsg}) {
    const [api, contextHolder] = notification.useNotification();
    const openNotificationWithIcon = (type, msg) => {
        api[type]({
            message: 'Ticket canceled successfully',
            description: msg,
        });
    };
    const columns = [
        {
            title: "Ticket",
            render: (_, record) => <QRCode
                value={`Event: ${record.movieEventId}! => ${record.movieName} in room ${record.room} at ${record.playDate}. Don't miss out!`}/>,
            width: "200px"
        },
        {
            title: "Ticket number",
            dataIndex: "id",
            width: "100px",
            align: "center"
        },
        {
            title: "Date",
            dataIndex: "playDate",
            width: "150px",
            align: "center"
        },
        {
            title: "Room",
            dataIndex: "room",
            width: "75px"
        },
        {
            title: "Price Paid",
            dataIndex: "priceCharged",
            width: "100px"
        },
        {
            title: "Movie",
            dataIndex: "movieName",
            width: "250px",
            align: "center"
        },
        {
            render: (_, record) => <Image style={{height: "150px", width: "275px"}}
                                          src={`data:image/jpeg;base64,${atob(record?.picture)}`}></Image>,
            width: "300px"
        },
        {
            title: "Status",
            dataIndex: "status",
            width: "120px"
        },
        {
            title: "Cancel Ticket?",
            render: (_, record) => (record.status === 'ORDERED' &&
                <Popconfirm title={"Are you sure you want to cancel this ticket"}
                            onConfirm={() => cancelTicket(record.id, logout)
                                .then(() => {
                                    setTriggerRenderMsg(`Rerender tickets arrays cause movieEvent ${record.id} was canceled`);
                                    openNotificationWithIcon('warning', `${username} canceled ticket for movieEvent ${record.id}!`);
                                })
                                .catch((e) => {
                                    if (e.response.status === 401) {
                                        console.log("Token has expired! Login again")
                                        logout();
                                    }
                                })
                            }>
                    <Button type="primary" shape="round" size={"small"}>Cancel Ticket</Button>
                </Popconfirm>),
            width: "150px"
        }
    ];

    return <>
        <Layout>
            {contextHolder}
            <Layout.Content>
                <Typography.Title>Tickets:</Typography.Title>
                <Table dataSource={tickets} columns={columns} rowKey="id" scroll={{y: 600}} size="large"
                       style={{width: "1500px", marginLeft: "170px"}}/>
            </Layout.Content>
        </Layout>
    </>
}

export default TicketsView;