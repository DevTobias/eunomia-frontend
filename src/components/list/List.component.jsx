/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable class-methods-use-this */

import React from 'react';
import {
  List, FlexboxGrid, Icon, ButtonGroup, IconButton, InputGroup, Input,
  Notification, Progress,
} from 'rsuite';
import ContentEditable from 'react-contenteditable';
import axios from 'axios';

import { CirclePicker } from 'react-color';

import { serverName } from '../../app/constans';

import {
  listStyle, itemStyle, beforeStyle, checkedBeforeStyle, styleCenter, baseStyle,
  slimText, date, titleStyle, checkedTitleStyle, inputStyles,
} from './List.style';
import './List.css';

const { Line } = Progress;

function open(placement, func, val) {
  Notification[func]({
    title: val,
    placement,
  });
}

// custom id for intput field (multiple lists)

export default class TaskList extends React.Component {
  constructor({
    showUser, showDate, id, data, index, group,
  }) {
    super();

    this.handleSortEnd = this.handleSortEnd.bind(this);
    this.handleRemoveClick = this.handleRemoveClick.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
    this.decline = this.decline.bind(this);
    this.increase = this.increase.bind(this);
    this.handleChangeComplete = this.handleChangeComplete.bind(this);

    this.state = {
      status: null,
      percent: 0,
      color: '#3385ff',
      tagColor: '#34C3FF',
      data,
    };

    this.showUser = showUser;
    this.showDate = showDate;
    this.id = id;
    this.percentStep = 10;
    this.index = index;
    this.group = group;
    this.user = 'Tobias';
  }

  componentDidMount() {
    this.getUserName();
    this.updatePercent();
  }

  componentDidUpdate() { }

  handleSortEnd({ oldIndex, newIndex }) {
    const { data } = this.state;
    const newData = data;
    if (oldIndex === newIndex) {
      if (newData[this.index][oldIndex].checked) {
        newData[this.index][oldIndex].checked = false;
        this.decline();
      } else {
        newData[this.index][oldIndex].checked = true;
        this.increase();
      }
    } else {
      newData[this.index].splice(newIndex, 0, newData[this.index].splice(oldIndex, 1)[0]);
    }

    this.setState(() => ({ data: newData }), () => {
      this.saveTasks();
    });
  }

  handleRemoveClick(event) {
    const index = event.nativeEvent.target.parentNode.attributes.index.value;
    this.setState(({ data }) => {
      const newData = data;
      newData[this.index].splice(index, 1);
      return { data: newData };
    }, () => {
      this.updatePercent();
      this.saveTasks();
    });

    open('topEnd', 'success', 'Successfully deleted task');
    this.updatePercent();
  }

  handleAddClick() {
    const val = document.getElementById(this.id).value;
    if (val) {
      const newEntry = {
        title: val,
        icon: 'image',
        creator: this.user,
        date: '26.11.2020',
        checked: false,
        tagColor: this.state.tagColor,
      };

      this.setState(({ data }) => {
        const newData = data;
        newData[this.index].push(newEntry);
        return { data: newData };
      }, () => {
        this.updatePercent();
        this.saveTasks();
      });

      document.getElementById(this.id).value = '';
      open('topEnd', 'success', 'Successfully added task');
    }
  }

  handleEdit(event) {
    const index = event.currentTarget.attributes.index.value;
    const title = event.target.value;
    // eslint-disable-next-line react/destructuring-assignment
    this.state.data[this.index][index].title = title;
    this.saveTasks();
  }

  handleChangeComplete(color) {
    this.setState({ tagColor: color.hex });
  }

  async getUserName() {
    await axios({
      method: 'get',
      withCredentials: true,
      url: `${serverName}/users/get-name`,
    }).then((res) => {
      this.user = res.data.fullname;
    }).catch((error) => {
      console.log(error);
    });
    // return 'Tobias';
  }

  updatePercent() {
    const { data } = this.state;
    if (data[this.index].length) {
      this.percentStep = 100 / data[this.index].length;
      let count = 0;
      data[this.index].forEach((element) => {
        if (element.checked) count += 1;
      });
      this.changePercent(count * this.percentStep);
    } else {
      this.changePercent(100);
    }
  }

  changePercent(nextPercent, callback) {
    // eslint-disable-next-line no-param-reassign
    callback = callback || (() => {});
    // eslint-disable-next-line no-nested-ternary
    const percent = nextPercent < 0 ? 0 : nextPercent > 100 ? 100 : nextPercent;
    this.setState({
      percent,
      status: percent === 100 ? 'success' : null,
      color: percent === 100 ? '#52c41a' : '#3385ff',
    }, callback());
  }

  decline() {
    this.changePercent(this.state.percent - this.percentStep);
  }

  increase() {
    this.changePercent(this.state.percent + this.percentStep);
  }

  saveTasks() {
    let request = '/users/save-lists';
    if (this.group) request = '/group/save-list';
    axios({
      method: 'post',
      data: {
        lists: this.state.data,
        groupName: 'eunomia-team',
      },
      withCredentials: true,
      url: `${serverName}${request}`,
    }).then((res) => {
      console.log(res);
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    const {
      percent, color, status, data,
    } = this.state;

    const colors = ['#B80000', '#DB3E00', '#FF9800', '#008B02', '#34C3FF', '#673AB7'];
    if (this.index !== 0) {
      return (
        <List hover bordered sortable onSort={this.handleSortEnd} style={listStyle}>
          <FlexboxGrid>
            <FlexboxGrid.Item colspan={16}>
              <Line percent={Math.round(percent)} strokeColor={color} status={status} />
            </FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={8} style={{ padding: '10px 0' }}>
              <CirclePicker
                circleSize={14}
                circleSpacing={7}
                colors={colors}
                onChangeComplete={this.handleChangeComplete}
              />
            </FlexboxGrid.Item>
          </FlexboxGrid>

          <div>
            <InputGroup style={inputStyles}>
              <Input id={this.id} placeholder="Add Task" autoComplete="off" />
              <InputGroup.Button onClick={this.handleAddClick} appearance="link" color="green">
                <Icon icon="plus-square" />
              </InputGroup.Button>
            </InputGroup>
          </div>
          {(data[this.index]).map((item, ind) => (
            <List.Item key={item.title} index={ind} style={itemStyle}>
              <div style={item.checked
                ? checkedBeforeStyle
                : { ...beforeStyle, backgroundColor: item.tagColor }}
              />
              <FlexboxGrid>

                {/* Front Icon
                <FlexboxGrid.Item colspan={2} style={styleCenter}>
                  <Icon icon={item.icon} style={iconStyle} />
                </FlexboxGrid.Item>
                */}

                {/* Base information */}
                <FlexboxGrid.Item
                  colspan={21}
                  style={{
                    ...styleCenter,
                    ...baseStyle,
                  }}
                >
                  <ContentEditable
                    spellCheck="false"
                    style={item.checked ? checkedTitleStyle : titleStyle}
                    innerRef={this.contentEditable}
                    html={item.title}
                    index={ind}
                    disabled={false}
                    onChange={this.handleEdit}
                  />

                  <div style={slimText}>
                    <div>
                      {this.showUser ? <Icon icon="user-o" style={{ paddingRight: 5 }} /> : null}
                      {this.showUser ? ` ${item.creator}` : null}
                    </div>
                    {this.showDate ? <div style={date}>{item.date}</div> : null}
                  </div>
                </FlexboxGrid.Item>

                {/* Button Group */}
                <FlexboxGrid.Item colspan={3} style={{ ...styleCenter }}>
                  <ButtonGroup>
                    {/* <IconButton index={index} appearance="link"
                    icon={<Icon icon="eye" />} /> */}
                    {/* <IconButton index={index} onClick={this.handleEditClick}
                    appearance="link" icon={<Icon icon="edit" />} /> */}
                    <IconButton index={ind} onClick={this.handleRemoveClick} appearance="link" color="red" icon={<Icon icon="close" />} />
                  </ButtonGroup>
                </FlexboxGrid.Item>
              </FlexboxGrid>
            </List.Item>
          ))}
        </List>
      );
    }
    return null;
  }
}
