/* eslint-disable no-console */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-return-assign */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable max-classes-per-file */

import React from 'react';

import './Register.css';
import {
  Schema, FormGroup, FormControl, ControlLabel, Form, IconButton, Icon,
} from 'rsuite';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { serverName } from '../../app/constans';

const { StringType } = Schema.Types;

const model = Schema.Model({
  fullname: StringType().isRequired('This field is required.'),
  email: StringType().isRequired('This field is required.')
    .isEmail('Please enter a valid email address.'),
  password: StringType().isRequired('This field is required.'),
  verifyPassword: StringType().isRequired('This field is required.')
    .addRule((value, data) => {
      if (value !== data.password) return false;
      return true;
    }, 'The two passwords do not match'),
});

class TextField extends React.PureComponent {
  render() {
    const {
      name, label, accepter, ...props
    } = this.props;
    return (
      <FormGroup>
        <ControlLabel style={{ textAlign: 'left', padding: 0, color: '#97969B' }}>
          {label}
          {' '}
        </ControlLabel>
        <FormControl name={name} accepter={accepter} {...props} />
      </FormGroup>
    );
  }
}

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formValue: {
        fullname: '',
        email: '',
        password: '',
        verifyPassword: '',
      },
      formError: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { formValue } = this.state;
    if (!this.form.check()) {
      return;
    }
    axios({
      method: 'post',
      data: {
        fullname: formValue.fullname,
        email: formValue.email,
        password: formValue.password,
      },
      withCredentials: true,
      url: `${serverName}/users/register`,
    }).then((res) => {
      console.log(res);
      // eslint-disable-next-line react/destructuring-assignment
      this.props.history.push('/login');
    })
      .catch((error) => {
        console.log(error.response);
      });
  }

  render() {
    const { formValue } = this.state;

    const RegisterStyle = {
      margin: '50px auto',
      padding: '15px',
      border: '2px solid #292D33',
      borderRadius: '15px',
      boxShadow: '0px 0px 22px 1px rgba(15,19,26,0.75)',
    };

    return (
      <div>
        <Form
          layout="horizontal"
          style={{ ...RegisterStyle, maxWidth: 345 }}
          ref={(ref) => (this.form = ref)}
          onChange={(_formValue) => {
            this.setState({ formValue: _formValue });
          }}
          onCheck={(_formError) => {
            this.setState({ formError: _formError });
          }}
          formValue={formValue}
          model={model}
        >

          <h4> Sign Up for Eunomia </h4>
          <hr />

          <TextField name="fullname" label="Full Name" autoComplete="off" />
          <TextField name="email" label="Email Address" />
          <TextField name="password" label="Password" type="password" />
          <TextField name="verifyPassword" label="Verify Password" type="password" />

          <p style={{ color: '#97969B', paddingBottom: 20 }}>
            With Sign Up you accept the
            <a href="#"> Terms of Use</a>
            {' '}
            and
            <a href="#"> Privacy Policy</a>
            .
          </p>

          <IconButton
            onClick={this.handleSubmit}
            block
            appearance="ghost"
            icon={<Icon className="fill-color" icon="user-plus" size="lg" />}
          >
            Join Now
          </IconButton>

          <p style={{ color: '#97969B', paddingTop: 20 }}>
            Already have an account?
            {' '}
            <Link to="/login" style={{ color: 'white', textDecoration: 'underline' }}>
              Login here
            </Link>
            .
          </p>
        </Form>
      </div>
    );
  }
}
