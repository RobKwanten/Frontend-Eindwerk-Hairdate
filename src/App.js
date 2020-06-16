import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect} from 'react-router-dom';

import './App.css';

import Afspraak from './components/Afspraken/Afspraak'
import MijnAfspraken from './components/Afspraken/MijnAfspraken';
import Login from './components/LogReg/Login';
import Register from './components/LogReg/Register';


function App() {

  const loggedIn = useSelector(state => state.klant.loggedIn);

  return (
    <>
      <div className="App">
          <Route
            exact
            path="/"
            render={() => {
              return loggedIn ? <Redirect to="/afspraak" /> : <Login />;
            }}  
          />
          <Route
            exact
            path="/register"
            render={() => {
              return loggedIn ? <Redirect to="/afspraak" /> : <Register />;
            }}  
          />
          <Route
            path="/afspraak"
            render={() => {
              return loggedIn ? <Afspraak /> : ""
            }}
          />
          <Route
            path="/mijnAfspraken"
            render={() => {
              return loggedIn ? <MijnAfspraken /> : ""
            }}
          />
      </div>
    </>
  );
}

export default App;
