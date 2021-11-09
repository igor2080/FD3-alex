"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

import StorePage from './pages/StorePage'

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/:page" component={StorePage} />
        </Routes>
    </BrowserRouter>
    , document.getElementById('container'));
