import React from 'react';

import { mergeClasses } from '../../classify';
import defaultClasses from './mask.module.scss';

const Mask = (props) => {
  const classes = mergeClasses(defaultClasses, props.classes);
  const { dismiss, isActive } = props;
  const className = isActive ? classes.root_active : classes.root;

  return <button className={className} onClick={dismiss} />;
};

export default Mask;
