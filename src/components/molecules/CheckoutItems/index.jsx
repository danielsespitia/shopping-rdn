// Packages
import React from 'react';
// Components
import { ConnectedCheckoutItem } from '../../';
// Styles
import './index.styles.scss';

export const CheckoutItems = ({ cartItems }) => {
  return (
    <div className="checkout-items">
      {!!cartItems &&
        cartItems.map((cartItem) => (
          <ConnectedCheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
    </div>
  );
};
