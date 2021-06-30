import React from 'react';
import { withRouter } from 'react-router-dom';
import { MenuItem } from '../';
import './index.styles.scss';

export const MenuItemWithRoute = ({
  history,
  linkUrl,
  match,
  ...menuItemProps
}) => (
  <div
    className="routed-menu-item"
    onClick={() => {
      history.push(`${match.url}${linkUrl}`);
    }}
  >
    <MenuItem {...menuItemProps} />
  </div>
);

export const RoutedMenuItem = withRouter(MenuItemWithRoute);
