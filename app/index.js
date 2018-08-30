/* @flow */
import React from 'react';
import ReactDOM from "react-dom";
import {App} from "./App";


let Jhon ={
    picture:'https://upload.wikimedia.org/wikipedia/en/6/63/IMG_%28business%29.svg',
    name:'Jhon Smith',
    age:36
}
let Aliases =[
    {name: "Tharshikan", isFriend: false},
    {name: "Jhon", isFriend: true},
    {name: "Andrew", isFriend: false},
    {name: "Mackenzie", isFriend: true},
    {name: "Harvey", isFriend: false}
]

ReactDOM.render(
    <App  name={5} user={Jhon} people={Aliases}/>,
    (document.getElementById('app'):any)
  );

