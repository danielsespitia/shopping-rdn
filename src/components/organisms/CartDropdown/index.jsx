// Packages
import React from 'react';
import { connect } from 'react-redux';
// Components
import { CustomButton, CartItem } from '../../';
// Styles
import './index.styles.scss';

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {!!cartItems &&
        cartItems.map((item) => <CartItem id={item.id} item={item} />)}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export const ConnectedCartDropdown = connect(mapStateToProps)(CartDropdown);
