import axios from "axios";

export async function getUserById(userId) {
    const token = localStorage.getItem("token");
    return await axios.get(`http://localhost:8080/api/v1/users/${userId}`, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }
    );
}

export async function changeUserStatus(userId) {
    const token = localStorage.getItem("token");
    await axios.put(`http://localhost:8080/api/v1/users/${userId}/status`, {}, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    });
}

export async function getAllUsers() {
    const token = localStorage.getItem("token");
    return await axios.get("http://localhost:8080/api/v1/users", {
        headers: {
            Authorization: 'Bearer ' + token
        }
    });
}