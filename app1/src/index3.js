import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
//create variables
var num1 = 10;
var num2 = 3;
var output = <div><h1>Expression in Reactjs</h1>Addition = {num1+num2} <br/> Substraction = {num1 - num2} <br/> multiplication = {num1 * num2} <br/> Division = {num1 /num2}</div>
root.render(output);