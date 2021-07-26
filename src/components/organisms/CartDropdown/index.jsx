// Packages
import React from 'react';
// Components
import { CustomButton } from '../../';
// Styles
import './index.styles.scss';

export const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items"></div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);
