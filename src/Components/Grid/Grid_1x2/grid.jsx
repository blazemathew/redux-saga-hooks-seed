import React from 'react';

import { mergeClasses } from '../../../classify';
import defaultClasses from './grid.module.scss';
const Grid = (props) => {
  const { children } = props;
  const classes = mergeClasses(defaultClasses, props.classes);

  return <div className={`${classes.root} row`}>{children}</div>;
};

export default Grid;
