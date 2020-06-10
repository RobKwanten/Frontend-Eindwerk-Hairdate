import React from 'react'
import {useField} from '../../hooks'
import {useDispatch} from 'react-redux'
import {getKappers} from '../../data/kapper'
import {clearAfspraak} from '../../data/afspraak'
import {clearAgenda} from '../../data/agenda'

export default () => {
    const { error, setError, setValue, ...field } = useField("", true)
    const dispatch = useDispatch();

    const submitHandler = e => {
        e.preventDefault();
        if (field.value === "") {
            setError(true);
          } else {
            setValue("");
            dispatch(getKappers(field.value))
            dispatch(clearAfspraak())
            dispatch(clearAgenda())
          }
    }

    return(
        <form onSubmit={submitHandler}>
            <input type="text" {...field} className={error ? "error" : ""} />
            <input type="submit" value="Zoek kapper" />
        </form>
    )
}