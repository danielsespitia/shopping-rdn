// Packages
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Selectors
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';
// Components
import { CheckoutItems, CheckoutHeader } from '../../components';
// Styles
import './index.styles.scss';

export const Checkout = ({ cartItems, total }) => {
  return (
    <div className="checkout">
      <CheckoutHeader />
      <CheckoutItems cartItems={cartItems} />
      <div className="total">TOTAL: ${total}</div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export const ConnectedCheckout = connect(mapStateToProps)(Checkout);
