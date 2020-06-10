import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'

import {makeAfspraak} from '../../data/afspraak'

export default () => {
    const [date, setDate] = useState()

    const dispatch = useDispatch();
    const {kapper,dienst,datum,beginuur} = useSelector(state => state.afspraak) 
    const {klant} = useSelector(state => state.klant)
    
    console.log(datum, beginuur, dienst.duur, klant[0].id, kapper.id, dienst.id)

    const handleOnClick = () => {
       dispatch(makeAfspraak(datum, beginuur, dienst.duur, klant[0].id, kapper.id, dienst.id))
    }

    return (
        <>
            <h3>Kapper</h3>
            <h4>{kapper.naam}</h4>
            <p>Email: {kapper.email}</p>
            <p>Adres: {kapper.straat} {kapper.huisnr} {kapper.gemeente} {kapper.postcode}</p>
            <p>Tel: {kapper.telnr}</p>
            <h3>Afspraak</h3>
            <p>Dienst: {dienst.Diensten.naam}</p>
            <p>Datum: {datum}</p>
            <p>Uur : {beginuur}</p>

            <button onClick={handleOnClick}>Submit</button>
        </>
    )
}