import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import {useField} from '../../hooks'

import {setDatumAfspraak} from '../../data/afspraak'
import {getAgenda , setAgendaError} from '../../data/agenda'

export default () => {
    const dispatch= useDispatch();
    const { error, setError, setValue, ...field } = useField("", true);
    const [selectedDate, setSelectedDate] = useState();

    // Maakt een object van alle data die de kapper open is

    const agendas= useSelector(state => state.afspraak.kapper.agendas)

    const agendaArray= []

    agendas.map(agenda => {
        const agendaDatum = new Date(agenda.datum)
        const agendaDay = agendaDatum.getDate()
        const agendaMonth = agendaDatum.getMonth();
        const element = {agendaDay: agendaDay, agendaMonth: agendaMonth} 
        agendaArray.push(element)
    })

    // Checkt welke data de kapper open is en dus toont

    const checkDate = (day,month) => {
        return agendaArray.some(function(el) {
          return el.agendaDay === day && el.agendaMonth === month;
        }); 
      }

    // Logt de dagen die de kapper open is 

    const validDate = date => {
        const day = date.getDate();
        const month = date.getMonth();     
        return checkDate(day,month) ;
    }

    // API-call om de beschikbare uren op te vragen

    const {kapper, dienst} = useSelector(state => state.afspraak)

    const handleSubmit = (e) => {
        e.preventDefault()
        if(selectedDate){
            const day = selectedDate.getDate();
            const month = selectedDate.getMonth()+1;
            const year = selectedDate.getFullYear();
            dispatch(getAgenda(year+"-"+month+"-"+day, dienst.duur, kapper.id))
            dispatch(setDatumAfspraak(year+"-"+month+"-"+day))
        } else {
            dispatch(setAgendaError("Kies een datum"))
        }
    }

    return( 
        <div class="Innerform">
            <div class="form-field">
                <label for="datum">Datum</label>
                <DatePicker
                selected={selectedDate}
                onChange={date =>{
                    setSelectedDate(date) 
                    } 
                }
                dateFormat='dd/MM/yyyy'
                minDate= {new Date()}
                filterDate= {validDate}
                />
            </div>
            <input type="submit" value="Zoek" class="button" onClick={handleSubmit}></input> 
        </div>
    )
}