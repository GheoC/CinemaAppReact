import {Button, Card, Table, Typography} from "antd";

function MovieEventsView({movieEvents, columns}) {
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
            render: (_, record) => <Button>Cancel {record.id}</Button>
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