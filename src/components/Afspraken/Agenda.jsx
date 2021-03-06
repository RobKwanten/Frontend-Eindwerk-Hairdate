import React from 'react'
import {useSelector} from 'react-redux'

import DatePicker from './DatePicker'
import BeschikbareMomenten from './BeschikBareMomenten'
import Error from './../Messages/Error'

export default () => {

    const {data, error} = useSelector(state=>state.agenda)

    return (
        <div class="AgendaContainer box">
            <h2>Agenda</h2>
            <DatePicker />
            {data.length !== 0  ? <BeschikbareMomenten/> : <Error message={error}/>}
        </div>
    )
}