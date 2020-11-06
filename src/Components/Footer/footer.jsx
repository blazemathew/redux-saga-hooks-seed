import React from 'react';

import { mergeClasses } from 'classify';
import defaultClasses from './footer.module.scss';
import { IconM } from '../Icon';

const Footer = (props) => {
  const classes = mergeClasses(defaultClasses, props.classes);

  return (
    <footer className={`footer mt-auto footer-light ${classes.root}`}>
      <div className={`container-fluid ${classes.footer_copyright}`}>
        <div className="row">
          <div className={`col-md-6 small ${classes.col_3}`}>
            <label className={classes.navbar_brand}>some footer</label>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
