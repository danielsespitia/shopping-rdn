import React from 'react';
import './index.styles.scss';

export const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`${size || null} menu-item`} data-testid="menu-item">
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
