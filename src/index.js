import React from 'react';
import ReactDOM from 'react-dom';
import './global.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import  Inicio from './pages/Inicio'
import List from './pages/List'

const container = document.getElementById('app');


ReactDOM.render(<List />, container);
