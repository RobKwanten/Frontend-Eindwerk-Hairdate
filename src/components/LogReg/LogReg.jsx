import React from 'react';

import Login from './Login'
import Register from './Register'

export default function LogReg(){
    return(
        <>
            <h2>Login</h2>
            <Login />
            <h2>Register</h2>
            <Register/>
        </>
    )
}