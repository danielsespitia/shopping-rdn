import React from 'react';
import { withRouter } from 'react-router-dom';
import './index.styles.scss';

export const MenuItemWithRoute = ({
  title,
  imageUrl,
  size,
  history,
  linkUrl,
  match,
}) => (
  <div
    className={`${size || null} menu-item`}
    data-testid="menu-item"
    onClick={() => {
      history.push(`${match.url}${linkUrl}`);
    }}
  >
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      className="background-image"
      data-testid="background-image"
    />
    <div className="content" data-testid="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export const RoutedMenuItem = withRouter(MenuItemWithRoute);
