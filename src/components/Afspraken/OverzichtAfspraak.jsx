import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'

export default () => {
    const [date, setDate] = useState()

    const dispatch = useDispatch();
    const {kapper,dienst,datum,beginuur} = useSelector(state => state.afspraak) 
    console.log(kapper,dienst,datum,beginuur)

    const datumArr = datum.slice(0,10).split("-")
    const format_datum = datumArr[2]+"/"+datumArr[1]+"/"+datumArr[0]

    const stringifyDate = () => {
        const day = datum.getDate();
        const month = datum.getMonth()+1;
        const year = datum.getFullYear();
        return(day+"/"+month+"/"+year)
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
            <p>Datum: {format_datum}</p>
            <p>Uur : {beginuur}</p>

            <button>Submit</button>
        </>
    )
}