import { ActionCreator, Dispatch, Action } from 'redux';
import {
  FailureFetchPayload,
  RecieveFetchPayload,
  RecieveFetchListPayload,
  RootActions,
  RootState,
} from '../Types';
import { ThunkAction } from 'redux-thunk';

export const startFetch: ActionCreator<RootActions> = (): RootActions =>
  ({ type: 'START_FETCH' } as RootActions);

export const failureFetch: ActionCreator<RootActions> = (
  payload: FailureFetchPayload
): RootActions => ({ payload, type: 'FAILURE_FETCH' } as RootActions);

export const recieveFetch: ActionCreator<RootActions> = (
  payload: RecieveFetchPayload
): RootActions => ({ payload, type: 'RECIEVE_FETCH' } as RootActions);

export const recieveFetchList: ActionCreator<RootActions> = (
  payload: RecieveFetchListPayload
): RootActions => ({ payload, type: 'RECIEVE_FETCH_LIST' } as RootActions);

export const getData = (param: any, type: string): ThunkAction<void, RootState, undefined, RootActions> => async (dispatch: Dispatch<Action>) => {
  dispatch(startFetch(param));
  try {
    const resp = await fetch(`https://blocks-explorer-api.herokuapp.com/api/${type}/${param}`);
    const body = await resp.json();
    dispatch(recieveFetch(body));
  } catch (e) {
    dispatch(failureFetch({ message: e.message }));
  }
};
export const getlastData = (): ThunkAction<void, RootState, undefined, RootActions> => async (dispatch: Dispatch<Action>) => {
  dispatch(startFetch());
  try {
    const resp = await fetch(`http://localhost:3001/api/last_records`);
    // const resp = await fetch(`https://blocks-explorer-api.herokuapp.com/api/`);
    const body = await resp.json();
    dispatch(recieveFetchList(body));
  } catch (e) {
    dispatch(failureFetch({ message: e.message }));
  }
};
