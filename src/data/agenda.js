import axios from '../axios'

// Initial State--------------------------------------------------------------------------------------------------------------------------

export const initialState= {
    data: [],
    loading: false,
    error: ""
}

// Action Types---------------------------------------------------------------------------------------------------------------------------

const FETCH_AGENDA_START = 'FETCH_AGENDA_START';
const FETCH_AGENDA_SUCCES = 'FETCH_AGENDA_SUCCES';
const FETCH_AGENDA_ERROR = 'FETCH_AGENDA_ERROR';

const CLEAR_AGENDA = 'CLEAR_AGENDA';

// Action Creators------------------------------------------------------------------------------------------------------------------------

export const getAgenda = (datum, duur, kapper) => dispatch => {
    dispatch(setAgendaStart());
    axios
    .get(`${process.env.REACT_APP_API}/agenda?datum=${datum}&kapper=${kapper}&duur=${duur}`)
    .then(response => {
        console.log(response)
        dispatch(setAgendaSucces(response.data))
    })
    .catch(dispatch(setAgendaError("API could not be reached")))
}

export const setAgendaStart = (data) => ({
    type: FETCH_AGENDA_START
  })

export const setAgendaSucces = (data) => ({
    type: FETCH_AGENDA_SUCCES,
    payload: data
  })

export const setAgendaError = (data) => ({
    type: FETCH_AGENDA_ERROR,
    payload: data
  })

export const clearAgenda = (data) => ({
    type: CLEAR_AGENDA
  })

// Reducers--------------------------------------------------------------------------------------------------------------------------------

export default (state=initialState, {type, payload}) => {
    switch(type){
        case FETCH_AGENDA_START:
            return{
                ...state,
                loading: true,
                error: ""
            }
        case FETCH_AGENDA_SUCCES:
            return{
                ...state,
                data: payload,
                loading: false
            }
        case FETCH_AGENDA_ERROR:
            return{
                ...state,
                data: [],
                loading: false,
                error: payload
            }
        case CLEAR_AGENDA:
            return{
                data: [],
                loading: false,
                error: ""
            }
        default:
            return state
    }
}