import React, {useState} from 'react'
import KappersForm from './KappersForm'
import {useSelector, useDispatch} from 'react-redux'
import {setKapperAfspraak} from '../../data/afspraak'
import {clearAgenda} from '../../data/agenda'


export default () => {
    const dispatch= useDispatch();
    const {data} = useSelector(state => state.kapper)    

 
    return(
        <>
            <KappersForm/>
            <p>resultaat van opzoeking</p>
            <ul>
            {data.map(kapper => (
            <li key={kapper.id} >
              {kapper.naam}
            <a href="#" onClick={()=>{
                dispatch(setKapperAfspraak(kapper))
                dispatch(clearAgenda())
                }}>Detail</a>
            </li> 
          ))}
            </ul>
            <hr></hr>
        </>
    )
}