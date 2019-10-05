import { Action } from 'redux';
import { FailureFetchPayload, RecieveFetchBlockPayload, RecieveFetchTransactionPayload, RecieveFetchListPayload } from '.';

export interface StartFetchAction extends Action {
  type: 'START_FETCH';
}

export interface StartFetchBlockAction extends Action {
  type: 'START_FETCH_BLOCK';
}

export interface StartFetchTransactionAction extends Action {
  type: 'START_FETCH_TRANSACTION';
}

export interface FailureFetchAction extends Action {
  type: 'FAILURE_FETCH';
  payload: FailureFetchPayload;
}

export interface RecieveFetchBlockAction extends Action {
  type: 'RECIEVE_FETCH_BLOCK';
  payload: RecieveFetchBlockPayload;
}
export interface RecieveFetchTransactionAction extends Action {
  type: 'RECIEVE_FETCH_TRANSACTION';
  payload: RecieveFetchTransactionPayload;
}

export interface RecieveFetchListAction extends Action {
  type: 'RECIEVE_FETCH_LIST';
  payload: RecieveFetchListPayload;
}

export type ApiActions = StartFetchAction &
  StartFetchBlockAction &
  StartFetchTransactionAction &
  FailureFetchAction &
  RecieveFetchBlockAction &
  RecieveFetchTransactionAction &
  RecieveFetchListAction

export type ApiState = {
  onFetch: boolean;
  error?: string;
  data: { [key: string]: string; };
  dataList: { [key: string]: string; }
  block: { [key: string]: string; };
  transaction: { [key: string]: string; }
};
