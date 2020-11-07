/* React setup */
import React from 'react';
import ReactDOM from 'react-dom';

/* Redux Setup */
import { Provider } from 'react-redux';

/* Styles, Scripts, and Components */
import { store } from './redux/store/configureStore';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Main React Root Injector
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
