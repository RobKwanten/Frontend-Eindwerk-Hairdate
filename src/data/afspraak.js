import axios from '../axios'

// Initial State--------------------------------------------------------------------------------------------------------------------------

export const initialState= {
    kapper: [],
    dienst: "",
    klant: "",
    loading: false,
    error: "",
    test: ""
}

// Action Types---------------------------------------------------------------------------------------------------------------------------

const MAKE_AFSPRAAK_START = 'MAKE_AFSPRAAK_START';
const MAKE_AFSPRAAK_SUCCES = 'MAKE_AFSPRAAK_SUCCES';
const MAKE_AFSPRAAK_ERROR = 'MAKE_AFSPRAAK_ERROR';

const SET_KAPPER_START = 'SET_KAPPER_START';
const SET_KAPPER_SUCCES = 'SET_KAPPER_SUCCES';
const SET_KAPPER_ERROR = 'SET_KAPPER_ERROR';

const ZEG_HALLO = 'ZEG_HALLO'

// Action Creators------------------------------------------------------------------------------------------------------------------------

export const setAfspraakKapper = (id) => dispatch => {
    dispatch(setKapperStart())
    axios
    .get(`${process.env.REACT_APP_API}/kappers/${id}`)
    .then(response => {
        dispatch(setKapperSucces(response.data))
    })
    .catch(error =>  dispatch(setKapperError(error.response.data.error)))
}


export const setKapperStart = () => ({
    type: SET_KAPPER_START
})

export const setKapperSucces = (data) => ({
    type: SET_KAPPER_SUCCES,
    payload: data
  })
  
  export const setKapperError = (message) => ({
    type: SET_KAPPER_ERROR,
    payload: message
  })

// Reducers--------------------------------------------------------------------------------------------------------------------------------

export default (state=initialState, { type , payload }) => {
    switch(type){
        case SET_KAPPER_START:
            return {
                ...state,
                loading: true,
                error:""
            }
        case SET_KAPPER_SUCCES:
            console.log(payload)
            return {
                ...state,
                kapper: payload
            }
        case SET_KAPPER_ERROR:
            return {
                ...state,
                loading: false,
                error: payload
            }
        default:
            return state
    }
}