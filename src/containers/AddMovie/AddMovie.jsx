import axios from "axios";
import AddMovieView from "../../components/AddMovieView";

function AddMovie({setTriggerMoviesRender}) {

    const onFinish = (formData) => {
        const movieData = {
            ...formData,
            celebrities: formData.celebrities.map(({name}) => {
                return name
            }),
            genres: formData.genres.map(({genre}) => {
                return genre
            }),
            premierDate: formData.premierDate.toISOString().slice(0, 10)
        }
        const token = localStorage.getItem("token");
        axios.post("http://localhost:8080/api/v1/movies", {...movieData},
            {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
            .then((response) => setTriggerMoviesRender(response.data))
            .catch((e) => {
                console.log(e.message);
            })
    };

    return <>
        <AddMovieView onFinish={onFinish}/>
    </>
}

export default AddMovie;