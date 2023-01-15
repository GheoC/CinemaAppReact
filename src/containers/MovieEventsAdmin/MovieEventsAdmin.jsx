import {useState} from "react";
import {getMovieEventsForMovie, saveMovieEvents, switchStatusForMovieEvent} from "../../api/movieEventsApi";
import {Col, Layout, Row, Select, Space} from "antd";
import MovieEventsView from "../../components/MovieEventsView/MovieEventsView";
import AddMovieEvents from "../AddMovieEvents";

function MovieEventsAdmin({movies, openNotificationWithIconFromAdmin}) {
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
            .then(() => {
                getMovieEventsForMovie(selectedMovie.id, undefined)
                    .then((response) => setMovieEvents(response.data));
                openNotificationWithIconFromAdmin('success', `Movie events added`, `Movie events added for movie ${selectedMovie.name}`);
            })
            .catch(() => {
                openNotificationWithIconFromAdmin('error', `Movie events failed to be added`, `There is another movie event on the same date and time`);
            });
    }

    const switchMovieEventStatus = (movieEventId) => {
        switchStatusForMovieEvent(movieEventId)
            .then(() => {
                getMovieEventsForMovie(selectedMovie.id, undefined)
                    .then((response) => setMovieEvents(response.data));
                openNotificationWithIconFromAdmin('warning', `Movie event change`, `Movie event ${movieEventId} status was changed!`);
            })
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
                        <MovieEventsView movieEvents={movieEvents} switchMovieEventStatus={switchMovieEventStatus}/>
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