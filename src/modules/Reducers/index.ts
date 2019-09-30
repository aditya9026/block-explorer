import { combineReducers } from 'redux';
import { RootState, RootActions } from '../Types';
import { apiReducer } from './Api';

export const rootReducer = combineReducers<RootState, RootActions>({
    api: apiReducer,
});
