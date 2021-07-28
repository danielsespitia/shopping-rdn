// Packages
import React from 'react';
import { connect } from 'react-redux';
// Components
import { CrownLogo, NavItems, CartDropdown } from '../../';
// Utils
import { auth } from '../../../firebase/firebase.utils';
// Styles
import './index.styles.scss';
// TODO: Solucionar prop drilling con contexto

const Header = ({ options, currentUser, hidden }) => {
  const logOut = () => auth.signOut();

  return (
    <header className="header">
      <CrownLogo />
      <NavItems options={options} currentUser={currentUser} logOut={logOut} />
      {!hidden && <CartDropdown />}
    </header>
  );
};

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export const ConnectedHeader = connect(mapStateToProps)(Header);
