/* eslint-disable require-jsdoc */

import React from 'react';
import { Button, Drawer } from 'rsuite';

import { useSelector, useDispatch } from 'react-redux';
import { close, selectShow } from './settingsSlice';

import './Settings.module.css';

export default function Settings() {
  const dispatch = useDispatch();
  const show = useSelector(selectShow);
  return (
    <div>
      <Drawer
        show={show}
        onHide={() => dispatch(close())}
        placement="left"
        size="xs"
      >
        <Drawer.Header>
          <Drawer.Title>Settings</Drawer.Title>
        </Drawer.Header>

        <Drawer.Body />

        <Drawer.Footer>
          <Button
            onClick={() => dispatch(close())}
            appearance="subtle"
            style={{ margin: '15px 0px' }}
          >
            Done
          </Button>
        </Drawer.Footer>
      </Drawer>
    </div>
  );
}
