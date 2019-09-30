import { combineReducers } from 'redux';
import { apiReducer } from './Api';
import { RootState, RootActions } from '../Types';

export const rootReducer = combineReducers<RootState, RootActions>({
  api: apiReducer,
});
