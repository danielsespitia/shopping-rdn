// Packages
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Selectors
import { selectCollections } from '../../redux/shop/shop.selectors';
// Components
import { CollectionPreview } from '../../components';

export const Shop = ({ collections }) => {
  console.log(collections);
  return (
    <div className="shop-page">
      {!!collections &&
        collections.map(({ id, ...collectionPreviewProps }) => (
          <CollectionPreview key={id} {...collectionPreviewProps} />
        ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export const ConnectedShop = connect(mapStateToProps)(Shop);
