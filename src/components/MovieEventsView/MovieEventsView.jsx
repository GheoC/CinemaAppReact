import {Button, Card, Popconfirm, Table, Typography} from "antd";

function MovieEventsView({movieEvents, columns, switchMovieEventStatus}) {


    const defaultColumns = [
        {
            title: "id",
            dataIndex: "id"
        },
        {
            title: "Date & Time ",
            dataIndex: "playMovieDateTime"
        },
        {
            title: "Room",
            dataIndex: "room"
        },
        {
            title: "Price",
            dataIndex: "price"
        },
        {
            title: "Status",
            dataIndex: "status"
        },
        {
            title: "Cancel Event",
            render: (_, record) => (record.status === 'ACTIVE') &&
                <Popconfirm title={"Are you sure you want to cancel this movie event"}
                            onConfirm={() => switchMovieEventStatus(record.id)}>
                    <Button danger type="primary" shape="round" size={"small"}>Cancel Event</Button>
                </Popconfirm> ||
                (record.status === 'CANCELED') &&
                <Popconfirm title={"Are you sure you want to activate this movie event"}
                            onConfirm={() => switchMovieEventStatus(record.id)}>
                    <Button type="primary" shape="round" size={"small"}>Activate Event</Button>
                </Popconfirm>
        }
    ]

    if (columns === undefined) {
        columns = defaultColumns;
    }

    return <Card style={{width: "840px", height: "770px", marginTop: "0px", marginLeft: "25px"}}>
        <Typography.Title>Schedule:</Typography.Title>
        <Table dataSource={movieEvents} columns={columns} rowKey="id"/>
    </Card>
}

export default MovieEventsView;