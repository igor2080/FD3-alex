"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var itemsArray = require('./SampleItems.json');

import StoreComponent from './components/StoreComponent';
import StoreItem from './components/StoreItem';

var storeName = "Test Store";

itemsArray=itemsArray.map(item => Object.assign(new StoreItem(), item));

ReactDOM.render(
    React.createElement(StoreComponent, {
        storeName: storeName,
        storeItems: itemsArray
    }),
    document.getElementById('container'),
);
