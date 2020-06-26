import React from 'react'
import { useDispatch , useSelector } from 'react-redux'

import {getMijnAfspraken} from '../../data/afspraak'


export default () => {
    const dispatch = useDispatch() 
    const {email} = useSelector(state => state.klant.klant)
    
    return(
        <>
            <input type="submit" value="Zoek afspraken" class="button" onClick = {() => dispatch(getMijnAfspraken(email))}></input>
        </>
    )
}