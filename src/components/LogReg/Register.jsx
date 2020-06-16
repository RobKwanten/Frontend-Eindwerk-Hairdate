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
            <main>
                <h1>Hairdate</h1>
                <form id="regForm" onSubmit={submitHandler}>
                    <nav>
                        <a href="/">Log in</a>
                        <a href="#0" className="active">Registreer</a>
                    </nav>
                    <div className="form-field">
                        <label for="email">Voornaam</label>
                        <input type="text" name="voornaam" value={voornaam} onChange={(e)=>{
                        setVoornaam(e.target.value)
                    }}/>
                    </div>
                    <div className="form-field">
                        <label for="naam">Naam</label>
                        <input type="text" name="naam" value={naam} onChange={(e)=>{
                        setNaam(e.target.value)
                    }}/>
                    </div>
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
                    <div className="form-field">
                        <label for="gemeente">Gemeente</label>
                        <input type="text" name="gemeente" value={gemeente} onChange={(e)=>{
                        setGemeente(e.target.value)
                    }}/>
                    </div>
                    <div className="form-field">
                        <label for="postcode">Postcode</label>
                        <input type="text" name="postcode" value={postcode} onChange={(e)=>{
                        setPostcode(e.target.value)
                    }}/>
                    </div>
                    <div className="form-field">
                        <label for="straat">Straat</label>
                        <input type="text" name="straat" value={straat} onChange={(e)=>{
                        setStraat(e.target.value)
                    }}/>
                    </div>
                    <div className="form-field">
                        <label for="huisnr">Huisnummer</label>
                        <input type="text" name="huisnr" value={huisnr} onChange={(e)=>{
                        setHuisnr(e.target.value)
                    }}/>
                    </div>
                    <div className="form-field">
                        <label for="busnr">Busnummer</label>
                        <input type="text" name="busnr" value={busnr} onChange={(e)=>{
                        setBusnr(e.target.value)
                    }}/>
                    </div>
                    <div className="form-field">
                        <label for="telnr">Telefoon</label>
                        <input type="text" name="telnr" value={telnr} onChange={(e)=>{
                        setTelnr(e.target.value)
                    }}/>
                    </div>
                    <input type="submit" value="Registreer" className="button"/>
                </form>  
            </main>         
        </>
    )
}