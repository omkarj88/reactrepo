// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App'

// ReactDOM.render(<App />, document.getElementById('root'));



import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Appc from './components/Appc';

render((
  <BrowserRouter>
    <Appc />
  </BrowserRouter>
), document.getElementById('root'));