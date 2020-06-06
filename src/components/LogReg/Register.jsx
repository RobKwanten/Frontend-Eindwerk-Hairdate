import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {regKlant} from './../../data/klant'

export default function Register(){
    const dispatch = useDispatch();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [naam, setNaam] = useState("")
    const [voornaam, setVoornaam] = useState("")
    const [postcode, setPostcode] = useState()
    const [gemeente, setGemeente] = useState("")
    const [straat, setStraat] = useState("")
    const [huisnr, setHuisnr] = useState("")
    const [busnr, setBusnr] = useState("")
    const [telnr, setTelnr] = useState("")

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(regKlant(email, password, naam, voornaam, postcode, gemeente, straat, huisnr, busnr, telnr));
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                Email: <input type="email" value={email} onChange={(e)=>{
                    setEmail(e.target.value)
                }}/>
                Password: <input type="password" value={password} onChange={(e)=>{
                    setPassword(e.target.value)
                }}/>
                Naam: <input type="text" value={naam} onChange={(e)=>{
                    setNaam(e.target.value)
                }}/>
                Voornaam: <input type="text" value={voornaam} onChange={(e)=>{
                    setVoornaam(e.target.value)
                }}/>
                postcode: <input type="text" value={postcode} onChange={(e)=>{
                    setPostcode(e.target.value)
                }}/>
                gemeente: <input type="text" value={gemeente} onChange={(e)=>{
                    setGemeente(e.target.value)
                }}/>
                straat: <input type="text" value={straat} onChange={(e)=>{
                    setStraat(e.target.value)
                }}/>
                huisnr: <input type="text" value={huisnr} onChange={(e)=>{
                    setHuisnr(e.target.value)
                }}/>
                busnr: <input type="text" value={busnr} onChange={(e)=>{
                    setBusnr(e.target.value)
                }}/>
                telnr: <input type="text" value={telnr} onChange={(e)=>{
                    setTelnr(e.target.value)
                }}/>
                <button type='submit'>Register</button>
            </form>  
        </>
    )
}