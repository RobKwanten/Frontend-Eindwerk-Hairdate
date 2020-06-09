import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'

import {setBeginuurAfspraak} from '../../data/afspraak'

export default () => {
    const [moment, setMoment] = useState("")
    const dispatch = useDispatch();
    const {data} = useSelector(state => state.agenda)

    return (
        <>
            <ul>
                {data.map(moment => <li onClick={()=>{
                    dispatch(setBeginuurAfspraak(moment))
                }} key={moment}>{moment}</li>)}
            </ul>
        </>
    )
}