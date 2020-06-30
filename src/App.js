import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect} from 'react-router-dom';

import './App.css';

import Afspraak from './components/Afspraken/Afspraak'
import MijnAfspraken from './components/Afspraken/MijnAfspraken';
import Login from './components/LogReg/Login';
import Register from './components/LogReg/Register';
import Logout from './components/LogReg/Logout';
import MijnGegevens from './components/Gegevens/MijnGegevens';

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
              return loggedIn ? <Afspraak /> : <Login />
            }}
          />
          <Route
            path="/mijnAfspraken"
            render={() => {
              return loggedIn ? <MijnAfspraken /> : <Login />
            }}
          />
          <Route
            path="/mijnGegevens"
            render={() => {
              return loggedIn ? <MijnGegevens /> : <Login />
            }}
          />
          <Route
            path="/logout"
            render={() => {
              return loggedIn ? <Logout /> : <Login />
            }}
          />
      </div>
    </>
  );
}

export default App;
