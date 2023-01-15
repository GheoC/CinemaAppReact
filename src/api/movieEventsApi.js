import axios from "axios";

export async function getMovieEventsForMovie(id, status) {
    if (status !== undefined) {
        return await axios.get(`http://localhost:8080/api/v1/movie-events/movie/${id}?status=${status}`);
    }
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

export async function switchStatusForMovieEvent(id) {
    const token = localStorage.getItem("token");
    return await axios.put(`http://localhost:8080/api/v1/movie-events/${id}`, {}, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    });
}