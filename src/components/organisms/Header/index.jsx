// Packages
import React from 'react';
// Components
import { CrownLogo, NavItems } from '../../';
// Styles
import './index.styles.scss';

export const Header = ({ options }) => {
  return (
    <header className="header">
      <CrownLogo />
      <NavItems options={options} />
    </header>
  );
};
