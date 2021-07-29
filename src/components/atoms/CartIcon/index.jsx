// Packages
import React from 'react';
import { connect } from 'react-redux';
// Action Types
import { toggleCartHidden } from '../../../redux/cart/cart.actions';
// Selectors
import { selectCartItemsCount } from '../../../redux/cart/cart.selectors';
// Icons
import { ReactComponent as ShoppingIcon } from '../../../assets/shopping-bag.svg';
// Styles
import './index.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

export const ConnectedCartIcon = connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
