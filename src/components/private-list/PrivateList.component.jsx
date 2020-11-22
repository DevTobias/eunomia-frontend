import React from 'react';

import Settings from '../settings/Settings.component';
import TaskList from '../list/List.component';

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
        <TaskList showUser={false} />
      </div>
    </div>
  );
}
