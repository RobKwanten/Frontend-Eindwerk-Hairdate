import axios from '../axios'

// Initial State--------------------------------------------------------------------------------------------------------------------------

export const initialState= {
    afspraken: {
        loading: false,
        error: ""
    }
}

// Action Types---------------------------------------------------------------------------------------------------------------------------

const MAKE_AFSPRAAK_START = 'MAKE_AFSPRAAK_START';
const MAKE_AFSPRAAK_SUCCES = 'MAKE_AFSPRAAK_SUCCES';
const MAKE_AFSPRAAK_ERROR = 'MAKE_AFSPRAAK_ERROR';

// Action Creators------------------------------------------------------------------------------------------------------------------------



// Reducers--------------------------------------------------------------------------------------------------------------------------------
