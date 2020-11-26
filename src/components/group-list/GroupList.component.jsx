/* eslint-disable no-console */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unused-state */
import React from 'react';
import axios from 'axios';
import { serverName } from '../../app/constans';

import Settings from '../settings/Settings.component';
import TaskList from '../list/List.component';

import './GroupList.css';

const ListStyle = {
  margin: '3em auto',
  maxWidth: '75%',
  display: 'flex',
  justifyContent: 'center',
};

export default class GroupList extends React.Component {
  constructor() {
    super();
    this.state = {
      lists: null,
    };
  }

  componentDidMount() {
    axios({
      method: 'post',
      data: {
        groupName: 'eunomia-team',
      },
      withCredentials: true,
      url: `${serverName}/group/get-list`,
    }).then((res) => {
      console.log(res);
      this.setState(() => ({ lists: res.data.list }), () => {
        console.log(this.state);
      });
    }).catch((error) => {
      console.log(error);
    });
  }

  componentDidUpdate() { }

  render() {
    const { lists } = this.state;
    if (lists == null) {
      return (
        <div className="App">
          <Settings />
        </div>
      );
    }
    return (
      <div className="App">
        <Settings />
        <div style={ListStyle}>
          <TaskList key="list1" id="list1" index={1} showDate showUser data={lists} group />
        </div>
      </div>
    );
  }
}
