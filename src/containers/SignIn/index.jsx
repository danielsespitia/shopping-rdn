// Packages
import React, { Component } from 'react';
// Components
import { FormInput, CustomButton } from '../../components';
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
    const capitalizeFirstLetter = (field) =>
      field.charAt(0).toUpperCase() + field.slice(1);

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
                label={capitalizeFirstLetter(field)}
                value={`${this.state[field]}`}
                required
              />
            ))}
          <CustomButton type="submit">Sign In</CustomButton>
        </form>
      </div>
    );
  }
}
