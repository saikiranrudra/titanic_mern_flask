import React from 'react';
import ReactDOM from 'react-dom';

// Components
import App from './App';

// Context Provider
import { Provider as TitanicProvider } from "./Context/titanic";

// Utils
import CssBaseline from '@material-ui/core/CssBaseline';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <TitanicProvider>
      <App />
    </TitanicProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

