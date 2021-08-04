// Packages
import React from 'react';
// Styles
import './index.styles.scss';

export const CheckoutHeader = () => {
  const options = ['Product', 'Description', 'Quantity', 'Price', 'Remove'];

  return (
    <div className="checkout-header">
      {!!options &&
        options.map((option) => (
          <div key={option} className="header-block">
            <span>{option}</span>
          </div>
        ))}
    </div>
  );
};
