import React from "react";
import NotificationService from "../../services/Notications";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { registerUser } from "../../services/api-service";

export default function Register(){
    const navigate = useNavigate()
  
    async function register(event: any) {
        event.preventDefault(); // Prevent default form submission

        const formData = new FormData(event.target); // Get form data
        const username = formData.get("username"); // Access individual form fields
        const email = formData.get('email');
        const password = formData.get("password");
        const firstName = formData.get('firstName');
        const lastName = formData.get('lastName');
        const data = await registerUser(username,email, password,firstName,lastName);
        console.log(data.status)
        if(data.error){
            console.log(data)
            NotificationService.error(data.error)
        }else{
            console.log(data)
            NotificationService.success('Profile create');
            navigate('/')
            window.location.reload();
        }

        console.log({ username, password }); // Handle login logic here
    }

    return (
        <>
        <div className="container card">
            <h1 className="text-center">Register</h1>
            <form onSubmit={register} className="form">
                <div className="form-group">
                    <label htmlFor="username">Username <span style={{color:'red'}}>*</span></label>
                    <input type="text" name="username" className="form-input" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="username">Email <span style={{color:'red'}}>*</span></label>
                    <input type="email" name="email" className="form-input" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password <span style={{color:'red'}}>*</span></label>
                    <input type="password" name="password" className="form-input" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">First name</label>
                    <input type="text" name="firstName" className="form-input"  />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Last name</label>
                    <input type="text" name="lastName" className="form-input" />
                </div>
                <button type="submit" className="form-submit">Register</button>
                <p>Vous avez un compte ?<Link to='/login'>Cliquez ici</Link></p>
            </form>
            <ToastContainer />
        </div>
        </>
    );
}