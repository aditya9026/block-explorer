import { Action } from 'redux';
import { FailureFetchPayload, RecieveFetchPayload, RecieveFetchListPayload } from '.';
export interface StartFetchAction extends Action {
  type: 'START_FETCH';
}

export interface FailureFetchAction extends Action {
  type: 'FAILURE_FETCH';
  payload: FailureFetchPayload;
}

export interface RecieveFetchAction extends Action {
  type: 'RECIEVE_FETCH';
  payload: RecieveFetchPayload;
}

export interface RecieveFetchListAction extends Action {
  type: 'RECIEVE_FETCH_LIST';
  payload: RecieveFetchListPayload;
}

export type ApiActions = StartFetchAction &
  FailureFetchAction &
  RecieveFetchAction &
  RecieveFetchListAction;

export type ApiState = {
  onFetch: boolean;
  error?: string;
  data: {
    [key: string]: string;
  };
  dataList: {
    [key: string]: string;
  }
};
