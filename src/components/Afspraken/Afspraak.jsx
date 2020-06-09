import React from 'react'
import {useSelector} from 'react-redux'

import Kappers from '../Kappers/Kappers'
import KapperDetail from '../Kappers/KapperDetail'
import Agenda from './Agenda'
import OverzichtAfspraak from './OverzichtAfspraak'

export default () => {
    const {kapper,dienst,datum,beginuur} = useSelector(state => state.afspraak)
    console.log(kapper,dienst,datum,beginuur)

    return (
    <>
        <Kappers/>
        {kapper.length!==0 && <KapperDetail kapper={kapper} />}
        {dienst.length!==0 && <Agenda />}
        {beginuur.length!==0 && <OverzichtAfspraak />}
    </>
    )
}