import axios from '../axios'

// Initial State--------------------------------------------------------------------------------------------------------------------------

export const initialState= {
    kapper: [],
    dienst: "",
    datum: "",
    beginuur: "",
    loading: false,
    error: ""
}

// Action Types---------------------------------------------------------------------------------------------------------------------------

const MAKE_AFSPRAAK_START = 'MAKE_AFSPRAAK_START';
const MAKE_AFSPRAAK_SUCCES = 'MAKE_AFSPRAAK_SUCCES';
const MAKE_AFSPRAAK_ERROR = 'MAKE_AFSPRAAK_ERROR';

const SET_KAPPER_AFSPRAAK = 'SET_KAPPER_AFSPRAAK';
const SET_DIENST_AFSPRAAK = 'SET_DIENST_AFSPRAAK';
const SET_DATUM_AFSPRAAK = 'SET_DATUM_AFSPRAAK';
const SET_BEGINUUR_AFSPRAAK = 'SET_BEGINUUR_AFSPRAAK';

const CLEAR_AFSPRAAK = 'CLEAR_AFSPRAAK'



// Action Creators------------------------------------------------------------------------------------------------------------------------


export const setKapperAfspraak = (data) => ({
    type: SET_KAPPER_AFSPRAAK,
    payload: data
  })

export const setDienstAfspraak = (data) => ({
    type: SET_DIENST_AFSPRAAK,
    payload: data
  })

export const setDatumAfspraak = (data) => ({
    type: SET_DATUM_AFSPRAAK,
    payload: data
  })

export const setBeginuurAfspraak = (data) => ({
    type: SET_BEGINUUR_AFSPRAAK,
    payload: data
})

export const clearAfspraak = () => ({
    type: CLEAR_AFSPRAAK
})


// Reducers--------------------------------------------------------------------------------------------------------------------------------

export default (state=initialState, { type , payload }) => {
    switch(type){
        case SET_KAPPER_AFSPRAAK:
            return {
                ...state,
                kapper: payload,
                dienst:"",
                datum:"",
                beginuur: ""
            }
        case SET_DIENST_AFSPRAAK:
            return {
                ...state,
                dienst: payload,
                datum:"",
                beginuur: ""
            }
        case SET_DATUM_AFSPRAAK:
            return {
                ...state,
                datum: payload,
                beginuur: ""
            }
        case SET_BEGINUUR_AFSPRAAK:
            return {
                ...state,
                beginuur: payload
            }
        case CLEAR_AFSPRAAK:
            return{
                kapper: [],
                dienst: "",
                datum: "",
                beginuur:"",
                loading: false,
                error: ""
            }
        default:
            return state
    }
}