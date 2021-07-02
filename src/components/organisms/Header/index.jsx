// Packages
import React from 'react';
import { Link } from 'react-router-dom';
// Styles
import './index.styles.scss';
// Assets
import { ReactComponent as Logo } from '../../../assets/crown.svg';

export const Header = ({ options }) => {
  const switchToUpperCase = (option) => option.toUpperCase();

  return (
    <header className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        {!!options &&
          options.map((option) => (
            <Link className="option" to={`/${option}`}>
              {switchToUpperCase(option)}
            </Link>
          ))}
      </div>
    </header>
  );
};
