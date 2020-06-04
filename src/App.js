import React from 'react';
import { useSelector, Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import {helmet} from 'react-helmet-async';

import store from "./data";
import Login from './components/LogReg/Login'


function App() {

  return (
    <div className="App">
      <p>{process.env.REACT_APP_API}</p>
      <Provider store={store}>
        <Login/>
      </Provider> 
    </div>
  );
}

export default App;
