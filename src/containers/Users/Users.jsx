import {useEffect, useState} from "react";
import {getAllUsers} from "../../api/userApi";
import UsersView from "../../components/UsersView";

function Users() {
    const [users, setUsers] = useState([]);
    const [triggerRenderMsg, setTriggerRenderMsg] = useState('');

    useEffect(() => {
        getAllUsers(setUsers)
    }, [triggerRenderMsg]);

    return <>
        <UsersView users={users} setTriggerRenderMsg={setTriggerRenderMsg}/>
    </>
}

export default Users;