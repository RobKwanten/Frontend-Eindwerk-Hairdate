import React from 'react';
import { useSelector, Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import {helmet} from 'react-helmet-async';

import store from "./data";
import Login from './components/LogReg/Login'
import Hello from './components/Base/Hello'


function App() {

  const loggedIn = useSelector(state => state.klant.loggedIn);

  return (
    <>
      <div className="App">
        <Provider store={store}>
          <Route
            exact
            path="/"
            render={() => {
              return loggedIn? <Redirect to="/hello" /> : <Login />;
            }}  
          />
          <Route
            exact
            path="/hello"
            render={() => {
              return !loggedIn ? <Redirect to="/" /> : <Hello />;
            }}
          />
        </Provider> 
      </div>
    </>
    
  );
}

export default App;
