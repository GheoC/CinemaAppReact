import axios from "axios";

export async function buyTicket(movieEventId, userId, priceCharged, logout) {
    const token = localStorage.getItem("token");
    console.log(`User ${userId} bought ticket for movieEvent nr. ${movieEventId} for ${priceCharged} lei`);

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
    ).catch((e) => {
        if (e.response.status === 401) {
            console.log("Token has expired! Login again")
            logout();
        }
    });
}

export async function getTicketsForUsers(userId, setTickets) {
    const token = localStorage.getItem("token");
    await axios.get(`http://localhost:8080/api/v1/tickets/user/${userId}`, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
        .then((response) => {
            const tickets = response.data.map((singleData) => {
                return {...singleData, playDate: new Date(singleData.playMovieDateTime).toUTCString()}
            });
            console.log(tickets);
            setTickets(tickets);
        }).catch((e) => {
            console.log(e.message)
        })
}

export async function cancelTicket(ticketId, logout) {
    const token = localStorage.getItem("token");
    console.log(token);
    console.log(ticketId);
    await axios.put(`http://localhost:8080/api/v1/tickets/${ticketId}`, {}, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }
    ).catch((e) => {
        if (e.response.status === 401) {
            console.log("Token has expired! Login again")
            logout();
        }
    });
}