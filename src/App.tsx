import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk, { ThunkMiddleware } from 'redux-thunk';
import FetchController from './component/FetchController';
import { rootReducer } from './modules';
import { RootState, RootActions } from './modules/Types';

const store = createStore<RootState, RootActions, {}, {}>(
  rootReducer,
  applyMiddleware(ReduxThunk as ThunkMiddleware<RootState, RootActions>)
);

const component: React.SFC = () => {
  return (
    <div className="container">
      <div className="header-container">
        <div className="logo">
          <a href="/">
            <img src="https://iov.one/src/images/logo@2x-2bb7a2d2.png" width="123" alt="IOV" />
          </a>
        </div>
      </div>
      <Provider store={store}>
        <div>
          <FetchController label={'Search'} />
        </div>
      </Provider>
    </div>
  );
};

export default component;
