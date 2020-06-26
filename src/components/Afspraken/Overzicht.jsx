import React from 'react'
import { useSelector } from 'react-redux'

import { DateFormat , TimeFormat } from './../Helpers/TimeFormat'

export default () => {

    const afspraakDetail = useSelector(state => state.afspraak.afspraakDetail)

    return (
        <>
            <h2>Overzicht</h2>
            <div>
                <h3>{afspraakDetail.Kapper.naam}</h3>
                <p>Adres: {afspraakDetail.Kapper.straat} {afspraakDetail.Kapper.huisnr} {afspraakDetail.Kapper.gemeente} {afspraakDetail.Kapper.postcode}</p>
                <p>Email: {afspraakDetail.Kapper.email}</p>
                <p>Tel: {afspraakDetail.Kapper.telnr}</p>
            </div>
            <div>
                <h3>Afspraak</h3>
                <p>Dienst: {afspraakDetail.Dienst.Diensten.naam}</p>
                <p>Datum: {DateFormat(afspraakDetail.datum)}</p>
                <p>Uur: {TimeFormat(afspraakDetail.begintijd)}</p>
                <div className="form-field">
                    <p>Notities:</p>
                    <p className="notities">{afspraakDetail.notities}</p>
                </div>
            </div>
        </>
    )
}