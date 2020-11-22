/* eslint-disable react/prop-types */
/* eslint-disable class-methods-use-this */

import React from 'react';
import {
  List, FlexboxGrid, Icon, ButtonGroup, IconButton, InputGroup, Input,
} from 'rsuite';

import './List.css';
import {
  listStyle, itemStyle, beforeStyle, checkedBeforeStyle, styleCenter, baseStyle,
  slimText, date, titleStyle, checkedTitleStyle, inputStyles,
} from './List.style';

export default class TaskList extends React.Component {
  constructor({ showUser }) {
    super();
    this.showUser = showUser;
    this.handleSortEnd = this.handleSortEnd.bind(this);
    this.handleRemoveClick = this.handleRemoveClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);

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
    this.setState(({ data }) => {
      const newData = [...data];

      if (oldIndex === newIndex) {
        newData[oldIndex].checked = !newData[oldIndex].checked;
      } else {
        newData.splice(newIndex, 0, newData.splice(oldIndex, 1)[0]);
      }

      return { data: newData };
    });
  }

  handleRemoveClick(event) {
    const index = event.nativeEvent.target.parentNode.attributes.index.value;
    this.setState(({ data }) => {
      const newData = data;
      newData.splice(index, 1);
      return { data: newData };
    });
  }

  handleEditClick(event) {
    // eslint-disable-next-line no-console
    console.log(event);
  }

  handleAddClick() {
    const val = document.getElementById('input').value;
    if (val) {
      const newEntry = {
        title: val,
        icon: 'image',
        creator: 'Yvnonne',
        date: '2017.10.13 14:50',
        checked: false,
      };
      this.setState(({ data }) => {
        const newData = [...data];
        newData.push(newEntry);
        return { data: newData };
      });
      document.getElementById('input').value = '';
    }
  }

  render() {
    const { data } = this.state;
    return (
      <List hover bordered sortable onSort={this.handleSortEnd} style={listStyle}>
        <div>
          <InputGroup style={inputStyles}>
            <Input id="input" placeholder="Add Task" />
            <InputGroup.Button onClick={this.handleAddClick} appearance="link" color="green">
              <Icon icon="plus-square" />
            </InputGroup.Button>
          </InputGroup>
        </div>
        {data.map((item, index) => (
          <List.Item key={item.title} index={index} style={itemStyle}>
            <div style={item.checked ? checkedBeforeStyle : beforeStyle} />
            <FlexboxGrid>

              {/* Front Icon
              <FlexboxGrid.Item colspan={2} style={styleCenter}>
                <Icon icon={item.icon} style={iconStyle} />
              </FlexboxGrid.Item>
              */}

              {/* Base information */}
              <FlexboxGrid.Item colspan={20} style={{ ...styleCenter, ...baseStyle }}>
                <div style={item.checked ? checkedTitleStyle : titleStyle}>{item.title}</div>
                <div style={slimText}>
                  <div>
                    {this.showUser ? <Icon icon="user-circle-o" style={{ paddingRight: 5 }} /> : null}
                    {this.showUser ? ` ${item.creator}` : null}
                  </div>
                  <div style={date}>{item.date}</div>
                </div>
              </FlexboxGrid.Item>

              {/* Button Group */}
              <FlexboxGrid.Item colspan={4} style={{ ...styleCenter }}>
                <ButtonGroup>
                  {/* <IconButton index={index} appearance="link" icon={<Icon icon="eye" />} /> */}
                  <IconButton index={index} onClick={this.handleEditClick} appearance="link" icon={<Icon icon="edit" />} />
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
