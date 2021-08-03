// Packages
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Selectors
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';
// Styles
import './index.styles.scss';

const options = ['Description', 'Quantity', 'Price', 'Remove'];

export const CheckoutPage = ({ cartItems, total }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        {!!options &&
          options.map((option) => (
            <div key={option} className="header-block">
              <span>{option}</span>
            </div>
          ))}
      </div>
      {!!cartItems && cartItems.map((cartItem) => cartItem.name)}
      <div className="total">
        <span>TOTAL: {total}</span>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export const ConnectedCheckoutPage = connect(mapStateToProps)(CheckoutPage);
