import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import {setDatumAfspraak} from '../../data/afspraak'
import {getAgenda} from '../../data/agenda'

export default () => {
    const dispatch= useDispatch();
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

    const handleSubmit = () => {
        const day = selectedDate.getDate();
        const month = selectedDate.getMonth()+1;
        const year = selectedDate.getFullYear();
        if(selectedDate){
            dispatch(getAgenda(year+"-"+month+"-"+day, dienst.duur, kapper.id))
            dispatch(setDatumAfspraak(year+"-"+month+"-"+day))
        }
    }

    return( 
        <>
            <form onSubmit={handleSubmit}>
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
                <input type="submit" value="Zoek momenten" />
            </form>  
        </>
    )
}