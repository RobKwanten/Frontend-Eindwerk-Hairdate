import React from 'react';
import { useSelector, Provider } from 'react-redux';
import { Route, Redirect} from 'react-router-dom';

import store from "./data";
import LogReg from './components/LogReg/LogReg'
import Hello from './components/Base/Hello'
import Diensten from './components/Base/Diensten'
import Kapper from './components/Kappers/Kappers'


function App() {

  const loggedIn = useSelector(state => state.klant.loggedIn);

  return (
    <>
      <div className="App">
          <Route
            exact
            path="/"
            render={() => {
              return loggedIn ? <Redirect to="/hello" /> : <LogReg />;
            }}  
          />
          <Route
            path="/hello"
            render={() => {
              return !loggedIn ? <Redirect to="/" /> : <Hello />
            }}
          />
          <Route
            path="/diensten"
            render={() => {
              return loggedIn ? <Diensten /> : ""
            }}
          />
          <Route
            path="/kapper"
            render={() => {
              return loggedIn ? <Kapper /> : ""
            }}
          />
      </div>
    </>
  );
}

export default App;
