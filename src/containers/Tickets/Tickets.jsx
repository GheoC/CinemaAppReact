import {useEffect, useState} from "react";
import {getTicketsForUsers} from "../../api/ticketsApi";
import {useAuthContext} from "../../context/AuthProvider/AuthProvider";
import TicketsView from "../../components/TicketsView/TicketsView";

function Tickets() {
    const [triggerRenderMsg, setTriggerRenderMsg] = useState('');
    const {userId, username, logout} = useAuthContext();
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        getTicketsForUsers(userId, setTickets);
    }, [triggerRenderMsg])

    return <>
        <TicketsView tickets={tickets} username={username} logout={logout} setTriggerRenderMsg={setTriggerRenderMsg}/>
    </>
}

export default Tickets;