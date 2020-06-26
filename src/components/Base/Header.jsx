import React from 'react';
import {useSelector} from 'react-redux'

export default function Header(){

    const {voornaam} = useSelector(state=>state.klant.klant)

    return (
        <header>
            <div className="header">
                <h1 className="plath1">Hairdate</h1>
                <p>Welkom {voornaam}</p>
            </div>
        </header> 
    )
}