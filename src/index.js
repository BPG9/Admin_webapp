/**
 * @author Shayan Davarri Fard shayan.davari.fard@stud.tu-darmstadt.de
 * 
 * Index ist Anfang des Program. Hier ist Store Hinzugefügt. Store ist für Redux.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';

import * as serviceWorker from './serviceWorker';
//import registerServiceWorker from './registerServiceWorker';

//Redux
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import user from './app/store/reducers/UserReducers';
import { logger } from 'redux-logger'

//CSS
import './index.css';
import './color.css';

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(combineReducers(
    {
        user
    }), composeEnhances(
        applyMiddleware(logger, thunk)
    ));

const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(app, document.getElementById('app'));


// Für Offline Nutzung
serviceWorker.register();