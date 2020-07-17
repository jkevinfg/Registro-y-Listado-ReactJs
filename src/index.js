import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css' 
import './global.css'
import Card from './components/Card'
const container = document.getElementById('app');



// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<Card firstName="Kevin" lastName="Flores"/>, container);
