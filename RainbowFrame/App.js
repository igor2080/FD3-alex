"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
import RainbowFrame from './RainbowFrame';

let colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];

ReactDOM.render(
    <RainbowFrame colors={colors}>
        Text
    </RainbowFrame>
    ,
    document.getElementById('container'),
);
