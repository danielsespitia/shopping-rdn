import React from 'react';
import { MenuItem, RoutedMenuItem } from '../..';

import './index.styles.scss';

export const Directory = ({ sections, isNavigable }) => {
  console.log(isNavigable);
  return (
    <div className="directory" data-testid="directory">
      {!!sections &&
        sections.map(({ id, ...otherSectionProps }) =>
          !isNavigable ? (
            <MenuItem key={id} {...otherSectionProps} />
          ) : (
            <RoutedMenuItem key={id} {...otherSectionProps} />
          )
        )}
    </div>
  );
};
