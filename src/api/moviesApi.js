import axios from "axios";

export async function getMovies(setMovies) {
    await axios.get(`http://localhost:8080/api/v1/movies`)
        .then((response) => {
            console.log(response.data);
            setMovies(response.data);
        })
        .catch((e) => {
            console.log(e.message);
        });
}

export async function getMovieById(id, setMovie, setIsMovieFound) {
    await axios.get(`http://localhost:8080/api/v1/movies/${id}`)
        .then((response) => {
            console.log(response.data);
            setMovie(response.data);
        })
        .catch((e) => {
            console.log(e.message);
            setIsMovieFound(false);
        })
}

export async function getMovieEventsForMovie(id, setMovieEvents) {
    await axios.get(`http://localhost:8080/api/v1/movie-events/movie/${id}`)
        .then((response) => {
            const map = response.data.map((singleData) => {
                return {
                    ...singleData, movieTime: new Date(singleData.playMovieDateTime).toTimeString().slice(0, 8),
                    movieDate: new Date(singleData.playMovieDateTime).toISOString().slice(0, 10)
                }
            });
            console.log(map);
            setMovieEvents(map);
        })
        .catch((e) => {
            console.log(e.message);
        })
}