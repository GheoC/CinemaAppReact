import axios from "axios";

export async function getMovies() {
    const token = localStorage.getItem("token");
    return await axios.get(`http://localhost:8080/api/v1/movies`, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    });
}

export async function getPlayingMovies() {
    return await axios.get(`http://localhost:8080/api/v1/movies/playing`);
}

export async function getMovieById(id) {
    return await axios.get(`http://localhost:8080/api/v1/movies/${id}`);
}

export async function getMovieEventsForMovie(id) {
    return await axios.get(`http://localhost:8080/api/v1/movie-events/movie/${id}`);
}

export async function saveMovieEvents(movieEvents) {
    const token = localStorage.getItem("token");
    return await axios.post(`http://localhost:8080/api/v1/movie-events/list`, movieEvents, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    });
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

export async function changeMovieStatus(id) {
    const token = localStorage.getItem("token");
    return await axios.put(`http://localhost:8080/api/v1/movies/${id}`, {},
        {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
}