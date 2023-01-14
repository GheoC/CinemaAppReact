import {useEffect, useState} from "react";
import {getMovieEventsForMovie, getMovies} from "../../api/moviesApi";
import {Card, Col, Layout, Row, Select, Space} from "antd";
import MovieEventsView from "../../components/MovieEventsView/MovieEventsView";

function MovieEventsAdmin() {
    const [movies, setMovies] = useState();
    const [selectedMovie, setSelectedMovie] = useState();
    const [movieEvents, setMovieEvents] = useState();

    useEffect(() => {
        getMovies().then(response => setMovies(response.data))
            .catch((e) =>
                console.log(e.message)
            );
    }, []);

    const eventOnSelect = (value) => {
        const selected = movies?.filter((movie) => movie.name === value);
        setSelectedMovie(selected[0]);
        getMovieEventsForMovie(selected[0].id).then((response) => setMovieEvents(response.data));
    }

    return <>
        <Layout>
            <Layout.Content>
                <Space style={{display: "flex"}}>
                    <Select placeholder={"Select movie"} style={{width: "400px"}} onSelect={eventOnSelect}>
                        {
                            movies?.map((movie) => {
                                return <Select.Option key={movie.id} value={movie.name}/>
                            })
                        }
                    </Select>
                </Space>
            </Layout.Content>
            <Layout.Content>
                <Row>
                    <Col>
                        <MovieEventsView movieEvents={movieEvents}/>
                    </Col>
                    <Col>
                        {selectedMovie && <Card> Add Movie Events Here for {selectedMovie.id}</Card>}
                    </Col>
                </Row>
            </Layout.Content>
        </Layout>
    </>
}

export default MovieEventsAdmin;