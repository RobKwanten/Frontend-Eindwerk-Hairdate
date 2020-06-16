import React from 'react'
import { useDispatch , useSelector } from 'react-redux'

import {getMijnAfspraken} from '../../data/afspraak'


export default () => {
    const dispatch = useDispatch() 
    const {email} = useSelector(state => state.klant.klant)
    
    return(
        <>
            <a onClick = {() => dispatch(getMijnAfspraken(email))}>Zoek Afspraken</a>
        </>
    )
}