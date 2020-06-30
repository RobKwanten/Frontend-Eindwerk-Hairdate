import React from 'react';
import {useSelector, useDispatch} from 'react-redux'

import {logoutKlant} from "./../../data/klant"

export default function Header(){
    
    const dispatch = useDispatch();
    const {voornaam} = useSelector(state=>state.klant.klant)

    const handleOnClick = (e) => {
        e.preventDefault();
        dispatch(logoutKlant());
    }

    return (
        <header>
            <div className="header">
                <h1 className="plath1">Hairdate</h1>
                <div>
                    <p>Welkom {voornaam}</p>
                    <p onClick={handleOnClick}>Logout</p>
                </div>      
            </div>
        </header> 
    )
}