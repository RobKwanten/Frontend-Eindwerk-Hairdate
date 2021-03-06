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
    },
    put: {
        error: "",
        loading: false
    }
}  


// Action Types---------------------------------------------------------------------------------------------------------------------------

const KLANT_START_LOGIN= 'KLANT_START_LOGIN'
const KLANT_SUCCES_LOGIN= 'KLANT_SUCCES_LOGIN'
const KLANT_ERROR_LOGIN= 'KLANT_ERROR_LOGIN'

const KLANT_START_SET= 'KLANT_START_SET'
const KLANT_SUCCES_SET= 'KLANT_SUCCES_SET'

const KLANT_START_REG = 'KLANT_START_REG'
const KLANT_SUCCES_REG = 'KLANT_SUCCES_REG'
const KLANT_ERROR_REG = 'KLANT_ERROR_REG'

const KLANT_START_PUT = 'KLANT_START_PUT'
const KLANT_SUCCES_PUT = 'KLANT_SUCCES_PUT'
const KLANT_ERROR_PUT = 'KLANT_ERROR_PUT'

const KLANT_LOGOUT = 'KLANT_LOGOUT'

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
        alert("Welkom")
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
        alert("Je bent geregistreerd, log nu in")
        dispatch(setRegSucces(response.data[0]))
    })
    .catch(
        dispatch(setRegError("Er ging iets mis"))
        )
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

export const putKlant =  (id,naam,voornaam,postcode,gemeente,straat,huisnr,busnr,telnr) => dispatch => {
    dispatch(setPutStart())
    axiosJWT
    .put(`${process.env.REACT_APP_API}/klants/${id}`,{
        "naam": naam,
        "voornaam": voornaam,
        "postcode": postcode,
        "gemeente": gemeente,
        "straat": straat,
        "busnr": busnr,
        "telnr":telnr
    })
    .then(response => {
        dispatch(setPutSucces(response.data))
    })
    .catch(dispatch(setPutError("Er ging iets mis")))
}

export const setPutStart = () => ({
    type: KLANT_START_PUT
  });
  
export const setPutSucces = (data) => ({
    type: KLANT_SUCCES_PUT,
    payload: data
  })
  
export const setPutError = (message) => ({
    type: KLANT_ERROR_PUT,
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