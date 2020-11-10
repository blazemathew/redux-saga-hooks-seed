import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import './index.scss';
import * as serviceWorker from './serviceWorker';
import store from './Store';
import Adapter from './adapter';
import App, { AppContextProvider } from './Layouts/App';

// Axios default configuration
axios.defaults.baseURL = process.env.REACT_APP_API_URL;
const accessToken = JSON.parse(localStorage.getItem('access_token'));
if (accessToken) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
}

// TODO: Axios interceptor

ReactDOM.render(
  <React.StrictMode>
    <Adapter store={store}>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </Adapter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
