import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Appc from './components/Appc';

render((
  <BrowserRouter>
    <Appc />
  </BrowserRouter>
), document.getElementById('root'));
