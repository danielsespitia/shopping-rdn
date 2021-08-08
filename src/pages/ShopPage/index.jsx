// Packages
import React from 'react';
import { Route } from 'react-router-dom';
// Components
import { ConnectedCollectionsOverview } from '../../components';

export const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={ConnectedCollectionsOverview}
      />
    </div>
  );
};
