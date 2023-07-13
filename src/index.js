import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { Auth0Provider } from "@auth0/auth0-react";
///////////////////////////////////////////////
import { persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import { PersistGate } from 'redux-persist/integration/react';
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["carrito", "loggedUser"],
};
const persistor = persistStore(store);
///////////////////////////////////////////////
const domain = "dev-jzsyp78gzn6fdoo4.us.auth0.com";
const clientID = "xc1IRD9X4IyoX9RQFGpyFZ9EL8NQEKLl";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      {/* <React.StrictMode> */}
      <Auth0Provider
        domain={domain}
        clientId={clientID}
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>
      {/* </React.StrictMode> */}
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
