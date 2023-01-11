import axios from "axios";

export async function buyTicket(movieEventId, userId, priceCharged) {
    const token = localStorage.getItem("token");
    await axios.post("http://localhost:8080/api/v1/tickets",
        {
            userId: userId,
            movieEventId: movieEventId,
            priceCharged: priceCharged
        }, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }
    );
}

export async function getTicketsForUsers(userId) {
    const token = localStorage.getItem("token");
    return await axios.get(`http://localhost:8080/api/v1/tickets/user/${userId}`, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    });
}

export async function cancelTicket(ticketId) {
    const token = localStorage.getItem("token");
    await axios.put(`http://localhost:8080/api/v1/tickets/${ticketId}`, {}, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }
    );
}