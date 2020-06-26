import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { DateFormat } from './../Helpers/TimeFormat'

import {setAfspraakDetail} from '../../data/afspraak'


export default ({afspraken}) => {
    const dispatch= useDispatch();
    return (
        <>
            <ul>
            {afspraken.map(afspraak => (
                <li><a href="#"onClick={(e)=>{
                    e.preventDefault()
                    dispatch(setAfspraakDetail(afspraak))
                   }}>{DateFormat(afspraak.datum)}</a></li>
            ))}
            </ul>
        </>
    )
}