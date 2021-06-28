import React from 'react';
import { MenuItem } from '../..';

import './index.styles.scss';

export const Directory = ({ sections }) => {
  return (
    <div className="directory" data-testid="directory">
      {!!sections &&
        sections.map(({ title, id, imageUrl, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
    </div>
  );
};
