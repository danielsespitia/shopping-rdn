// Packages
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Selectors
import { selectCollectionsForPreview } from '../../../redux/shop/shop.selectors';
// Components
import { CollectionPreview } from '../../';
// Styles
import './index.styles.scss';

export const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {!!collections &&
        collections.map(({ id, ...collectionPreviewProps }) => (
          <CollectionPreview key={id} {...collectionPreviewProps} />
        ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export const ConnectedCollectionsOverview = connect(mapStateToProps)(
  CollectionsOverview
);
