"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
import { Fragment } from 'react';
import DoubleButton from './DoubleButton';
import { withRainbowFrame } from './withRainbowFrame';

let colors = ['red', 'orange', 'yellow', 'green', '#00BFFF', 'blue', 'purple'];
let RainbowFramedComponent = withRainbowFrame(colors)(DoubleButton);
ReactDOM.render(
    <Fragment>
        <DoubleButton caption1="Button 1" caption2="Button 2" cbPressed={x=>alert(x)}>
            Text2
        </DoubleButton>
        <RainbowFramedComponent caption1="Button 1" caption2="Button 2"  cbPressed={x=>alert(x)}>
            Text
        </RainbowFramedComponent>        
    </Fragment>
    ,
    document.getElementById('container'),
);
