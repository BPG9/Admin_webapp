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
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import '@fullcalendar/list/main.css';

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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register(); //maybe registerServiceWorker();
//registerServiceWorker();