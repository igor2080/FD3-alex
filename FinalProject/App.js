"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import StorePage from './pages/StorePage';

import './site.css';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/:page" component={StorePage} />
      <Route path="/" component={StorePage} />
    </Switch>
  </BrowserRouter>
  , document.getElementById('container'));
