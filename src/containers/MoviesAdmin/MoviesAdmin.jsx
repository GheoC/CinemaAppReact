import {Button, Card, Col, Layout, notification, Popconfirm, Row, Table} from "antd";
import {useState} from "react";
import {changeMovieStatus} from "../../api/moviesApi";
import AddMovie from "../AddMovie";
import MovieDetailsAdmin from "../MovieDetailsAdmin";


function MoviesAdmin({movies, setTriggerMoviesRender}) {
    const [api, contextHolder] = notification.useNotification();
    const openNotificationWithIcon = (type, msg) => {
        api[type]({
            message: 'Movie status changed successfully',
            description: msg,
        });
    };
    const [currentMovieId, setCurrentMovieId] = useState();
    const [display, setDisplay] = useState("");

    function switchStatus(id, name) {
        return changeMovieStatus(id).then(() => {
                setTriggerMoviesRender(`Rerender movies at ${new Date()}`);
                openNotificationWithIcon('warning', `${name}'s status was changed!`)
            }
        );
    }

    const columns = [
        {
            title: "Movie Id",
            dataIndex: "id",
        },
        {
            title: "Name",
            dataIndex: "name"
        },
        {
            title: "Duration",
            dataIndex: "duration"
        },
        {
            title: "Promoted",
            render: (_, {promoted}) => (promoted === true ? 'Yes' : 'No')
        },
        {
            title: "3D",
            render: (_, {is3D}) => (is3D === true ? 'Yes' : 'No')
        },
        {
            title: "Status",
            dataIndex: "status"
        },
        {
            title: "Switch status",
            render: (_, record) => (record.status === 'PLAYING') &&
                <Popconfirm title={"Are you sure you want to cancel this movie"}
                            onConfirm={() => switchStatus(record.id, record.name)}>
                    <Button danger type="primary" shape="round" size={"small"}>Cancel Movie</Button>
                </Popconfirm> ||
                (record.status === 'CANCELED') &&
                <Popconfirm title={"Are you sure you want to activate this user"}
                            onConfirm={() => switchStatus(record.id, record.name)}>
                    <Button type="primary" shape="round" size={"small"}>Activate Movie</Button>
                </Popconfirm>
        },
        {
            title: "Details",
            render: (_, {id}) => (<Button size={"small"} shape="round" onClick={() => {
                setCurrentMovieId(id);
                setDisplay("VIEW")
            }}>Details</Button>)
        }
    ]

    return <>
        <Layout>
            {contextHolder}
            <Layout.Content>
                <Row>
                    <Col span={12}>
                        <Card style={{marginLeft: "25px"}}>
                            <Table dataSource={movies} columns={columns} rowKey={"id"} size={"small"}/>
                            <Button onClick={() => setDisplay("ADD")}>Add Movie</Button>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{marginLeft: "25px", minHeight: "670px", width: "860px"}}>
                            {display === 'ADD' && <AddMovie setTriggerMoviesRender={setTriggerMoviesRender}/>}
                            {display === 'VIEW' && <MovieDetailsAdmin movieId={currentMovieId}/>}
                        </Card>
                    </Col>
                </Row>
            </Layout.Content>
        </Layout>
    </>
}

export default MoviesAdmin;