import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import './index.styles.scss';

export const MenuItem = ({ title, imageUrl, size, linkUrl, isNavegable }) => {
  const history = useHistory();
  const match = useRouteMatch();
  return (
    <div
      className={`${size || null} menu-item`}
      data-testid="menu-item"
      onClick={
        isNavegable
          ? () => {
              history.push(`${match.url}${linkUrl}`);
            }
          : null
      }
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
};
