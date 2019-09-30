import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk, { ThunkMiddleware } from 'redux-thunk';
import DataArea from './component/DataArea';
import FetchController from './component/FetchController';
import { rootReducer } from './modules';
import { RootState, RootActions } from './modules/Types';

const store = createStore<RootState, RootActions, {}, {}>(
  rootReducer,
  applyMiddleware(ReduxThunk as ThunkMiddleware<RootState, RootActions>)
);

const component: React.SFC = () => {
  return (
    <Provider store={store}>
      <div>
        <FetchController label={'Fetch!!!'} />
        <DataArea />
      </div>
    </Provider>
  );
};

export default component;
