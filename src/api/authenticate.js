import axios from "axios";

const API_URL = 'http://localhost:3001';

export const loginFromJson = async ({username, password}) => {
    const response = await fetch(`${API_URL}/users`);
    const users = await response.json();

    const user = users.find((user) => user.password === password & user.username === username);

    if (user) {
        return user;
    }
    throw new Error('Bad Credentials');
}

export async function authenticate(username, password) {
    const response = await axios.post('http://localhost:8080/authenticate',
        {
            username: username,
            password: password
        });
    if (response.status === 200) {
        return response.data;
    }
    throw new Error('Bad Credentials');
}