import {Button, Card, Col, Layout, Popconfirm, Row, Table, Tag, Typography} from "antd";
import Meta from "antd/es/card/Meta";
import {buyTicket} from "../../api/ticketsApi";

function MovieDetailsView({movie, movieCelebrities, movieGenre, movieEvents, username, userId, logout}) {

    const columns = [
        {
            title: "Date",
            dataIndex: "movieDate"
        },
        {
            title: "Time",
            dataIndex: "movieTime"
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
            title: "Buy Ticket",
            render: (_, record) => (username &&
                <Popconfirm title={"Are you sure you want to buy this ticket"}
                            onConfirm={() => buyTicket(record.id, userId, record.price, logout)}>
                    <Button type="primary" shape="round" size={"small"}>Buy Ticket</Button>
                </Popconfirm>
            )
        }
    ]

    return <>
        <Layout>
            <Layout.Content>
                <Row>
                    <Col>
                        <Card style={{width: "800px", height: "770px", marginTop: "0px", marginLeft: "25px"}}>
                            <Row>
                                <Col span={21}>
                                    <Typography.Title> {movie?.name}</Typography.Title>
                                </Col>
                                <Col>
                                    {movie?.is3D && <Tag style={{
                                        color: "red",
                                        fontSize: "40px",
                                        height: "40px",
                                        width: "80px",
                                        textAlign: "center",
                                        padding: "6px"
                                    }}>3D</Tag>}
                                </Col>
                            </Row>
                            <Row>
                                <Col span={18}>
                                    <Typography.Paragraph>Actors: {movieCelebrities}</Typography.Paragraph>
                                </Col>
                                <Col>
                                    <Typography.Paragraph>Director: {movie?.director}</Typography.Paragraph>
                                </Col>
                            </Row>
                            <Typography.Paragraph>Description: {movie?.description}</Typography.Paragraph>
                            <iframe width="750" height="490"
                                    src={`https://www.youtube-nocookie.com/embed/${movie?.trailer}`}
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen>
                            </iframe>
                            <Meta description={`Duration: ${movie?.duration}`} style={{textAlign: "right"}}></Meta>
                            <Meta description={movieGenre} style={{textAlign: "right"}}></Meta>
                            <></>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{width: "840px", height: "770px", marginTop: "0px", marginLeft: "25px"}}>
                            <Typography.Title>Schedule:</Typography.Title>
                            <Table dataSource={movieEvents} columns={columns} rowKey="id"/>
                        </Card>
                    </Col>
                </Row>
            </Layout.Content>
        </Layout>
    </>
}

export default MovieDetailsView;