/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unused-state */
import React from 'react';

import Settings from '../settings/Settings.component';
import TaskList from '../list/List.component';

import './GroupList.css';

const ListStyle = {
  margin: '3em auto',
  maxWidth: '75%',
  display: 'flex',
  justifyContent: 'center',
};

const exampleList = [
  {
    title: 'Hong Kong independent travel',
    icon: 'image',
    creator: 'Yvnonne',
    date: '2017.10.13 14:50',
    checked: true,
    tagColor: '#34C3FF',
  },
  {
    title: 'Celebration of the Mid-Autumn festival',
    icon: 'image',
    creator: 'Daibiao',
    date: '2017.10.13 14:50',
    checked: false,
    tagColor: '#FF9800',
  },
  {
    title: 'Live to play basketball',
    icon: 'film',
    creator: 'Bidetoo',
    date: '2017.10.13 14:50',
    checked: false,
    tagColor: '#34C3FF',
  },
  {
    title: '2018 the legislature meeting broadcast live',
    icon: 'film',
    creator: 'Yvnonne',
    date: '2017.10.13 14:50',
    checked: false,
    tagColor: '#673AB7',
  },
];

export default class GroupList extends React.Component {
  constructor() {
    super();
    this.state = {
      list: exampleList,
    };
  }

  render() {
    const { list } = this.state;
    return (
      <div className="App">
        <Settings />
        <div style={ListStyle}>
          <TaskList key="list0" id="list0" showDate data={list} />
        </div>
      </div>
    );
  }
}
