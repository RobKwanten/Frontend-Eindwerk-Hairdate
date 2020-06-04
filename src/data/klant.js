import axios from 'axios';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';

// Initial State--------------------------------------------------------------------------------------------------------------------------

export const initialState = {
    klant: {
        id: 0,
        voornaam: "",
        naam: "",
        email:""
    },
    login: {
        error: {
            bool: false,
            message:""
        }
    },
    loggedIn: false
}  


// Action Types---------------------------------------------------------------------------------------------------------------------------

export const KLANT_START_LOGIN= "KLANT_START_LOGIN"
export const KLANT_SUCCES_LOGIN= "KLANT_SUCCES_LOGIN"
export const KLANT_ERROR_LOGIN= "KLANT_ERROR_LOGIN"

// Action Creators-----------------------------------------------------------------------------------------------------------------------

export const loginKlant = (username,password) => (dispatch) => {
    dispatch(setLoginStart())
    axios
    .post(`${process.env.REACT_APP_API}/login_check`,{
            "username": username ,
            "password": password    
    })
    .then(response => {
        console.log(response)
        dispatch(
            setLoginSucces(response.data.token)
        )
    })
    .catch(error =>  dispatch(setLogginError(error)))
}


export const setLoginStart = () => ({
    type: KLANT_START_LOGIN
})

export const setLoginSucces = (data) => ({
    type: KLANT_SUCCES_LOGIN,
    payload: data,
  })
  
  export const setLogginError = (message) => ({
    type: KLANT_ERROR_LOGIN,
    payload: message,
  })

// Reducers--------------------------------------------------------------------------------------------------------------------------------

export default (state = initialState, {type,payload}) => {
    switch(type){
        case KLANT_START_LOGIN:
            return {
                ...state,
                login: {
                    ...state.login,
                    loading: true
                }
            }
        case KLANT_SUCCES_LOGIN:
            const klant = jwt_decode(payload.jwt) 
            Cookies.set("jwt", payload.jwt);
            return {
                ...state,
                user:{
                    id: klant.id,
                    voornaam: klant.voornaam,
                    naam: klant.naam,
                    email: klant.email
                },
                login:{
                    ...state,
                    loading:false
                },
                loggedIn:true
            }
        case KLANT_ERROR_LOGIN:
            const message =
                payload === "Invalid credentials."
                ? "Username and password don't match"
                : "Something went wrong, try again later";
            return {
                ...state,
                login: {
                    error: {
                        bool: true,
                        message: message,
                    },
                loading: false,
                }
            }
        default:
            return state;
    }
}