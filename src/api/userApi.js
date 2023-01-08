import axios from "axios";

export async function getUserById(userId, setUser, logout) {
    const token = localStorage.getItem("token");
    await axios.get(`http://localhost:8080/api/v1/users/${userId}`, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }
    )
        .then((response) => setUser(response.data))
        .catch((e) => {
            if (e.response.status === 401) {
                console.log("Token has expired! Login again")
                logout();
            }
            if (e.response.status === 403) {
                console.log("Access Denied");
            }
        });
}

export async function changeUserStatus(userId, logout) {
    const token = localStorage.getItem("token");
    await axios.put(`http://localhost:8080/api/v1/users/${userId}/status`, {}, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
        .catch((e) => {
            if (e.response.status === 401) {
                console.log("Token has expired! Login again")
                logout();
            }
            if (e.response.status === 403) {
                console.log("Access Denied");
            }
        })
}

export async function getAllUsers(setUsers, logout) {
    const token = localStorage.getItem("token");
    await axios.get("http://localhost:8080/api/v1/users", {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
        .then((response) => {
            setUsers(response.data);
        })
        .catch((e) => {
            if (e.response.status === 401) {
                console.log("Token has expired! Login again")
                logout();
            }
            if (e.response.status === 403) {
                console.log("Access Denied");
            }
        })
}