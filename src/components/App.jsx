import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../app/store';

import MainNavbar from './navigation/Navbar.component';
import Home from './home/Home.component';

import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <MainNavbar />
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
