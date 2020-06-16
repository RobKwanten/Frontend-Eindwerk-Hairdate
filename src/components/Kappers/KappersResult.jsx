import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

import {setKapperAfspraak} from '../../data/afspraak'
import {clearAgenda} from '../../data/agenda'

export default () => {
    const dispatch= useDispatch();
    const {data} = useSelector(state => state.kapper) 

    return (
        <div className="Results">
            <ul>
            {data.map(kapper => (
                <li key={kapper.id} >
                     <a href="#" onClick={()=>{
                        dispatch(setKapperAfspraak(kapper))
                        }}>
                    {kapper.naam}</a>
                </li> 
            ))}
            </ul>
        </div>
    )
}