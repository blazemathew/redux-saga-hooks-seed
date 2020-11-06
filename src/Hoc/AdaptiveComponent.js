import React, { Suspense, useMemo } from 'react';
import { connect } from 'react-redux';
import getTargetComponent from '../Utilities/getTargetComponent';

const defaultOptions = {
  loadingComponent: null,
};

const AdaptiveComponent = (components, options = defaultOptions) => {
  let Component = props => {
    const componentsMap = components;
    const { activeDevice } = props;
    const TargetComponent = useMemo(
      () => getTargetComponent(componentsMap, activeDevice),
      [activeDevice, componentsMap],
    );

    return (
      <Suspense fallback={options.loadingComponent}>
        <TargetComponent {...props} />
      </Suspense>
    );
  };

  const mapState = state => ({ activeDevice: state.app.whichDeviceActive });
  Component = connect(mapState)(Component);
  return Component;
};

export default AdaptiveComponent;
