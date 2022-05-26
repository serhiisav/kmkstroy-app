import './index.scss';
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import './i18n';

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <HashRouter>
      {/* <BrowserRouter> */}
      <Provider store={store}>
        <App />
      </Provider>
      {/* </BrowserRouter> */}
    </HashRouter>
  </React.StrictMode>,

);

// reportWebVitals();
