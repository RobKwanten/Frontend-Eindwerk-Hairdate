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
        <>
        <p>Naam: {kapper.naam}</p>
        <ul>
            {kapper.dienstenKappers.map(dienst => (
                 <li key={dienst.duur}>{dienst.Diensten.naam}<a href="#" onClick={()=>{
                    dispatch(setDienstAfspraak(dienst))
                    dispatch(clearAgenda())
                    }}>Kies dienst</a></li>     
            ))}
        </ul>
        <hr></hr>
        </>
    )
}