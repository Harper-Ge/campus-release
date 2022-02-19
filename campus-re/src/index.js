import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Routed from './pages/Routed';

ReactDOM.render(
  <BrowserRouter>
    <Routed/>
  </BrowserRouter>,
  document.getElementById('root')
);
