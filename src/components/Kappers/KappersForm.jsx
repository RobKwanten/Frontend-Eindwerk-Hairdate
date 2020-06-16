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
            setError(false)
            dispatch(getKappers(field.value))
            dispatch(clearAfspraak())
            dispatch(clearAgenda())
          }
    }

    return(
        <div className="Innerform">
            <div className="form-field">
                <label for="kapper">Kapper</label>
                <input type="text" name="kapper" {...field}/>
            </div>
            <input type="submit" value="Zoek" className="button" onClick={submitHandler}></input>
        </div>
    )
}