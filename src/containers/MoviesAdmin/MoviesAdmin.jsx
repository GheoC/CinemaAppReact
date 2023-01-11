import {Button, Card, Col, Layout, Row, Table} from "antd";
import {useEffect, useState} from "react";
import {getMovies} from "../../api/moviesApi";
import AddMovie from "../AddMovie";
import MovieDetailsAdmin from "../MovieDetailsAdmin";

function MoviesAdmin() {
    const [movies, setMovies] = useState([]);
    const [currentMovieId, setCurrentMovieId] = useState();
    const [display, setDisplay] = useState("");
    const [triggerMoviesRender, setTriggerMoviesRender] = useState({});

    useEffect(() => {
        getMovies()
            .then((response) => {
                console.log(response.data);
                setMovies(response.data);
            })
            .catch((e) => {
                console.log(e.message);
            });
    }, [triggerMoviesRender]);

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
            title: "Details",
            render: (_, {id}) => (<Button onClick={() => {
                setCurrentMovieId(id);
                setDisplay("VIEW")
            }}>Details</Button>)
        }
    ]

    return <>
        <Layout>
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