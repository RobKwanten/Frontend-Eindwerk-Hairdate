import React, {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";

import { loginKlant } from "./../../data/klant"

export default function Login(){
    const dispatch= useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [inputError, setInputError] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        if(email === "" || password === ""){
            setInputError("All login fields are required");
            return null;
        }
        dispatch(loginKlant(email, password));
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                Email: <input type="text" value={email} onChange={(e)=>{
                    setInputError("");
                    setEmail(e.target.value)
                }}/>
                Password: <input type="password" value={password} onChange={(e)=>{
                    setInputError("");
                    setPassword(e.target.value)
                }}/>
                <button type='submit'>Log in</button>
            </form>
            
        </>
    )

}