import {useEffect, useState} from "react";
import {getAllUsers} from "../../api/userApi";
import UsersView from "../../components/UsersView";
import {useAuthContext} from "../../context/AuthProvider/AuthProvider";

function Users() {
    const {logout} = useAuthContext();
    const [users, setUsers] = useState([]);
    const [triggerRenderMsg, setTriggerRenderMsg] = useState('');

    useEffect(() => {
        getAllUsers()
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
    }, [triggerRenderMsg]);

    return <>
        <UsersView users={users} setTriggerRenderMsg={setTriggerRenderMsg}/>
    </>
}

export default Users;