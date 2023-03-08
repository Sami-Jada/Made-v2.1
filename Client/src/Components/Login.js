import { useState } from "react";
import { Register } from "./Register";
import Axios from "axios";

export const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [LoginStatus, setLoginStatus] = useState("");


    const login = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:3001/login", {
            email: email,
            password: password,
            LoginStatus: LoginStatus,
        }).then((response) =>
        {
            if(response.data.message) {
                setLoginStatus(response.data.message);
            } else {
                setLoginStatus(response.data[0].email);
            }
        })
    }


    return(
        
        <div className="form-container">
            
            <h1> Login </h1>

            <form className="form">
                
                <input id="login-email" type="email" placeholder="Email" name="email" onChange={(e) => {setEmail(e.target.value) }} />
                <input id="login-password" type="password" placeholder="Password" name="password" onChange={(e) => {setPassword(e.target.value) }} />
                
                <button type="submit" onClick = {login}> Log in </button>
                
                <h1> {LoginStatus} </h1>
            
            </form>

            <button  onClick={Register} className="link-btn"> Don't have an account? Register here </button>
        
        </div>
          
    );
}