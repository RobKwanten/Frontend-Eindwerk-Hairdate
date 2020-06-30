import React, {useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'

import {setKlant,putKlant} from './../../data/klant'

export default () => {
    const dispatch = useDispatch();

    const {klant} = useSelector(state => state.klant)

    const [naam, setNaam] = useState(klant.naam)
    const [voornaam, setVoornaam] = useState(klant.voornaam)
    const [postcode, setPostcode] = useState(klant.postcode)
    const [gemeente, setGemeente] = useState(klant.gemeente)
    const [straat, setStraat] = useState(klant.straat)
    const [huisnr, setHuisnr] = useState(klant.huisnr)
    const [busnr, setBusnr] = useState(klant.busnr)
    const [telnr, setTelnr] = useState(klant.telnr)

    const handleOnClick = () => {
        dispatch(putKlant(klant.id,naam,voornaam,postcode,gemeente,straat,huisnr,busnr,telnr))
        dispatch(setKlant(klant.email))
        console.log(klant.id,naam,voornaam,postcode,gemeente,straat,huisnr,busnr,telnr)
    }

    return(
        <div className="Gegevens Container">
            <h2>{klant.voornaam} {klant.naam}</h2>
            <div class="GegevensContainer">
                <div class="form-field">
                    <label for="voornaam">Voornaam</label>
                    <input type="text" name="voornaam" value={voornaam} onChange={(e)=>{
                        setVoornaam(e.target.value)
                    }}/>
                </div>
                <div class="form-field">
                    <label for="naam">Naam</label>
                    <input type="text" name="naam" value={naam} onChange={(e)=>{
                        setNaam(e.target.value)
                    }}/>
                </div>
                <div class="form-field">
                    <label for="gemeente">Gemeente</label>
                    <input type="text" name="gemeente" value={gemeente} onChange={(e)=>{
                        setGemeente(e.target.value)
                    }}/>
                </div>
                <div class="form-field">
                    <label for="postcode">Postcode</label>
                    <input type="text" name="postcode" value={postcode} onChange={(e)=>{
                        setPostcode(e.target.value)
                    }}/>
                </div>
                <div class="form-field">
                    <label for="straat">Straat</label>
                    <input type="text" name="straat" value={straat} onChange={(e)=>{
                        setStraat(e.target.value)
                    }}/>
                </div>
                <div class="form-field">
                    <label for="huisnr">Huisnummer</label>
                    <input type="text" name="huisnr" value={huisnr} onChange={(e)=>{
                        setHuisnr(e.target.value)
                    }}/>
                </div>
                <div class="form-field">
                    <label for="busnr">Busnummer</label>
                    <input type="text" name="busnr" value={busnr} onChange={(e)=>{
                        setBusnr(e.target.value)
                    }}/>
                </div>
                <div class="form-field">
                    <label for="telnr">Telefoon</label>
                    <input type="text" name="telnr" value={telnr} onChange={(e)=>{
                        setTelnr(e.target.value)
                    }}/>
                </div>
            </div>
            <input type="submit" value="Gegevens wijzigen" class="button" onClick={handleOnClick} ></input>
        </div>
    )
}