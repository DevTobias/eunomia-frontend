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
  return false;
}

const authNav = [
  {
    to: '/eunomia-frontend/',
    key: '1',
    icon: 'home',
    name: 'Home',
  },
  {
    to: '/eunomia-frontend/private-tasks',
    key: '2',
    icon: 'list',
    name: 'Private Tasks',
  },
  {
    to: '/eunomia-frontend/group-tasks',
    key: '3',
    icon: 'list',
    name: 'Group Tasks',
  },
  {
    to: '/eunomia-frontend/group-leaderboard',
    key: '4',
    icon: 'star',
    name: 'Group Leaderboard',
  },
];

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
                    <MainNavbar navItems={authNav} />
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
                    <MainNavbar navItems={authNav} />
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
                    <MainNavbar navItems={authNav} />
                    <GroupLeaderboard />
                  </div>
                )
              )}
            />

            <Route
              path="/eunomia-frontend/register"
              render={() => (
                <div>
                  <Register />
                </div>
              )}
            />

            <Route
              path="/eunomia-frontend/login"
              render={() => (
                <div>
                  <Login />
                </div>
              )}
            />

            <Route
              path="/eunomia-frontend/"
              render={() => (
                <div>
                  <MainNavbar navItems={authNav} />
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
