"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
import { Fragment } from 'react';
import { withRainbowFrame } from './withRainbowFrame';


let colors = ['red', 'orange', 'yellow', 'green', '#00BFFF', 'blue', 'purple'];
let RainbowFramedComponent = withRainbowFrame(colors)(Fragment);
ReactDOM.render(
    <RainbowFramedComponent>
        Text
    </RainbowFramedComponent>
    ,
    document.getElementById('container'),
);
