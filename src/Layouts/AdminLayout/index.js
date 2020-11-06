import { lazy } from 'react';
import { DESKTOP, TABLET } from '../../Constants/deviceTypes';
import AdaptiveComponent from '../../Hoc/AdaptiveComponent';
import { fullPageLoadingIndicator } from '../../Components/LoadingIndicator';

const components = {
  [DESKTOP]: lazy(() => import('./adminLayout.desktop')),
  [TABLET]: lazy(() => import('./adminLayout.mobile')),
};

export default AdaptiveComponent(components, {
  loadingComponent: fullPageLoadingIndicator,
});
