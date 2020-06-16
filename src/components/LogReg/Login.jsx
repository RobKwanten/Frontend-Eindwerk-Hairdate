import React, {useState} from 'react';
import { useDispatch } from "react-redux";

import { loginKlant } from "./../../data/klant"
//import '../../logreg.css'

export default function Login(){
    const dispatch= useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(loginKlant(email, password));
    }

    return (
        <>
            <main>
                <h1>Hairdate</h1>
                <form onSubmit={submitHandler}>
                    <nav>
                        <a href="#0" className="active">Log in</a>
                        <a href="/register">Registreer</a>
                    </nav>
                    <div className="form-field">
                        <label for="email">Email Adres</label>
                        <input type="email" id="email" name="email" value={email} onChange={(e)=>{
                        setEmail(e.target.value)
                    }}/>
                    </div>
                    <div className="form-field">
                        <label for="password">Wachtwoord</label>
                        <input type="password" id="password" name="password" value={password} onChange={(e)=>{
                        setPassword(e.target.value)
                    }}/>
                    </div>
                    <input type="submit" value="Log in" className="button"/>
                </form> 
                <a href="#0" className="forgot-password">Wachtwoord vergeten?</a> 
            </main>       
        </>
    )
}