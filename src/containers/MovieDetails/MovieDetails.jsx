import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getMovieById} from "../../api/moviesApi";
import {getMovieEventsForMovie} from "../../api/movieEventsApi";
import PageNotFound from "../../components/PageNotFound";
import {useAuthContext} from "../../context/AuthProvider/AuthProvider";
import MovieDetailsView from "../../components/MovieDetailsView";
import {buyTicket} from "../../api/ticketsApi";

function MovieDetails() {
    const {id} = useParams();
    const [movie, setMovie] = useState();
    const [isMovieFound, setIsMovieFound] = useState(true);
    const [movieEvents, setMovieEvents] = useState();
    const {userId, username, logout} = useAuthContext();

    const movieCelebrities = movie?.celebrities.reduce((acc, celebrity) => {
        return `${acc} ${celebrity}, `;
    }, '');

    const movieGenre = movie?.genres.reduce((acc, genre) => {
        return `${acc} ${genre} ●`;
    }, '');

    useEffect(() => {
        getMovieById(id)
            .then((response) => {
                console.log(response.data);
                setMovie(response.data);
            })
            .catch((e) => {
                console.log(e.message);
                setIsMovieFound(false);
            });

        getMovieEventsForMovie(id, 'ACTIVE')
            .then((response) => {
                const movieEvents = response.data.map((singleData) => {
                    return {
                        ...singleData,
                        movieTime: new Date(singleData.playMovieDateTime).toTimeString().slice(0, 8),
                        movieDate: new Date(singleData.playMovieDateTime).toISOString().slice(0, 10)
                    }
                });
                console.log(movieEvents);
                setMovieEvents(movieEvents);
            })
            .catch((e) => {
                console.log(e.message);
            });
    }, []);

    if (!isMovieFound || movie?.status === 'CANCELED') {
        return <PageNotFound/>
    }

    return <MovieDetailsView movie={movie} movieCelebrities={movieCelebrities} movieGenre={movieGenre}
                             movieEvents={movieEvents} username={username} userId={userId} logout={logout}
                             buyTicket={buyTicket}/>
}

export default MovieDetails;