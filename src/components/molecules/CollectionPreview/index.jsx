// Packages
import React from 'react';
// Components
import { CollectionItem } from '../../atoms';
// Styles
import './index.styles.scss';

export const CollectionPreview = ({ title, items }) => {
  console.log(title, items);
  const upperCaseTitle = title.toUpperCase();
  return (
    <div className="collection-preview">
      <h1 className="title">{upperCaseTitle}</h1>
      <div className="preview">
        {items
          // Performance issues (gets re-rendered on every call)
          .filter((item, idx) => idx < 4)
          .map(({ id, ...collectionItemProps }) => (
            <CollectionItem key={id} {...collectionItemProps} />
          ))}
      </div>
    </div>
  );
};
