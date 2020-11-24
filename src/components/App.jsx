import React from 'react';
import {
  Switch, Route, BrowserRouter, Redirect,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../app/store';

import MainNavbar from './navigation/Navbar.component';
import Home from './home/Home.component';
import Register from './register/Register.component';
import Login from './login/Login.component';
import PrivateList from './private-list/PrivateList.component';
import GroupList from './group-list/GroupList.component';
import GroupLeaderboard from './group-leaderboard/GroupLeaderboard';

import './App.css';

function isLoggedIn() {
  return true;
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
            <Route
              path="/eunomia-frontend/group-tasks"
              render={() => (
                !isLoggedIn() ? (
                  <Redirect to="/eunomia-frontend/login" />
                ) : (
                  <div>
                    <MainNavbar />
                    <GroupList />
                  </div>
                )
              )}
            />
            <Route
              path="/eunomia-frontend/group-leaderboard"
              render={() => (
                !isLoggedIn() ? (
                  <Redirect to="/eunomia-frontend/login" />
                ) : (
                  <div>
                    <MainNavbar />
                    <GroupLeaderboard />
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
            <Route
              path="/eunomia-frontend/home"
              render={() => (
                <div>
                  <MainNavbar />
                  <Home />
                </div>
              )}
            />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
