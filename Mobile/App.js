"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

import MobileCompany from './MobileCompany';

let companyName = "Velcom";
let companyClients = [
    { id: 1, name: "Name 1", balance: 200, status: "active" },
    { id: 2, name: "Name 2", balance: 400, status: "blocked" },
    { id: 3, name: "Name 3", balance: 500, status: "blocked" },
    { id: 4, name: "Name 4", balance: 100, status: "active" },
];

ReactDOM.render(
    <MobileCompany name={companyName} clients={companyClients}>

    </MobileCompany>
    ,
    document.getElementById('container'),
);
