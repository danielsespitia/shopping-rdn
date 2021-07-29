// Packages
import React from 'react';
import { connect } from 'react-redux';
// Selectors
import { selectCartItems } from '../../../redux/cart/cart.selectors';
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

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export const ConnectedCartItems = connect(mapStateToProps)(CartItems);
