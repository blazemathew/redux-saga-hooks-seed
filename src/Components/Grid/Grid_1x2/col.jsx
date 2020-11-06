import React from 'react';

import { mergeClasses } from '../../../classify';
import defaultClasses from './grid.module.scss';
const Col = (props) => {
  const { children } = props;
  const classes = mergeClasses(defaultClasses, props.classes);

  return <div className={`${classes.inner_root} col-6`}>{children}</div>;
};

export default Col;
