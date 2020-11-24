import React from 'react';
import {
  Switch, Route, BrowserRouter, Redirect,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../app/store';

import MainNavbar from './navigation/Navbar.component';
import Home from './home/Home.component';
import PrivateList from './private-list/PrivateList.component';
import Register from './register/Register.component';
import Login from './login/Login.component';

import './App.css';

function isLoggedIn() {
  return false;
}

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route
              path="/eunomia-frontend/private-tasks"
              render={() => (
                !isLoggedIn() ? (
                  <Redirect to="/eunomia-frontend/login" />
                ) : (
                  <div>
                    <MainNavbar />
                    <PrivateList />
                  </div>
                )
              )}
            />
            <Route path="/eunomia-frontend/register">
              <Register />
            </Route>
            <Route path="/eunomia-frontend/login">
              <Login />
            </Route>
            <Route path="/">
              <MainNavbar />
              <Home />
            </Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
