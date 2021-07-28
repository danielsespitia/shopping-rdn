// Packages
import React from 'react';
// Components
import { CustomButton, ConnectedCartItems } from '../../';
// Styles
import './index.styles.scss';

export const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <ConnectedCartItems cartItems={cartItems} />
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);
