/* eslint-disable react/no-unused-state */
/* eslint-disable react/prop-types */

import React, { Component } from 'react';

import { Navbar, Nav, Icon } from 'rsuite';
import ResponsiveNav from '@rsuite/responsive-nav';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { toggle } from '../settings/settingsSlice';

import './Navbar.css';

const NavBarInstance = ({
  onSelect, activeKey, appearance, navItems,
}) => {
  const dispatch = useDispatch();

  const headerStyle = {
    padding: '4px 20px',
    margin: 0,
    display: 'inline-block',
  };

  const navStyle = {
    boxShadow: '0px 3px 5px 0px rgba(15,19,26,0.5)',
    backgroundColor: '#0F131A',
  };

  return (
    <Navbar appearance={appearance} style={navStyle}>

      <Navbar.Header style={headerStyle} className="navbar-brand logo">
        <Link to="/">
          <img
            alt="logo"
            src={`${process.env.PUBLIC_URL}/logo.svg`}
            width="50"
            height="50"
            className="d-inline-block align-top"
          />
          {' '}
        </Link>
      </Navbar.Header>

      <Navbar.Body>
        <ResponsiveNav
          appearance="subtle"
          onSelect={onSelect}
          activeKey={activeKey}
        >
          {navItems.map((item) => (

            <ResponsiveNav.Item
              key={item.key}
              componentClass={Link}
              to={item.to}
              eventKey={item.key}
              icon={<Icon icon={item.icon} />}
            >
              {item.name}
            </ResponsiveNav.Item>
          ))}
        </ResponsiveNav>

        <Nav pullRight onSelect={() => dispatch(toggle())}>
          <Nav.Item icon={<Icon icon="cog" />} />
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
};

export default class MainNavbar extends Component {
  constructor(navItems) {
    super();
    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      activeKey: '1',
      navItems: navItems.navItems,
    };
  }

  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }

  render() {
    const { activeKey, navItems } = this.state;
    return (
      <div className="nav-wrapper av-background">
        <NavBarInstance
          navItems={navItems}
          appearance="subtle"
          activeKey={activeKey}
          onSelect={this.handleSelect}
        />
      </div>
    );
  }
}
