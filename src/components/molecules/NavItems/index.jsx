// Packages
import React from 'react';
// Components
import { NavItem } from '../../atoms';
// Styles
import './index.styles.scss';

export const NavItems = ({ options }) => (
  <div className="options">
    {!!options &&
      options.map(({ id, ...navItemProps }) => (
        <NavItem key={id} {...navItemProps} />
      ))}
  </div>
);
