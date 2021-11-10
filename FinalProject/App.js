"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import StorePage from './pages/StorePage';

import './site.css';

ReactDOM.render( 
  <BrowserRouter>
  <Route path="/:page" component={StorePage}>
  </Route>
  </BrowserRouter>
, document.getElementById('container') );
