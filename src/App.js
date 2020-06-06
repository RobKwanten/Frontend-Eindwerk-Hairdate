import React from 'react';
import { useSelector, Provider } from 'react-redux';
import { Route, Redirect} from 'react-router-dom';

import store from "./data";
import LogReg from './components/LogReg/LogReg'
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
              return loggedIn? <Redirect to="/hello" /> : <LogReg />
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
