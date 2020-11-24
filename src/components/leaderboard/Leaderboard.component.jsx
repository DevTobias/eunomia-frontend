/* eslint-disable react/no-unused-state */
/* eslint-disable react/prop-types */

import React from 'react';
import {
  Table,
} from 'rsuite';

import './Leaderboard.css';

const {
  Column, HeaderCell, Cell,
} = Table;

export default class Leaderboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addColumn: false,
      data: props.data,
    };
    this.handleSortColumn = this.handleSortColumn.bind(this);
  }

  handleSortColumn(sortColumn, sortType) {
    this.setState({
      loading: true,
    });

    setTimeout(() => {
      this.setState({
        sortColumn,
        sortType,
        loading: false,
      });
    }, 500);
  }

  getData() {
    const { data, sortColumn, sortType } = this.state;

    if (sortColumn && sortType) {
      return data.sort((a, b) => {
        let x = a[sortColumn];
        let y = b[sortColumn];
        if (typeof x === 'string') {
          x = x.charCodeAt();
        }
        if (typeof y === 'string') {
          y = y.charCodeAt();
        }
        if (sortType === 'asc') {
          return x - y;
        }
        return y - x;
      });
    }
    return data;
  }

  render() {
    const { sortColumn, sortType, loading } = this.state;

    return (
      <div>
        <Table
          virtualized
          height={900}
          data={this.getData()}
          sortColumn={sortColumn}
          sortType={sortType}
          onSortColumn={this.handleSortColumn}
          loading={loading}
        >
          <Column width={225}>
            <HeaderCell>Full Name</HeaderCell>
            <Cell dataKey="fullName" />
          </Column>

          <Column width={225} sortable>
            <HeaderCell>Tasks done</HeaderCell>
            <Cell dataKey="tasksDone" />
          </Column>

          <Column width={225} sortable>
            <HeaderCell>Points</HeaderCell>
            <Cell dataKey="points" />
          </Column>
        </Table>
      </div>
    );
  }
}
