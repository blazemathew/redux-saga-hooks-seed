import * as authSaga from './auth/saga';
import * as appSaga from './app/saga';

const sagas = {
  ...appSaga,
  ...authSaga
};

export function registerWithMiddleware(middleware) {
  for (let name in sagas) {
    middleware.run(sagas[name]);
  }
}
