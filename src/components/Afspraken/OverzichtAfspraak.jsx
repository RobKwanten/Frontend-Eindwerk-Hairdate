import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'

import {makeAfspraak} from '../../data/afspraak'

export default () => {
    const [notities, setNotities] = useState("")

    const dispatch = useDispatch();
    const {kapper,dienst,datum,beginuur} = useSelector(state => state.afspraak) 
    const {klant} = useSelector(state => state.klant)
    

    const handleOnClick = () => {
       dispatch(makeAfspraak(datum, beginuur, dienst.duur, klant.id, kapper.id, dienst.id,notities))
    }

    return (
        <div class="AfspraakOverzichtContainer box">
            <h2>Overzicht</h2>
            <div>
                <h3>{kapper.naam}</h3>
                <p>Adres: {kapper.straat} {kapper.huisnr} {kapper.gemeente} {kapper.postcode}</p>
                <p>Email: {kapper.email}</p>
                <p>Tel: {kapper.telnr}</p>
            </div>
            <div>
                <h3>Afspraak</h3>
                <p>Dienst: {dienst.Diensten.naam}</p>
                <p>Datum: {datum}</p>
                <p>Uur: {beginuur}</p>
                <div class="form-field">
                <p>Notities:</p>
                <textarea name="notities" rows="4" cols="50" value={notities} onChange={(e)=>setNotities(e.target.value)}></textarea>
                </div>
          </div>
          <button onClick={handleOnClick} class="button" name="button">Maak afspraak</button>
        </div>
    )
}