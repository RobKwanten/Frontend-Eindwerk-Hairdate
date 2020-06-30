import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistCombineReducers } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import Cookies from "js-cookie";

import klantReducer from "./klant";
import dienstenReducer from "./diensten"
import kapperReducer from './kapper'
import afspraakReducer from './afspraak'
import agendaReducer from './agenda'

const persistConfig = {
  key: "root",
  whitelist: ["klant","diensten","kapper", "afspraak","agenda"],
  storage,
};

const appReducer = persistCombineReducers(persistConfig, {
  klant: klantReducer,
  dienst: dienstenReducer,
  kapper: kapperReducer,
  afspraak: afspraakReducer,
  agenda: agendaReducer
});

const rootReducer = (state, action) => {
  if (action.type === "KLANT_LOGOUT") {
    localStorage.removeItem("persist:root");
    Cookies.remove("jwt");
    state = undefined;
  }
  return appReducer(state, action);
};


export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export const persistor = persistStore(store);

export default store;