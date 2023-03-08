import React, {useState} from "react";
import Axios from "axios";
import { Login } from "./Login";


export const Register = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [DOB, setDOB] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [RegisterStatus, setRegisterStatus] = useState("");

    const register = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:3001/register", {
            firstName: firstName,
            lastName: lastName,
            DOB: DOB,
            email: email,
            password: password,
            RegisterStatus: RegisterStatus,
        }).then((response) =>
        {
            if(response.data.message) {
                setRegisterStatus(response.data.message);
            } else {
                setRegisterStatus("Account Created Successfully ");
            }
        })

    }

    return (
        <div className="form-container">
            
            <h1> Register </h1>
            
            <form className="form">
            
                <input id="register-first-name" type="text" placeholder="First name" name="reg-first-name"  onChange={(e) => {setFirstName(e.target.value) }}  required/>
                <input id="register-last-name" type="text" placeholder="Last name" name="reg-last-name" onChange={(e) => {setLastName(e.target.value) }}  required/>
                <input id="register-dob" type="date" placeholder="Date of birth" name="reg-dob" onChange={(e) => {setDOB(e.target.value) }}  required/>
            
                <input id="register-email" type="email" placeholder="Email" name="reg-email" onChange={(e) => {setEmail(e.target.value) }}  required/>
                <input id="register-password" type="password" placeholder="Password" name="reg-password" onChange={(e) => {setPassword(e.target.value) }}  required/>
            
                <button onClick={register} type="submit"> Register </button>
                
                
            
            </form> 

            <button className="link-btn" onClick={Login}> Already have an account? Login here </button>

            <h3> {RegisterStatus} </h3>

        </div>

        
    );
}