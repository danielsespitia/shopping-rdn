// Packages
import React from 'react';
// Styles
import './index.styles.scss';

export const CustomButton = ({ children, ...otherProps }) => (
  <button className="custom-button" {...otherProps}>
    {children}
  </button>
);
