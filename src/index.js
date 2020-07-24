import './index.css';
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const app = (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));




