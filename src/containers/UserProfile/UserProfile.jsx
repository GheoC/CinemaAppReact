import {useAuthContext} from "../../context/AuthProvider/AuthProvider";
import {useEffect, useState} from "react";
import {getUserById} from "../../api/userApi";
import UserProfileView from "../../components/UserProfileView/UserProfileView";


function UserProfile() {
    const {userId, logout, role} = useAuthContext();
    const [user, setUser] = useState({})

    useEffect(() => {
        getUserById(userId, setUser, logout);
    }, [])

    return <>
        <UserProfileView user={user} userId={userId} logout={logout} role={role}/>
    </>
}

export default UserProfile;