import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

import {setKapperAfspraak} from '../../data/afspraak'
import {clearAgenda} from '../../data/agenda'

export default () => {
    const dispatch= useDispatch();
    const {data} = useSelector(state => state.kapper) 

    return (
        <>
            <p>resultaat van opzoeking</p>
            <ul>
            {data.map(kapper => (
                <li key={kapper.id} >
                {kapper.naam}
                     <a href="#" onClick={()=>{
                        dispatch(setKapperAfspraak(kapper))
                        }}>
                    Detail</a>
                </li> 
            ))}
            </ul>
        </>
    )
}