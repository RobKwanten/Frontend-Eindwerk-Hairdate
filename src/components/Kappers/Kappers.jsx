import React, {useState} from 'react'
import {useSelector} from 'react-redux'

import KappersForm from './KappersForm'
import KappersResult from './KappersResult'

export default () => {

    const {error} = useSelector(state => state.kapper)

 
    return(
        <>
            <KappersForm/>
             {error.length==0 && <KappersResult/>}
            <hr></hr>
        </>
    )
}