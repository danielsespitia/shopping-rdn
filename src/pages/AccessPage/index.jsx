// Packages
import React from 'react';
// Components
import { SignIn, SignUp } from '../../containers';
// Styles
import './index.styles.scss';

export const AccessPage = () => {
  const signUpFields = ['displayName', 'email', 'password', 'confirmPassword'];
  const signInFields = ['email', 'password'];

  const inputType = (field) => {
    if (field === 'displayName') return 'text';
    if (field === 'email') return 'email';
    if (field === 'password' || 'confirmPassword') return 'password';
    return 'text';
  };

  const labelName = (field) => {
    if (field === 'displayName') return 'Name';
    if (field === 'email') return 'Email';
    if (field === 'password') return 'Password';
    if (field === 'confirmPassword') return 'Confirm Password';
  };

  return (
    <div className="access-page">
      <SignIn fields={signInFields} labelName={labelName} />
      <SignUp
        fields={signUpFields}
        inputType={inputType}
        labelName={labelName}
      />
    </div>
  );
};
