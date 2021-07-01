// Packages
import React, { Component } from 'react';

// Components
import { CollectionPreview } from '../../components';

// Data
import SHOP_DATA from '../../shop.data';

export class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {!!collections &&
          collections.map(({ id, ...collectionPreviewProps }) => (
            <CollectionPreview key={id} {...collectionPreviewProps} />
          ))}
      </div>
    );
  }
}
