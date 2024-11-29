import React, { useEffect } from "react";
import './login.css'
import { checkPassword } from "../../services/api-service";
import NotificationService from "../../services/Notications";
import { ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
export default function Login() {

    const navigate = useNavigate()
  
    async function login(event: any) {
        event.preventDefault(); // Prevent default form submission

        const formData = new FormData(event.target); // Get form data
        const username = formData.get("username"); // Access individual form fields
        const password = formData.get("password");
        const data = await checkPassword(username, password);
        console.log(data)
        if(data){
            console.log(data)
            localStorage.setItem('accessToken',data)
            NotificationService.success('Authentification success');
            navigate('/')
            window.location.reload();
        }else{
            NotificationService.error('Authentification Error')
        }

        console.log({ username, password }); // Handle login logic here
    }

    return (
        <>
        <div className="container card">
            <h1 className="text-center">Login</h1>
            <form onSubmit={login} className="form">
                <div className="form-group">
                    <label htmlFor="username">Username <span style={{color:'red'}}>*</span></label>
                    <input type="text" name="username" className="form-input" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password <span style={{color:'red'}}>*</span></label>
                    <input type="password" name="password" className="form-input" required />
                </div>
                <button type="submit" className="form-submit">Login</button>
            </form>
            <ToastContainer />
        </div>
        </>
    );
}