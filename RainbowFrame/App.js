"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
import RainbowFrame from './RainbowFrame';

let colors = ['red', 'green', 'blue'];

ReactDOM.render(
    <RainbowFrame colors={colors}>
        Text
    </RainbowFrame>
    ,
    document.getElementById('container'),
);
