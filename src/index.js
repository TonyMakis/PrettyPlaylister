/* React setup */
import React from 'react';
import ReactDOM from 'react-dom';

/* Redux Setup */
// Redux State Store
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store/configureStore';
// Redux Persist
import { PersistGate } from 'redux-persist/integration/react';

/* Components, Styles, and Scripts */
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';

// Main React Root Injector
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
