import {useEffect, useState} from "react";
import {getTicketsForUsers} from "../../api/ticketsApi";
import {useAuthContext} from "../../context/AuthProvider/AuthProvider";
import TicketsView from "../../components/TicketsView/TicketsView";

function Tickets() {
    const {userId} = useAuthContext();
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        getTicketsForUsers(userId, setTickets);
    }, [])

    return <>
        <TicketsView tickets={tickets}/>
    </>
}

export default Tickets;