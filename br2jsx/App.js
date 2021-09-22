"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
import BR2JSX from './BR2JSX'



let text="первый<br>второй<br/>третий<br />последний";
ReactDOM.render(
    <BR2JSX text={text}></BR2JSX>
    ,
    document.getElementById('container'),
);
