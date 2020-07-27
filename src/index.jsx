import React from 'react';
import ReactDOM from 'react-dom';
import store from "./redux/store/createStore";

import './assets/sass/index.scss';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

import App from "./layouts/App";

ReactDOM.render((
    <App store={store}/>
), document.getElementById('root'));