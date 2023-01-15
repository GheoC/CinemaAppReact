import AddMovieView from "../../components/AddMovieView";
import {createMovie} from "../../api/moviesApi";
import {uploadPicture} from "../../api/pictureApi";

function AddMovie({setTriggerMoviesRender, openNotificationWithIconFromAdmin}) {
    const onFinish = (formData) => {
        const fileUploaded = formData.upload[0].originFileObj;
        const movieData = {
            ...formData,
            celebrities: formData.celebrities.map(({name}) => {
                return name
            }),
            genres: formData.genres.map(({genre}) => {
                return genre
            }),
            img: fileUploaded.name,
            premierDate: formData.premierDate.toISOString().slice(0, 10)
        }
        createMovie(movieData)
            .then((response) => {
                uploadPicture(fileUploaded).then(() => console.log('Upload Successfully'));
                setTriggerMoviesRender(response.data);
                openNotificationWithIconFromAdmin('success', 'Movie added successfully', `Movie ${movieData.name}`);
            })
            .catch((e) => {
                console.log(e.message);
                openNotificationWithIconFromAdmin('error', `Movie failed to be added`, `Please check again the information you have entered`)
            })
    };

    return <>
        <AddMovieView onFinish={onFinish}/>
    </>
}

export default AddMovie;