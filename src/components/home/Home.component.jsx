import React from 'react';

import Settings from '../settings/Settings.component';

import logo from '../../img/logo.svg';
import './Home.css';

export default function Home() {
  return (
    <div className="App">
      <Settings />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Eunomia WG-Tracker
      </header>
    </div>
  );
}
