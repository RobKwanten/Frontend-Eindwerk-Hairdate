import React from 'react'
import {useDispatch} from 'react-redux'
import { DateFormat } from './../Helpers/TimeFormat'

import {setAfspraakDetail} from '../../data/afspraak'


export default ({afspraken}) => {
    const dispatch= useDispatch();
    return (
        <>
            <ul>
            {afspraken.map(afspraak => (
                <li onClick={(e)=>{
                    e.preventDefault()
                    dispatch(setAfspraakDetail(afspraak))
                   }}><a href="#">{DateFormat(afspraak.datum)}</a></li>
            ))}
            </ul>
        </>
    )
}