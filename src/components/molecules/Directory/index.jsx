import React from 'react';
import { MenuItem } from '../..';

import './index.styles.scss';

export const Directory = ({ sections }) => {
  return (
    <div className="directory" data-testid="directory">
      {!!sections &&
        sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
    </div>
  );
};
