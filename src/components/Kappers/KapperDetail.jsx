import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {setAfspraakKapper} from '../../data/afspraak'
import DatePicker from './../Afspraken/DatePicker'
import {setDienstAfspraak} from '../../data/afspraak'
import {clearAgenda} from '../../data/agenda'


export default ({kapper}) => {
    const dispatch= useDispatch();
    const {dienst} = useSelector(state=>state.afspraak)

    return(
        <div>
            <h2>{kapper.naam}</h2>
            <div>
                <h3>Gegevens</h3>
                <p>Adres: {kapper.straat} {kapper.huisnr} {kapper.gemeente} {kapper.postcode}</p>
                <p>Email: {kapper.email}</p>
                <p>Tel: {kapper.telnr}</p>
            </div>
            <div>
                <h3>Diensten</h3>
                <ul>
                {kapper.dienstenKappers.map(dienst => (
                    <li key={dienst.duur}><a href="#" onClick={()=>{
                        dispatch(setDienstAfspraak(dienst))
                        dispatch(clearAgenda())
                        }}>{dienst.Diensten.naam} {dienst.prijs}€</a></li>     
                ))}
                </ul>
            </div>
           
        </div>
    )
}