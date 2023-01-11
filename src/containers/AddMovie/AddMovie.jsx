import AddMovieView from "../../components/AddMovieView";
import {createMovie} from "../../api/moviesApi";

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
        createMovie(movieData)
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