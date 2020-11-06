import errorHandler from './errorHandler';
import middleware from './middleware';
import composeEnhancers from '../../Utilities/composeEnhancers';

const enhancer = composeEnhancers(middleware, errorHandler);

export default enhancer;
