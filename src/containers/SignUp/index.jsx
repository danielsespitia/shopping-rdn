// Packages
import React from 'react';
import { FormInput, CustomButton } from '../../components';
// Utils
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
// Styles
import './index.styles.scss';

export class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { fields, inputType, labelName } = this.props;

    return (
      <div className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          {!!fields &&
            fields.map((field) => (
              <FormInput
                key={field}
                name={field}
                type={inputType(field)}
                handleChange={this.handleChange}
                label={labelName(field)}
                value={`${this.state[field]}`}
                required
              />
            ))}
          <div className="buttons">
            <CustomButton type="submit">Sign Up</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
