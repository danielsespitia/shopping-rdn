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
import {
  CheckoutItems,
  CheckoutHeader,
  StripeCheckoutButton,
} from '../../components';
// Styles
import './index.styles.scss';

export const Checkout = ({ cartItems, total }) => {
  return (
    <div className="checkout">
      <CheckoutHeader />
      <CheckoutItems cartItems={cartItems} />
      <div className="total">TOTAL: ${total}</div>
      <div className="test-warning">
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </div>
      <StripeCheckoutButton price={total} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export const ConnectedCheckout = connect(mapStateToProps)(Checkout);
