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