import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getMovieById} from "../../api/moviesApi";
import {Card, Col, Layout, Row, Typography} from "antd";
import PageNotFound from "../../components/PageNotFound";
import Meta from "antd/es/card/Meta";

function MovieDetails() {
    const {id} = useParams();
    const [movie, setMovie] = useState();
    const [isMovieFound, setIsMovieFound] = useState(true);

    useEffect(() => {
        getMovieById(id, setMovie, setIsMovieFound)
    }, [])

    if (!isMovieFound) {
        return <PageNotFound/>
    }

    return <>
        <Layout>
            <Layout.Content>
                <Row>
                    <Col>
                        <Card style={{width: "800px", marginTop: "25px", marginLeft: "25px"}}>
                            <Typography.Title> {movie?.name}</Typography.Title>
                            <Typography.Paragraph>Director: {movie?.director}</Typography.Paragraph>
                            <iframe width="750" height="500"
                                    src={movie?.trailer} title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen>
                            </iframe>
                            <Meta description={movie?.type} style={{textAlign: "right"}}></Meta>
                            <Meta description={`${movie?.duration} minutes`} style={{textAlign: "right"}}></Meta>
                            <></>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{width: "775px", margin: "25px"}}>
                            <Typography.Title>Movie Schedule: ...</Typography.Title>
                        </Card>
                    </Col>
                </Row>
            </Layout.Content>
        </Layout>

    </>
}

export default MovieDetails;