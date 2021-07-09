// Packages
import React, { Component } from 'react';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
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

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { fields, labelName } = this.props;

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
                label={labelName(field)}
                value={`${this.state[field]}`}
                required
              />
            ))}
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
