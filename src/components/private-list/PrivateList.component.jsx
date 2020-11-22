import React from 'react';

import Settings from '../settings/Settings.component';
import ListDemo from '../list/List.component';

import './PrivateList.css';

const ListStyle = {
  margin: '3em auto',
  maxWidth: '75%',
};

export default function PrivateList() {
  return (
    <div className="App">
      <Settings />
      <div style={ListStyle}>
        <ListDemo />
      </div>
    </div>
  );
}
