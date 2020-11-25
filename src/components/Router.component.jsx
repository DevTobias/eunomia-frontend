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
          path="/eunomia-frontend/private-tasks"
          render={() => (
            !isLoggedIn ? (
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
            !isLoggedIn ? (
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
            !isLoggedIn ? (
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
          component={Register}
        />

        <Route
          path="/eunomia-frontend/login"
          component={Login}
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
  );
}
