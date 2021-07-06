// Packages
import React from 'react';
// Components
import { NavItem } from '../../atoms';
// Styles
import './index.styles.scss';

export const NavItems = ({ options, currentUser, logOut }) => {
  return (
    <div className="options">
      {!!options &&
        options.map(({ id, ...navItemProps }) => (
          <NavItem key={id} {...navItemProps} />
        ))}
      {!!currentUser ? (
        // TODO: Refactor
        <div style={{ cursor: 'pointer' }} className="option" onClick={logOut}>
          SIGN OUT
        </div>
      ) : (
        <NavItem name="sign-in"></NavItem>
      )}
    </div>
  );
};
