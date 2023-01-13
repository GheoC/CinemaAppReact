import axios from "axios";

export async function getPictureForMovie(imgName) {
    const response = await axios.get(`http://localhost:8080/api/v1/pictures/${imgName}`);
    return response.data;
}

export async function uploadPicture(picture) {
    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append('picture', picture);
    await axios.post(`http://localhost:8080/api/v1/pictures`, formData,
        {
            headers: {
                Authorization: 'Bearer ' + token,
                'content-type': 'multipart/form-data'
            }
        });
}