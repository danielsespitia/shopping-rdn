// Packages
import React, { Component } from 'react';
// Components
import { FormInput } from '../../components';
// Styles
import './index.styles.scss';

export class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const fields = ['email', 'password'];
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          {!!fields &&
            fields.map((field) => (
              <FormInput
                key={field}
                name={field}
                type={field}
                handleChange={this.handleChange}
                label={field}
                value={`${this.state[field]}`}
                required
              />
            ))}
        </form>
      </div>
    );
  }
}
