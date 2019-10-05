import { ActionCreator, Dispatch, Action } from 'redux';
import {
  FailureFetchPayload,
  RecieveFetchBlockPayload,
  RecieveFetchTransactionPayload,
  RecieveFetchListPayload,
  RootActions,
  RootState,
} from '../Types';
import { ThunkAction } from 'redux-thunk';

export const startFetch: ActionCreator<RootActions> = (): RootActions =>
  ({ type: 'START_FETCH' } as RootActions);

export const startFetchBlock: ActionCreator<RootActions> = (): RootActions =>
  ({ type: 'START_FETCH_BLOCK' } as RootActions);

export const startFetchTransaction: ActionCreator<RootActions> = (): RootActions =>
  ({ type: 'START_FETCH_TRANSACTION' } as RootActions);

export const failureFetch: ActionCreator<RootActions> = (
  payload: FailureFetchPayload
): RootActions => ({ payload, type: 'FAILURE_FETCH' } as RootActions);

export const recieveFetchBlock: ActionCreator<RootActions> = (
  payload: RecieveFetchBlockPayload
): RootActions => ({ payload, type: 'RECIEVE_FETCH_BLOCK' } as RootActions);

export const recieveFetchTransaction: ActionCreator<RootActions> = (
  payload: RecieveFetchTransactionPayload
): RootActions => ({ payload, type: 'RECIEVE_FETCH_TRANSACTION' } as RootActions);


export const recieveFetchList: ActionCreator<RootActions> = (
  payload: RecieveFetchListPayload
): RootActions => ({ payload, type: 'RECIEVE_FETCH_LIST' } as RootActions);

export const getData = (param: any, type: string): ThunkAction<void, RootState, undefined, RootActions> => async (dispatch: Dispatch<Action>) => {
  type === 'block' ? dispatch(startFetchBlock(param)) : dispatch(startFetchTransaction(param));
  try {
    const resp = await fetch(`http://localhost:3001/api/${type}/${param}`);
    // const resp = await fetch(`https://blocks-explorer-api.herokuapp.com/api/${type}/${param}`);
    const body = await resp.json();
    type === 'block' ? dispatch(recieveFetchBlock(body)) : dispatch(recieveFetchTransaction(body))
  } catch (e) {
    dispatch(failureFetch({ message: e.message }));
  }
};

export const getlastData = (): ThunkAction<void, RootState, undefined, RootActions> => async (dispatch: Dispatch<Action>) => {
  dispatch(startFetch());
  try {
    // const resp = await fetch(`http://localhost:3001/api/last_records`);
    const resp = await fetch(`https://blocks-explorer-api.herokuapp.com/api/last_records`);
    const body = await resp.json();
    dispatch(recieveFetchList(body));
  } catch (e) {
    dispatch(failureFetch({ message: e.message }));
  }
};
