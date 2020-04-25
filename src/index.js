import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import './App.scss';
import { firebase } from './firebase/firebase';
import { login, logout } from './actions/auth';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

const store = configureStore();
const jsx = (
    <Provider store={store}>
        <App/>
    </Provider>
);

render(jsx, document.getElementById('root'));

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      store.dispatch(login(user.uid));
    } else {
      store.dispatch(logout());
    }
  });





