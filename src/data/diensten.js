import axios from '../axios'

// Initial State--------------------------------------------------------------------------------------------------------------------------

export const initialState= {
    diensten: {
        loading: false,
        error: "",
        data: []
    }
}

// Action Types---------------------------------------------------------------------------------------------------------------------------

const FETCH_DIENSTEN_START = "FETCH_DIENSTEN_START";
const FETCH_DIENSTEN_SUCCES = "FETCH_DIENSTEN_SUCCES";
const FETCH_DIENSTEN_ERROR = "FETCH_DIENSTEN_ERROR";

// Action Creators------------------------------------------------------------------------------------------------------------------------

export const getDiensten = () => dispatch => {
    dispatch(setDienstenStart())
    axios
    .get(`${process.env.REACT_APP_API}/dienstens`)
    .then(response => {
        console.log(response)
        dispatch(setDienstenSucces(response))
    })
    .catch(error =>  dispatch(setDienstenError(error.response.data.error)))
}

export const setDienstenStart = () => ({
    type: FETCH_DIENSTEN_START
})

export const setDienstenSucces = (data) => ({
    type: FETCH_DIENSTEN_SUCCES,
    payload: data
  })
  
  export const setDienstenError = (message) => ({
    type: FETCH_DIENSTEN_ERROR,
    payload: message
  })

// Reducers--------------------------------------------------------------------------------------------------------------------------------

export default (state=initialState, { type , payload }) => {
    switch(type){
        case FETCH_DIENSTEN_START:
            return {
                ...state,
                diensten: {
                    ...state,
                    loading:true,
                    error:""
                }
            }

        case FETCH_DIENSTEN_SUCCES:
            return {
                ...state,
                diensten: {
                    ...state,
                    loading:false,
                    data: payload
                }
            }

        case FETCH_DIENSTEN_ERROR:
            return{
                ...state,
                diensten:{
                    ...state,
                    loading: false,
                    error:payload
                }
            }

        default:
            return state
    }
}