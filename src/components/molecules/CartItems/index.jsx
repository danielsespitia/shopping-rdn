// Packages
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Selectors
import { selectCartItems } from '../../../redux/cart/cart.selectors';
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

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export const ConnectedCartItems = connect(mapStateToProps)(CartItems);
