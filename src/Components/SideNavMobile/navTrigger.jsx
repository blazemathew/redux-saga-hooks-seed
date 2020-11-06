import React from 'react';
import { node, shape, string } from 'prop-types';
import { Menu as MenuIcon } from 'react-feather';

import Icon from '../Icon';
import { mergeClasses } from '../../classify';
import defaultClasses from './navTrigger.module.scss';
import { useNavigationTrigger } from '../../Hooks/Navigation/useNavigationTrigger';

const NavigationTrigger = (props) => {
  const {
    handleOpenNavigation,
    drawer,
    handleCloseNavigation
  } = useNavigationTrigger();
  const classes = mergeClasses(defaultClasses, props.classes);
  return (
    <button
      className={`${classes.root} btn`}
      aria-label="Toggle navigation panel"
      onClick={() =>
        drawer !== null ? handleCloseNavigation() : handleOpenNavigation()
      }
    >
      <Icon src={MenuIcon} />
    </button>
  );
};

NavigationTrigger.propTypes = {
  children: node,
  classes: shape({
    root: string
  })
};

export default NavigationTrigger;
