import React, {useState} from 'react'
import {useSelector} from 'react-redux'

import KappersForm from './KappersForm'
import KappersResult from './KappersResult'
import Error from './../Messages/Error'

export default () => {

    const {data,error} = useSelector(state => state.kapper)

 
    return(
        <div className="KappersContainer box">
            <h2>Kappers</h2>
            <KappersForm/>
             {data.length !== 0  ? <KappersResult/> : <Error message={error}/>}
        </div>
    )
}