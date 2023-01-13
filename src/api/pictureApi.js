import axios from "axios";

export async function getPictureForMovie(imgName) {
    const response = await axios.get(`http://localhost:8080/api/v1/pictures/${imgName}`);
    return response.data;
}