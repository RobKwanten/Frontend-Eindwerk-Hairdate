import React from 'react'
import { useDispatch , useSelector } from 'react-redux'

import {getMijnAfspraken} from '../../data/afspraak'

import ZoekAfspraken from './ZoekAfspraken'
import AfsprakenResult from './AfsprakenResult'

export default () => {
    const dispatch = useDispatch() 
    const {mijnAfspraken,afspraakDetail} = useSelector(state => state.afspraak)
    
    return(
        <>
            <ZoekAfspraken/>
            {mijnAfspraken.length!==0 && <AfsprakenResult afspraken={mijnAfspraken} />}
            {afspraakDetail.length!==0 && <AfsprakenResult afspraken={mijnAfspraken} />}
        </>
    )
}