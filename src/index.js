import React from 'react';
import ReactDOM from 'react-dom';
import '@style/reset.scss';
import '@babel/polyfill';
import Router from './router';
import './fetch';

ReactDOM.render(<Router />, document.getElementById('root'));