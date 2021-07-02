// Packages
import React from 'react';
import { Link } from 'react-router-dom';
// Styles
import './index.styles.scss';
// Assets
import { ReactComponent as Logo } from '../../../assets/crown.svg';

export const CrownLogo = () => {
  return (
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
  );
};
