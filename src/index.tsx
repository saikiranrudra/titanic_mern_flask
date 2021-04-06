import React from 'react';
import ReactDOM from 'react-dom';

// Components
import App from './App';

// Utils
import CssBaseline from '@material-ui/core/CssBaseline';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

