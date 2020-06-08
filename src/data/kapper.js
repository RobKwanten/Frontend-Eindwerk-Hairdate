import axios from '../axios'

// Initial State--------------------------------------------------------------------------------------------------------------------------

export const initialState= {
    data: [],
    loading: false,
    error: ""
}

// Action Types---------------------------------------------------------------------------------------------------------------------------

const FETCH_KAPPERS_START = 'FETCH_KAPPERS_START'
const FETCH_KAPPERS_SUCCES = 'FETCH_KAPPERS_SUCCES'
const FETCH_KAPPERS_ERROR = 'FETCH_KAPPERS_ERROR'

// Action Creators------------------------------------------------------------------------------------------------------------------------

export const getKappers = str => dispatch => {
    dispatch(setKappersStart());
    axios
    .get(`${process.env.REACT_APP_API}/kappers.json?naam=${str}`)
    .then(response => {
        if (response === "False") {
            dispatch(setKappersError("No kappers found"));
          } else {
            console.log(response.data)
            dispatch(setKappersSucces(response.data));
          }
    })
    .catch(error => dispatch(setKappersError("API could not be reached")));
}

export const setKappersStart = () => ({
    type: FETCH_KAPPERS_START
})

export const setKappersSucces = (data) => ({
    type: FETCH_KAPPERS_SUCCES,
    payload: data
  })
  
  export const setKappersError = (message) => ({
    type: FETCH_KAPPERS_ERROR,
    payload: message
  })

// Reducers--------------------------------------------------------------------------------------------------------------------------------


export default (state=initialState, {type, payload}) => {
    switch(type){
        case FETCH_KAPPERS_START: 
            return {
                ...state,
                data:[],
                loading:true,
                error:""
            }
        case FETCH_KAPPERS_SUCCES:
            return {
                ...state,
                loading:false,
                data: payload
            }
        case FETCH_KAPPERS_ERROR:
            return {
                ...state,
                loading: false,
                error:payload
            }
        default:
            return state;
    }
}