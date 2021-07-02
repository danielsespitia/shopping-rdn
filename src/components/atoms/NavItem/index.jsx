// Packages
import React from 'react';
import { Link } from 'react-router-dom';
// Styles
import './index.styles.scss';

export const NavItem = ({ name }) => {
  const switchToUpperCase = (string) => string.toUpperCase();
  return (
    <Link className="option" to={`/${name}`}>
      {switchToUpperCase(name)}
    </Link>
  );
};
