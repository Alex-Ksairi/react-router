// basic required importing links
import React from '../node_modules/react';
import ReactDOM from '../node_modules/react-dom';
import App from './App';

// BrowserRouter
import {BrowserRouter as Router} from '../node_modules/react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

