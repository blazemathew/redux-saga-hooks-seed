import React from 'react';

import { mergeClasses } from '../../classify';
import defaultClasses from './mycdo.module.scss';

const MyCdo = (props) => {
  const classes = mergeClasses(defaultClasses, props.classes);

  return <div className={classes.root}>
    Hello You're now logged in
  </div>;
};

export default MyCdo;
