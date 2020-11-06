import React from 'react';

import { mergeClasses } from '../../../classify';
import defaultClasses from './grid.module.scss';
const Grid = (props) => {
  const { children, classes: propClasses } = props;
  const classes = mergeClasses(defaultClasses, propClasses);

  return (
    <div className={`${classes.root} row`}>
      <div className={`${classes.inner_root} col-12`}>{children}</div>
    </div>
  );
};

export default Grid;
