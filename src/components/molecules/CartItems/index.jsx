// Packages
import React from 'react';
import { connect } from 'react-redux';
// Components
import { CartItem } from '../../';
// Styles
import './index.styles.scss';

export const CartItems = ({ cartItems }) => (
  <div className="cart-items">
    {!!cartItems &&
      cartItems.map((item) => <CartItem id={item.id} item={item} />)}
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export const ConnectedCartItems = connect(mapStateToProps)(CartItems);
