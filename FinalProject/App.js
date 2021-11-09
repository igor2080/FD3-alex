"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import StorePage from './pages/StorePage';

ReactDOM.render(

    <BrowserRouter>
        <Routes>
            <Route path="/:page" element={<StorePage />}>
            </Route>
        </Routes>
    </BrowserRouter>
    , document.getElementById('container'),
);