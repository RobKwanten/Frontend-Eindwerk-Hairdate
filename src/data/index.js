import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistCombineReducers } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import Cookies from "js-cookie";

import klantReducer from "./klant";

const persistConfig = {
  key: "root",
  whitelist: ["klant"],
  storage,
};

const appReducer = persistCombineReducers(persistConfig, {
  klant: klantReducer
});


const store = createStore(
  appReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export const persistor = persistStore(store);

export default store;