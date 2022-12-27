import {useEffect, useState} from "react";
import {Space} from "antd";
import Movie from "../../components/Movie";
import {getMovies} from "../../api/moviesApi";

function Movies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getMovies(setMovies);
    }, [])

    return <>
        <Space size="large" direction="vertical"
               style={{marginLeft: "80px", marginTop: "20px", maxWidth: "100%"}}>
            {movies.map(({id, name, duration, trailer, director, type}) =>
                <Movie key={id} name={name} trailer={trailer} type={type} duration={duration}
                       director={director}></Movie>)}
        </Space>
    </>
}

export default Movies;