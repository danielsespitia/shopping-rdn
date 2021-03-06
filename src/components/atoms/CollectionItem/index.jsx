// Packages
import React from 'react';
import { connect } from 'react-redux';
// Action Types
import { addItem } from '../../../redux/cart/cart.actions';
// Components
import { CustomButton } from '../../';
// Styles
import './index.styles.scss';

export const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)}>ADD TO CART</CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export const ConnectedCollectionItem = connect(
  null,
  mapDispatchToProps
)(CollectionItem);
