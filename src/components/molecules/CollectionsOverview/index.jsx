// Packages
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Selectors
import { selectCollections } from '../../../redux/shop/shop.selectors';
// Components
import { CollectionPreview } from '../../';

export const CollectionsOverview = ({ collections }) => {
  return (
    <div>
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

export const ConnectedCollectionsOverview = connect(mapStateToProps)(
  CollectionsOverview
);
