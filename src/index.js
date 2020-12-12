import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import rootReducers from './reducers/index';

import routes from './routes';
import {BrowserRouter as Router} from 'react-router-dom';

import jwtDecode from 'jwt-decode';
import  setAuthorizationToken from './utils/setAuthorizationToken';
import {setCurrentUser} from './actions/authActions';

import NavigationBar from './components/NavigationBar';
import FlashMessageList from './components/flashMessage/FlashMessageList';

const store = createStore(rootReducers,{},
  composeWithDevTools(
      applyMiddleware(logger,thunk)
  )
);

//适用于单点登录
if(localStorage.jwtToken){
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
}

ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes}>
    <NavigationBar/>
    <FlashMessageList/>
        {routes}
    </Router>
  </Provider>
    ,
  document.getElementById('root')
);

