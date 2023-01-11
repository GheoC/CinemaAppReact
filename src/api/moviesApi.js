import axios from "axios";

export async function getMovies() {
    return await axios.get(`http://localhost:8080/api/v1/movies`);
}

export async function getMovieById(id) {
    return await axios.get(`http://localhost:8080/api/v1/movies/${id}`);
}

export async function getMovieEventsForMovie(id) {
    return await axios.get(`http://localhost:8080/api/v1/movie-events/movie/${id}`);
}

export async function createMovie(movie) {
    const token = localStorage.getItem("token");
    return await axios.post("http://localhost:8080/api/v1/movies", {...movie},
        {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
}