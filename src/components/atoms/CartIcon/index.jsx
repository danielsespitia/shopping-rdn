// Packages
import React from 'react';
import { connect } from 'react-redux';
// Action Types
import { toggleCartHidden } from '../../../redux/cart/cart.actions';
// Icons
import { ReactComponent as ShoppingIcon } from '../../../assets/shopping-bag.svg';
// Styles
import './index.styles.scss';

const CartIcon = ({ toggleCartHidden }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export const ConnectedCartIcon = connect(null, mapDispatchToProps)(CartIcon);
