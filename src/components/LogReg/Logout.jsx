import React from 'react';
import {useDispatch} from "react-redux";

import {logoutKlant} from "./../../data/klant"

export default function Logout(){
    const dispatch = useDispatch();

    const logoutHandler = (e) => {
        e.preventDefault();
        dispatch(logoutKlant());
    }

    return (
        <>
            <a onClick={logoutHandler}>Log out</a>
        </>
    )

}