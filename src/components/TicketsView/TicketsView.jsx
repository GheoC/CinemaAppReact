import {Image, Layout, Table, Typography} from "antd";

function TicketsView({tickets}) {
    const columns = [
        {
            title: "Date",
            dataIndex: "playDate",
            width: "150px"
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
            width: "450px",
            align:"center"
        },
        {

            render: (_, record) => (<Image style={{height: "150px", width: "275px"}}
                                           src={require(`../../pictures/${record.movieImg}`)}></Image>),
            width: "300px"
        },
        {
            title: "Status",
            dataIndex: "status"
        }
    ];

    return <>
        <Layout>
            <Layout.Content style={{height: "80%", margin: "25px"}}>
                <Typography.Title>Tickets:</Typography.Title>
                <Table columns={columns} dataSource={tickets} rowKey="id" size="small" style={{width:"1200px", marginLeft:"300px"}}/>
            </Layout.Content>
        </Layout>
    </>
}

export default TicketsView;