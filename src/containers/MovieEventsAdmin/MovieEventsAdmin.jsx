import {useState} from "react";
import {getMovieEventsForMovie, saveMovieEvents} from "../../api/moviesApi";
import {Col, Layout, Row, Select, Space} from "antd";
import MovieEventsView from "../../components/MovieEventsView/MovieEventsView";
import AddMovieEvents from "../AddMovieEvents";

function MovieEventsAdmin({movies}) {
    const [selectedMovie, setSelectedMovie] = useState();
    const [movieEvents, setMovieEvents] = useState();

    const eventOnSelect = (value) => {
        const selected = movies?.filter((movie) => movie.name === value);
        setSelectedMovie(selected[0]);
        getMovieEventsForMovie(selected[0].id).then((response) => setMovieEvents(response.data));
    }

    const onFinish = ({movieEvents}) => {
        const completeMovieEvents = movieEvents.map((movieEvent) => {
            return {movieDtoId: selectedMovie.id, ...movieEvent}
        });
        saveMovieEvents(completeMovieEvents)
            .then(() => getMovieEventsForMovie(selectedMovie.id)
                .then((response) => setMovieEvents(response.data)));
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
                        {selectedMovie && <AddMovieEvents movieId={selectedMovie.id} movieName={selectedMovie.name}
                                                          onFinish={onFinish}/>}
                    </Col>
                </Row>
            </Layout.Content>
        </Layout>
    </>
}

export default MovieEventsAdmin;