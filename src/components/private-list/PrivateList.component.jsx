/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unused-state */
import React from 'react';
import { IconButton, Icon, Notification } from 'rsuite';

import Settings from '../settings/Settings.component';
import TaskList from '../list/List.component';

import './PrivateList.css';

const ListStyle = {
  margin: '3em 3em',
  maxWidth: '75%',
  display: 'flex',
  justifyContent: 'left',
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

function open(placement, func, val) {
  Notification[func]({
    title: val,
    placement,
  });
}

export default class PrivateList extends React.Component {
  constructor() {
    super();
    this.handleAddClick = this.handleAddClick.bind(this);
    this.state = {
      lists: [
        exampleList,
      ],
    };
  }

  handleAddClick() {
    this.setState(({ lists }) => {
      const newData = [...lists];
      newData.push([]);
      return { lists: newData };
    });
    open('topEnd', 'success', 'Successfully added list');
  }

  render() {
    const { lists } = this.state;
    return (
      <div className="App">
        <Settings />
        <div style={ListStyle}>

          {lists.map((item, index) => (
            <TaskList key={`list${index}`} id={`list${index}`} showDate data={item} />
          ))}

          <IconButton
            icon={<Icon icon="plus-square" />}
            placement="left"
            style={{ margin: 20 }}
            color="green"
            appearance="ghost"
            onClick={this.handleAddClick}
          >
            Add List
          </IconButton>
        </div>
      </div>
    );
  }
}
