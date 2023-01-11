import {useEffect, useState} from "react";
import {getMovieById} from "../../api/moviesApi";
import {Typography} from "antd";

function MovieDetailsAdmin({movieId}) {
    const [movie, setMovie] = useState();
    const [movieFound, setMovieFound] = useState(true);

    useEffect(() => {
        getMovieById(movieId)
            .then((response) => {
                console.log(response.data);
                setMovie(response.data);
            })
            .catch((e) => {
                console.log(e.message);
                setMovieFound(false);
            })
    }, [movieId]);

    return <>
        <Typography.Paragraph>movie id: {movie?.id}</Typography.Paragraph>
        <Typography.Paragraph>movie name: {movie?.name}</Typography.Paragraph>
        <Typography.Paragraph>trailer link: {movie?.trailer}</Typography.Paragraph>
        <Typography.Paragraph>img link: {movie?.img}</Typography.Paragraph>
        <Typography.Paragraph>3D: {movie?.is3D === true ? 'true' : 'false'}</Typography.Paragraph>
        <Typography.Paragraph>description: {movie?.description}</Typography.Paragraph>
        <Typography.Paragraph>Promoted: {movie?.promoted === true ? 'true' : 'false'}</Typography.Paragraph>
        <Typography.Paragraph>IMDB score: {movie?.imdb}</Typography.Paragraph>
        <Typography.Paragraph>Director: {movie?.director}</Typography.Paragraph>
        <Typography.Paragraph>Status: {movie?.status}</Typography.Paragraph>
        <Typography.Paragraph>Premier Date: {movie?.premierDate}</Typography.Paragraph>
        <Typography.Paragraph>Language: {movie?.language}</Typography.Paragraph>
        <Typography.Paragraph>Subtitles: {movie?.subtitles}</Typography.Paragraph>
        <Typography.Paragraph>Genres: {movie?.genres.toString()}</Typography.Paragraph>
        <Typography.Paragraph>Celebrities: {movie?.celebrities.toString()}</Typography.Paragraph>

    </>
}

export default MovieDetailsAdmin;