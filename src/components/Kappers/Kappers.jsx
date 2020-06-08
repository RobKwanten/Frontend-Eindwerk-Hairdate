import React from 'react'
import KappersForm from './KappersForm'
import {useSelector, useDispatch} from 'react-redux'
import {setAfspraakKapper,setKapperSucces} from '../../data/afspraak'
import KapperDetail from './KapperDetail'

export default () => {
    const dispatch= useDispatch();
    const {loading, error, data} = useSelector(state => state.kapper)

    return(
        <>
            <KappersForm/>
            <p>resultaat van opzoeking</p>
            <ul>
            {data.map(kapper => (
            <li key={kapper.id} >
              {kapper.naam}
            <a href="#" onClick={()=>{
                dispatch(setAfspraakKapper(kapper.id))
                }}>Detail</a>
            </li> 
          ))}
            </ul>
            <hr></hr>
            <KapperDetail/>
        </>
    )
}