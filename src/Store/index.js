import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './rootReducer';
import * as sagas from './rootSaga';
import composeEnhancers from 'Utilities/composeEnhancers';

const sagaMiddleware = createSagaMiddleware();

// Compose enhancers
const composed = composeEnhancers(applyMiddleware(sagaMiddleware));

export default createStore(reducer, composed);
sagas.registerWithMiddleware(sagaMiddleware);
