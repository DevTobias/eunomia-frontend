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

export default class TaskList extends React.Component {
  constructor({ showUser }) {
    super();

    this.handleSortEnd = this.handleSortEnd.bind(this);
    this.handleRemoveClick = this.handleRemoveClick.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
    this.decline = this.decline.bind(this);
    this.increase = this.increase.bind(this);

    this.state = {
      status: null,
      percent: 0,
      color: '#3385ff',
      data: [
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
      ],
    };

    this.showUser = showUser;
    this.percentStep = 10;
  }

  componentDidMount() {
    this.updatePercent();
  }

  handleSortEnd({ oldIndex, newIndex }) {
    const { data } = this.state;
    const newData = [...data];
    if (oldIndex === newIndex) {
      if (newData[oldIndex].checked) {
        newData[oldIndex].checked = false;
        this.decline();
      } else {
        newData[oldIndex].checked = true;
        this.increase();
      }
    } else {
      newData.splice(newIndex, 0, newData.splice(oldIndex, 1)[0]);
    }

    this.setState(() => ({ data: newData }));
  }

  handleRemoveClick(event) {
    const index = event.nativeEvent.target.parentNode.attributes.index.value;
    this.setState(({ data }) => {
      const newData = data;
      newData.splice(index, 1);
      return { data: newData };
    }, () => this.updatePercent());

    open('topEnd', 'success', 'Successfully deleted task');
    this.updatePercent();
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
      }, () => this.updatePercent());

      document.getElementById('input').value = '';
      open('topEnd', 'success', 'Successfully added task');
    }
  }

  handleEdit(event) {
    const index = event.currentTarget.attributes.index.value;
    const title = event.target.value;
    // eslint-disable-next-line react/destructuring-assignment
    this.state.data[index].title = title;
  }

  updatePercent() {
    const { data } = this.state;
    this.percentStep = 100 / data.length;
    let count = 0;
    data.forEach((element) => {
      if (element.checked) count += 1;
    });
    this.changePercent(count * this.percentStep);
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

  render() {
    const {
      percent, color, status, data,
    } = this.state;

    return (
      <List hover bordered sortable onSort={this.handleSortEnd} style={listStyle}>
        <Line percent={percent} strokeColor={color} status={status} />
        <div>
          <InputGroup style={inputStyles}>
            <Input id="input" placeholder="Add Task" autoComplete="off" />
            <InputGroup.Button onClick={this.handleAddClick} appearance="link" color="green">
              <Icon icon="plus-square" />
            </InputGroup.Button>
          </InputGroup>
        </div>
        {data.map((item, index) => (
          <List.Item key={item.title} index={index} style={itemStyle}>
            <div style={item.checked
              ? checkedBeforeStyle
              : { ...beforeStyle, backgroundColor: data[index].tagColor }}
            />
            <FlexboxGrid>

              {/* Front Icon
              <FlexboxGrid.Item colspan={2} style={styleCenter}>
                <Icon icon={item.icon} style={iconStyle} />
              </FlexboxGrid.Item>
              */}

              {/* Base information */}
              <FlexboxGrid.Item colspan={21} style={{ ...styleCenter, ...baseStyle }}>
                <ContentEditable
                  spellCheck="false"
                  style={item.checked ? checkedTitleStyle : titleStyle}
                  innerRef={this.contentEditable}
                  html={item.title}
                  index={index}
                  disabled={false}
                  onChange={this.handleEdit}
                />

                <div style={slimText}>
                  <div>
                    {this.showUser ? <Icon icon="user-circle-o" style={{ paddingRight: 5 }} /> : null}
                    {this.showUser ? ` ${item.creator}` : null}
                  </div>
                  <div style={date}>{item.date}</div>
                </div>
              </FlexboxGrid.Item>

              {/* Button Group */}
              <FlexboxGrid.Item colspan={3} style={{ ...styleCenter }}>
                <ButtonGroup>
                  {/* <IconButton index={index} appearance="link" icon={<Icon icon="eye" />} /> */}
                  {/* <IconButton index={index} onClick={this.handleEditClick}
                  appearance="link" icon={<Icon icon="edit" />} /> */}
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
