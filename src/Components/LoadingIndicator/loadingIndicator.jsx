import React from 'react';

import { mergeClasses } from '../../classify';
import defaultClasses from './loadingIndicator.module.scss';

const LoadingIndicator = (props) => {
  const classes = mergeClasses(defaultClasses, props.classes);

  const className = props.global ? classes.global : classes.root_indicator;
  return (
    <div className={className}>
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">{props.children}</span>
      </div>
    </div>
  );
};

export default LoadingIndicator;
