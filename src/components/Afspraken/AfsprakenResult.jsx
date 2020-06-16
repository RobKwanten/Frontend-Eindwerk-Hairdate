import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

import {setAfspraakDetail} from '../../data/afspraak'


export default ({afspraken}) => {
    const dispatch= useDispatch();
    const {afspraakDetail} = useSelector(state => state.afspraak) 
    return (
        <>
            <ul>
            {afspraken.map(afspraak => (
                <li>
                {afspraak.datum}
                     <a href="#" onClick={(e)=>{
                         e.preventDefault()
                        dispatch(setAfspraakDetail(afspraak))
                        }}>
                    Detail</a>
                </li> 
            ))}
            </ul>
        </>
    )
}