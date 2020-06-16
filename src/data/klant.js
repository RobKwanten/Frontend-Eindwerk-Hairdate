import axios from 'axios';
import axiosJWT  from '../axios'
import Cookies from 'js-cookie';

// Initial State--------------------------------------------------------------------------------------------------------------------------

export const initialState = {
    loggedIn: false,
    klant: [],
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

export const KLANT_START_SET= 'KLANT_START_SET'
export const KLANT_SUCCES_SET= 'KLANT_SUCCES_SET'

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
        dispatch(setKlant(username));
        dispatch(setLoginSucces(response.data.token))
    })
    .catch(dispatch(setLoginError("login")))
}

export const setKlant = (username) => (dispatch) => {
    dispatch(setKlantStart())
    axiosJWT
    .get(`${process.env.REACT_APP_API}/klants?email=${username}`)
    .then(response => {
        console.log(response.data['hydra:member'][0])
        dispatch(setKlantSucces(response.data['hydra:member'][0]))
    })
    .catch(dispatch(setLoginError("Login")))
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

export const setKlantStart = () => ({
    type: KLANT_START_SET
})

export const setKlantSucces = (data) => ({
    type: KLANT_SUCCES_SET,
    payload: data
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
        dispatch(setRegSucces(response.data[0]))
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
            Cookies.set("jwt", payload)
            return {
                ...state,
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
        case KLANT_SUCCES_SET:
            return {
                ...state,
                klant: payload
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