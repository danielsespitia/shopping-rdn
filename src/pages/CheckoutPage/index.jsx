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
import { ConnectedCheckoutItem } from '../../components';
// Styles
import './index.styles.scss';

const options = ['Product', 'Description', 'Quantity', 'Price', 'Remove'];

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
      {!!cartItems &&
        cartItems.map((cartItem) => (
          <ConnectedCheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
      <div className="total">TOTAL: ${total}</div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export const ConnectedCheckoutPage = connect(mapStateToProps)(CheckoutPage);
