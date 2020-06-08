import axios from 'axios';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';

// Initial State--------------------------------------------------------------------------------------------------------------------------

export const initialState = {
    loggedIn: false,
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
        },
        loading: false
    },
    register: {
        error: {
            bool: false,
            message:""
        },
        loading: false
    }
}  


// Action Types---------------------------------------------------------------------------------------------------------------------------

export const KLANT_START_LOGIN= 'KLANT_START_LOGIN'
export const KLANT_SUCCES_LOGIN= 'KLANT_SUCCES_LOGIN'
export const KLANT_ERROR_LOGIN= 'KLANT_ERROR_LOGIN'

export const KLANT_START_REG = 'KLANT_START_REG'
export const KLANT_SUCCES_REG = 'KLANT_SUCCES_REG'
export const KLANT_ERROR_REG = 'KLANT_ERROR_REG'

export const KLANT_LOGOUT = 'KLANT_LOGOUT'

// Action Creators------------------------------------------------------------------------------------------------------------------------

export const loginKlant = (username,password) => (dispatch) => {
    dispatch(setLoginStart())
    axios
    .post(`${process.env.REACT_APP_API}/login_check`,{
            "username": username ,
            "password": password    
    })
    .then(response => {
        console.log(response)
        dispatch(setLoginSucces(response.data.token))
    })
    .catch(error =>  dispatch(setLoginError(error.response.data.error)))
}


export const setLoginStart = () => ({
    type: KLANT_START_LOGIN
})

export const setLoginSucces = (data) => ({
    type: KLANT_SUCCES_LOGIN,
    payload: data
  })
  
  export const setLoginError = (message) => ({
    type: KLANT_ERROR_LOGIN,
    payload: message
  })

  export const logoutKlant = () => ({
    type: KLANT_LOGOUT,
  });

  export const regKlant = (email,password,naam,voornaam,postcode, gemeente, straat, huisnr, busnr, telnr) => (dispatch) => {
    dispatch(setRegStart())
    axios
    .post(`${process.env.REACT_APP_API}/register`,{
        "email": email,
        "password": password,
        "naam": naam,
        "voornaam": voornaam,
        "postcode": postcode,
        "gemeente": gemeente,
        "straat": straat,
        "huisnr": huisnr,
        "busnr": busnr,
        "telnr": telnr   
    })
    .then(response => {
        console.log(response)
        dispatch(setRegSucces(response.data))
    })
    .catch(error =>  dispatch(setRegError(error.response.data.error)))
}


export const setRegStart = () => ({
    type: KLANT_START_REG
  });
  
  export const setRegSucces = (data) => ({
    type: KLANT_SUCCES_REG,
    payload: data
  })
  
  export const setRegError = (message) => ({
    type: KLANT_ERROR_REG,
    payload: message
  })

// Reducers--------------------------------------------------------------------------------------------------------------------------------

export default (state = initialState, {type,payload}) => {
    switch(type){
        case KLANT_START_LOGIN:
            return {
                ...state,
                login: {
                    error:{
                        bool:false,
                        message:""
                    },
                    loading: true
                }
            }
        case KLANT_SUCCES_LOGIN:
            const klant = jwt_decode(payload) 
            Cookies.set("jwt", payload)
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
                    loading: false
                },
                loggedIn: true
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
        case KLANT_START_REG:
            return {
                ...state,
                register: {
                    error:{
                        bool:false,
                        message:""
                    },
                    loading:true
                }
            }
        case KLANT_SUCCES_REG:
            return {
                ...state,
                register: {
                    ...state.register,
                    loading:false
                }
            }
        case KLANT_ERROR_REG:
            return {
                ...state,
                register:{
                    error:{
                        bool:true,
                        message:payload
                    },
                    loading:false
                }
            }

        case KLANT_LOGOUT:
            return {
                ...state,
                loggedIn: false
            }
        default:
            return state;
    }
}