"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

import StoreComponent from './components/StoreComponent';
import StoreItem from './components/StoreItem';

var storeName = "Test Store";
// var itemsArray = [
//     new StoreItem(1, "Item 1", 29.99, "https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c549.png", 25),
//     new StoreItem(2, "Item 2", 39.99, "https://assets.stickpng.com/images/58adf674e612507e27bd3c46.png", 34),
// ];
var itemsArray = require('./SampleItems.json');
itemsArray=itemsArray.map(item => Object.assign(new StoreItem(), item));
ReactDOM.render(
    React.createElement(StoreComponent, {
        storeName: storeName,
        storeItems: itemsArray
    }),
    document.getElementById('container'),
);
