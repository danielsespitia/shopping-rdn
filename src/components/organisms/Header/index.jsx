// Packages
import React from 'react';
// Components
import { CrownLogo, NavItems } from '../../';
// Utils
import { auth } from '../../../firebase/firebase.utils';
// Styles
import './index.styles.scss';
// TODO: Solucionar prop drilling con contexto

export const Header = ({ options, currentUser }) => {
  const logOut = () => auth.signOut();

  return (
    <header className="header">
      <CrownLogo />
      <NavItems options={options} currentUser={currentUser} logOut={logOut} />
    </header>
  );
};
