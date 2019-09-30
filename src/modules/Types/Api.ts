import { Action } from 'redux';
import { FailureFetchPayload, RecieveFetchPayload } from '.';
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

// export type RootState = {api: ApiState;};

// export type RootActions = ApiActions;


// export type FailureFetchPayload = {
//   message: string
// }

// export type RecieveFetchPayload = {
//   [key: string]: string;
// };

export type ApiActions = StartFetchAction &
  FailureFetchAction &
  RecieveFetchAction;

export type ApiState = {
  onFetch: boolean;
  error?: string;
  data: {
    [key: string]: string;
  };
};
