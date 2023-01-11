import {useAuthContext} from "../../context/AuthProvider/AuthProvider";
import {useEffect, useState} from "react";
import {getUserById} from "../../api/userApi";
import UserProfileView from "../../components/UserProfileView/UserProfileView";


function UserProfile() {
    const {userId, logout, role} = useAuthContext();
    const [user, setUser] = useState({})

    useEffect(() => {
        getUserById(userId)
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
    }, [])

    return <>
        <UserProfileView user={user} userId={userId} logout={logout} role={role}/>
    </>
}

export default UserProfile;