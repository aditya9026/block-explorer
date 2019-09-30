import * as React from 'react';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk, { ThunkMiddleware } from 'redux-thunk';
import { RootState, RootActions, rootReducer } from './modules';
import { Provider } from 'react-redux';
import DataArea from './component/DataArea';
import FetchController from './component/FetchController';

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
