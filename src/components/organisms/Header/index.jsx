// Packages
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Selectors
import { selectCartHidden } from '../../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../../redux/user/user.selectors';
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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export const ConnectedHeader = connect(mapStateToProps)(Header);
