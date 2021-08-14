// Packages
import React from 'react';
import { connect } from 'react-redux';
// Components
import { ConnectedCollectionItem } from '../../components';
// Selectors
import { selectCollection } from '../../redux/shop/shop.selectors';
// Styles
import './index.styles.scss';

export const CollectionContainer = (props) => {
  const { title, items } = props.collection;

  return (
    <div className="collection-container">
      <h2 className="title">{title}</h2>
      <div className="items">
        {!!items &&
          items.length > 0 &&
          items.map((item) => <ConnectedCollectionItem key={item.id} item={item} />)}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export const ConnectedCollectionContainer = connect(mapStateToProps)(
  CollectionContainer
);
