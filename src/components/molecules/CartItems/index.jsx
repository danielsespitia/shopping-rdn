// Packages
import React from 'react';

// Components
import { CartItem } from '../../';
// Styles
import './index.styles.scss';

export const CartItems = ({ cartItems }) => (
  <div className="cart-items">
    {!!cartItems &&
      cartItems.map((item) => (
        <CartItem key={item.id} id={item.id} item={item} />
      ))}
  </div>
);
