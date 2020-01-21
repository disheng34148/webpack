import React from 'react';
import ReactDOM from 'react-dom';
import '@babel/polyfill';
import Router from './router';
import './fetch';
import '@style/reset.scss';

ReactDOM.render(<Router />, document.getElementById('root'));