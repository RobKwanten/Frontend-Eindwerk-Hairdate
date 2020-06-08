import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getDiensten} from '../../data/diensten'

export default function Diensten(){
    const dispatch = useDispatch();

    dispatch(getDiensten())

    return(
        <>
            <h1>hey</h1>
        </>
    )
}