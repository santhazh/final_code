import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import LoginPage from './Components/Login/LoginPage';
import LoginForm from './Components/Login/LoginForm';
import allReducers from './reducers';
import logger from 'redux-logger';
// import logger from 'redux-logger';
import { Router, Route, browserHistory } from 'react-router'
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import PrivateRoute from "./Components/PrivateRouter/PrivateRouter";
import App from './App';

const store = createStore(
    allReducers,
    // applyMiddleware(logger)
);

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));

