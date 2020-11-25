/* eslint-disable no-console */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unused-state */
import React from 'react';
import { IconButton, Icon, Notification } from 'rsuite';
import axios from 'axios';

import Settings from '../settings/Settings.component';
import TaskList from '../list/List.component';

import { serverName } from '../../app/constans';

import './PrivateList.css';

const ListStyle = {
  margin: '3em 3em',
  maxWidth: '75%',
  display: 'flex',
  justifyContent: 'left',
};

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
        [],
      ],
    };
  }

  componentDidMount() {
    axios({
      method: 'post',
      withCredentials: true,
      url: `${serverName}/users/get-lists`,
    }).then((res) => {
      this.setState(() => ({ lists: res.data.lists }));
    }).catch((error) => {
      console.log(error);
    });
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

          {lists.map((_item, index) => (
            <TaskList key={`list${index}`} id={`list${index}`} index={index} showDate data={lists} />
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
