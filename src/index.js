import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import AppRoute from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './Redux/store';
ReactDOM.render(
    <Provider store={store}>
        <AppRoute />
    </Provider>,
    document.getElementById("root"));
serviceWorker.unregister();