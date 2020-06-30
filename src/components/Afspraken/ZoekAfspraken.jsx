import React from 'react'
import { useDispatch , useSelector } from 'react-redux'

import {getMijnAfspraken} from '../../data/afspraak'


export default () => {
    const dispatch = useDispatch() 
    const {email} = useSelector(state => state.klant.klant)

    var datum = new Date();
    var dd = String(datum.getDate()).padStart(2, '0');
    var mm = String(datum.getMonth() + 1).padStart(2, '0'); 
    var yyyy = datum.getFullYear();

    datum = yyyy + '/' + mm + '/' + dd;
    
    return(
        <>
            <input type="submit" value="Zoek afspraken" className="button" onClick = {() => dispatch(getMijnAfspraken(email,datum))}></input>
        </>
    )
}