import {useEffect, useState} from "react";
import {getTicketsForUsers} from "../../api/ticketsApi";
import {useAuthContext} from "../../context/AuthProvider/AuthProvider";
import TicketsView from "../../components/TicketsView";

function Tickets() {
    const [triggerRenderMsg, setTriggerRenderMsg] = useState('');
    const {userId, username, logout} = useAuthContext();
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        getTicketsForUsers(userId)
            .then((response) => {
                const tickets = response.data.map((singleData) => {
                    return {...singleData, playDate: new Date(singleData.playMovieDateTime).toUTCString()}
                });
                console.log(tickets);
                setTickets(tickets);
            }).catch((e) => {
            console.log(e.message)
        });
    }, [triggerRenderMsg])

    return <>
        <TicketsView tickets={tickets} username={username} logout={logout} setTriggerRenderMsg={setTriggerRenderMsg}/>
    </>
}

export default Tickets;