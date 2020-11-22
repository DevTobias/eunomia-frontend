/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */

import React from 'react';
import {
  List, FlexboxGrid, Icon, ButtonGroup, IconButton,
} from 'rsuite';

import './List.css';

const styleCenter = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '60px',
};

const slimText = {
  fontSize: '0.666em',
  color: '#97969B',
  fontWeight: 'lighter',
  paddingBottom: 5,
};

const date = {
  paddingTop: 5,
};

const titleStyle = {
  paddingBottom: 5,
  whiteSpace: 'nowrap',
  fontWeight: 500,
  color: 'white',
};

const checkedTitleStyle = {
  paddingBottom: 5,
  whiteSpace: 'nowrap',
  fontWeight: 500,
  textDecoration: 'line-through',
  color: '#282C34',
};

export default class ListDemo extends React.Component {
  constructor() {
    super();
    this.showUser = false;
    this.handleSortEnd = this.handleSortEnd.bind(this);
    this.handleRemoveClick = this.handleRemoveClick.bind(this);
    this.state = {
      data: [
        {
          title: 'Hong Kong independent travel',
          icon: 'image',
          creator: 'Yvnonne',
          date: '2017.10.13 14:50',
          checked: false,
        },
        {
          title: 'Celebration of the Mid-Autumn festival',
          icon: 'image',
          creator: 'Daibiao',
          date: '2017.10.13 14:50',
          checked: false,
        },
        {
          title: 'Live to play basketball',
          icon: 'film',
          creator: 'Bidetoo',
          date: '2017.10.13 14:50',
          checked: false,
        },
        {
          title: '2018 the legislature meeting broadcast live',
          icon: 'film',
          creator: 'Yvnonne',
          date: '2017.10.13 14:50',
          checked: false,
        },
      ],
    };
  }

  handleSortEnd({ oldIndex, newIndex }) {
    if (oldIndex === newIndex) {
      this.setState(({ data }) => {
        const newData = [...data];
        newData[oldIndex].checked = !newData[oldIndex].checked;
        return {
          data: newData,
        };
      });
    } else {
      this.setState(({ data }) => {
        const moveData = data.splice(oldIndex, 1);
        const newData = [...data];
        newData.splice(newIndex, 0, moveData[0]);
        return {
          data: newData,
        };
      });
    }
  }

  handleRemoveClick(event) {
    const index = event.nativeEvent.target.parentNode.attributes.index.value;
    this.setState(({ data }) => {
      const newData = data;
      newData.splice(index, 1);
      return {
        data: newData,
      };
    });
  }

  render() {
    const { data } = this.state;
    return (
      <List hover sortable bordered onSort={this.handleSortEnd}>
        {data.map((item, index) => (
          <List.Item key={item.title} index={index}>
            <FlexboxGrid>

              {/* icon */}
              <FlexboxGrid.Item colspan={2} style={styleCenter}>
                <Icon
                  icon={item.icon}
                  style={{
                    color: 'darkgrey',
                    fontSize: '1.5em',
                  }}
                />
              </FlexboxGrid.Item>

              {/* base info */}
              <FlexboxGrid.Item
                colspan={17}
                style={{
                  ...styleCenter,
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  overflow: 'hidden',
                }}
              >
                <div style={item.checked ? checkedTitleStyle : titleStyle}>{item.title}</div>
                <div style={slimText}>
                  <div>
                    {this.showUser ? <Icon icon="user-circle-o" style={{ paddingRight: 5 }} /> : null}
                    {this.showUser ? ` ${item.creator}` : null}
                  </div>
                  <div style={date}>{item.date}</div>
                </div>
              </FlexboxGrid.Item>

              <FlexboxGrid.Item colspan={5} style={{ ...styleCenter }}>
                <ButtonGroup>
                  <IconButton index={index} appearance="link" icon={<Icon icon="eye" />} />
                  <IconButton index={index} appearance="link" icon={<Icon icon="edit" />} />
                  <IconButton index={index} onClick={this.handleRemoveClick} appearance="link" color="red" icon={<Icon icon="close" />} />
                </ButtonGroup>
              </FlexboxGrid.Item>
            </FlexboxGrid>
          </List.Item>
        ))}
      </List>
    );
  }
}
