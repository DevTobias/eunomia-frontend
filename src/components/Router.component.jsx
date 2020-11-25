/* eslint-disable consistent-return */
/* eslint-disable no-console */
import React from 'react';
import {
  Switch, Route, BrowserRouter, Redirect,
} from 'react-router-dom';
import axios from 'axios';

import MainNavbar from './navigation/Navbar.component';
import Home from './home/Home.component';
import Register from './register/Register.component';
import Login from './login/Login.component';
import PrivateList from './private-list/PrivateList.component';
import GroupList from './group-list/GroupList.component';
import GroupLeaderboard from './group-leaderboard/GroupLeaderboard';

import { serverName } from '../app/constans';

import './App.css';

const authNav = [
  {
    to: '/',
    key: '1',
    icon: 'home',
    name: 'Home',
  },
  {
    to: '/private-tasks',
    key: '2',
    icon: 'list',
    name: 'Private Tasks',
  },
  {
    to: '/group-tasks',
    key: '3',
    icon: 'list',
    name: 'Group Tasks',
  },
  {
    to: '/group-leaderboard',
    key: '4',
    icon: 'star',
    name: 'Group Leaderboard',
  },
];

export default function MainRouter() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  React.useEffect(() => {
    async function checkLoggedIn() {
      await axios({
        method: 'post',
        withCredentials: true,
        url: `${serverName}/users/is-authenticated`,
      }).then((res) => {
        console.log(res);
        if (res.status !== 200) setIsLoggedIn(false);
        else setIsLoggedIn(true);
      }).catch((error) => {
        console.log(error.response);
        setIsLoggedIn(false);
      });
    }
    checkLoggedIn();
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/private-tasks"
          render={() => (
            !isLoggedIn ? (
              <Redirect to="/login" />
            ) : (
              <div>
                <MainNavbar navItems={authNav} />
                <PrivateList />
              </div>
            )
          )}
        />

        <Route
          path="/group-tasks"
          render={() => (
            !isLoggedIn ? (
              <Redirect to="/login" />
            ) : (
              <div>
                <MainNavbar navItems={authNav} />
                <GroupList />
              </div>
            )
          )}
        />

        <Route
          path="/group-leaderboard"
          render={() => (
            !isLoggedIn ? (
              <Redirect to="/login" />
            ) : (
              <div>
                <MainNavbar navItems={authNav} />
                <GroupLeaderboard />
              </div>
            )
          )}
        />

        <Route
          path="/register"
          component={Register}
        />

        <Route
          path="/login"
          component={Login}
        />

        <Route
          path="/"
          render={() => (
            <div>
              <MainNavbar navItems={authNav} />
              <Home />
            </div>
          )}
        />

      </Switch>
    </BrowserRouter>
  );
}
