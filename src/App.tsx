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
    <div className="container">
      <div className="container header-container">
        <div className="logo">
          <a href="/">
            <img src="https://iov.one/src/images/logo@2x-2bb7a2d2.png" width="123" alt="IOV" />
          </a>
        </div>
        <div className="nav-holder">
          <nav id="nav">
            <div>
              <ul className="nav-drop">
                <li className="">
                  <a href="https://docs.iov.one" target="_blank" rel="noopener noreferrer">Documentation</a>
                </li>
                <li className="">
                  <a href="https://github.com/iov-one" target="_blank"  rel="noopener noreferrer">Github</a>
                </li>
                <li className="">
                  <a href="https://medium.com/iov-internet-of-values" target="_blank" rel="noopener noreferrer">Blog</a>
                </li>
                <li className="menu-button">
                  <a href="https://register.iov.one/form/80662587859374?ref=WBS"  rel="noopener noreferrer">Get IOV Tokens</a>
                </li>
                <li className="menu-button inverted">
                  <a href="/request_information"  rel="noopener noreferrer">Request Information</a>
                </li>
              </ul>
            </div>
           </nav>
        </div>
      </div>
      <div className="text-center">
        <div className="head-title">Block Explorer</div>
      </div>
      <Provider store={store}>
        <div>
          <FetchController label={'Search'} />
          <DataArea />
        </div>
      </Provider>
    </div>
  );
};

export default component;
