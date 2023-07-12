import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './reducer';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

const persistConfig = {
 key: 'root',
 storage
};
const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore (  persistedReducer, composeEnhancer(applyMiddleware(thunk))
);

export default store;