import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { Auth0Provider } from "@auth0/auth0-react";
/** felipostre integration */
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
const persistConfig = {
 key: 'root',
 storage,
 whitelist: ['carrito', 'loggedUser'], 
};
const persistor = persistStore(store);
/** fin felipostre integration */

const domain = "dev-jzsyp78gzn6fdoo4.us.auth0.com";
const clientID = "xc1IRD9X4IyoX9RQFGpyFZ9EL8NQEKLl";

ReactDOM.render(
<Provider store={store}>
<PersistGate loading={null} persistor={persistor}>
    <BrowserRouter>
      <React.StrictMode>

          <App />
 
      </React.StrictMode>
    </BrowserRouter>
 </PersistGate>
</Provider>,
document.getElementById('root')
);

reportWebVitals();

/**
 * 
 *         <Auth0Provider domain={domain} clientId={clientID} redirectUri={window.location.origin} >
          <App />
        </Auth0Provider>
 * 
 */



