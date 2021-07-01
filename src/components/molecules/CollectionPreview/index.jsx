import React from 'react';
import './index.styles.scss';

export const CollectionPreview = ({ title, items }) => {
  console.log(title, items);
  const upperCaseTitle = title.toUpperCase();
  return (
    <div className="collection-preview">
      <h1 className="title">{upperCaseTitle}</h1>
      <div className="preview">
        {items.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </div>
  );
};
