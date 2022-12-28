import {useEffect, useState} from "react";
import MovieCard from "../../components/MovieCard";
import {getMovies} from "../../api/moviesApi";

function Movies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getMovies(setMovies);
    }, [])

    return <>
        <div className={"container-fluid"}>
            <div className={'row'}>
                <div className={"col-12 movies__all-container"}>
                    <div className={"row"} style={{paddingLeft:"50px"}}>
                        {movies.map(({id, name, duration, trailer, director, type}) =>
                            <MovieCard key={id} name={name} trailer={trailer} type={type} duration={duration}
                                       director={director}></MovieCard>)}
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Movies;