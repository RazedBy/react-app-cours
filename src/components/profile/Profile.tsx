import React, { useEffect, useState } from "react";
import { getUserInformation } from "../../services/api-service";
import './profile.css'
import { useNavigate } from "react-router-dom";
export interface profileInterface {
    username: string,
    email: string,
    firstName: string,
    lastName: string,
    iat: number,
    exp: number

}
export default function Profile() {
    const navigate = useNavigate();

    const accessToken = localStorage.getItem('accessToken')
    const [user, setUser] = useState();
    useEffect(() => {
        async function fetchData() {
            const data = await getUserInformation(accessToken);
            setUser(data.user)
        }
        fetchData();
    }, [accessToken]);

    function logout(){
        localStorage.removeItem('accessToken');
        navigate('/')
        window.location.reload();
    }
    return (
        <div className="container card">
            <div className="profile">
                <div className="profile-picture">
                    
                </div>

                <div className="profile-group">
                    <h3>Nom d'utilisateur</h3>
                    {user && <p>{(user as profileInterface).username}</p>}
                </div>
                <div className="profile-group">
                    <h3>Email</h3>
                    {user && <p>{(user as profileInterface).email}</p>}
                </div>
                <div className="profile-group">
                    <h3>Nom</h3>
                    {user && <p>{(user as profileInterface).firstName}</p>}
                </div>
                <div className="profile-group">
                    <h3>Prénom</h3>
                    {user && <p>{(user as profileInterface).lastName}</p>}
                </div>

                <div className="logout" onClick={logout}>
                    <span>Log-out</span>
                </div>

            </div>

        </div>
    )

}