/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-return-assign */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable max-classes-per-file */

/* eslint-disable no-console */

import React from 'react';

import './Login.css';
import {
  Schema, FormGroup, FormControl, ControlLabel, Form, Button,
} from 'rsuite';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { serverName } from '../../app/constans';

const { StringType } = Schema.Types;

const model = Schema.Model({
  email: StringType().isRequired('This field is required.')
    .isEmail('Please enter a valid email address.'),
  password: StringType().isRequired('This field is required.'),
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

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formValue: {
        email: '',
        password: '',
      },
      formError: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { formValue } = this.state;
    if (!this.form.check()) {
      console.error('Form Error');
      return;
    }
    axios({
      method: 'post',
      data: {
        email: formValue.email,
        password: formValue.password,
      },
      withCredentials: true,
      url: `${serverName}/users/login`,
    }).then((res) => {
      console.log(res);
      // eslint-disable-next-line react/destructuring-assignment
      // this.props.history.push('/eunomia-frontend/');
      window.location.href = '/';
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

          <h4> Login for Eunomia </h4>
          <hr />

          <TextField name="email" label="Email Address" />
          <TextField name="password" label="Password" type="password" />

          <Button
            block
            appearance="ghost"
            onClick={this.handleSubmit}
          >
            Login
          </Button>

          <p style={{ color: '#97969B', paddingTop: 20 }}>
            Not registered on Eunomia?
            {' '}
            <Link to="/eunomia-frontend/register" style={{ color: 'white', textDecoration: 'underline' }}>
              Register here
            </Link>
            .
          </p>
        </Form>
      </div>
    );
  }
}
