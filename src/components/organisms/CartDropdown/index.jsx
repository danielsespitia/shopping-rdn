// Packages
import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Selectors
import { selectCartItems } from '../../../redux/cart/cart.selectors';
// Actions
import { toggleCartHidden } from '../../../redux/cart/cart.actions';
// Components
import { CustomButton, CartItems } from '../../';
// Styles
import './index.styles.scss';

export const CartDropdown = ({ cartItems, dispatch }) => {
  const history = useHistory();
  return (
    <div className="cart-dropdown">
      {!!cartItems && cartItems.length ? (
        <CartItems cartItems={cartItems} />
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
      <CustomButton
        onClick={() => {
          history.push(`/checkout`);
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export const ConnectedCartDropdown = connect(mapStateToProps)(CartDropdown);
