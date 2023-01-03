import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getMovieById, getMovieEventsForMovie} from "../../api/moviesApi";
import PageNotFound from "../../components/PageNotFound";
import {useAuthContext} from "../../context/AuthProvider/AuthProvider";
import MovieDetailsView from "../../components/MovieDetailsView";

function MovieDetails() {
    const {id} = useParams();
    const [movie, setMovie] = useState();
    const [isMovieFound, setIsMovieFound] = useState(true);
    const [movieEvents, setMovieEvents] = useState();
    const {username} = useAuthContext();

    const movieCelebrities = movie?.celebrities.reduce((acc, celebrity) => {
        return `${acc} ${celebrity}, `;
    }, '');

    const movieGenre = movie?.genres.reduce((acc, genre) => {
        return `${acc} ${genre} ●`;
    }, '');

    useEffect(() => {
        getMovieById(id, setMovie, setIsMovieFound)
    }, []);

    useEffect(() => {
        getMovieEventsForMovie(id, setMovieEvents)
    }, []);

    if (!isMovieFound) {
        return <PageNotFound/>
    }

    return <MovieDetailsView movie={movie} movieCelebrities={movieCelebrities} movieGenre={movieGenre}
                             movieEvents={movieEvents} username={username}/>
}

export default MovieDetails;