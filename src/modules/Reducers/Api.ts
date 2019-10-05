import { ApiActions, ApiState } from "../Types/Api";

export const apiReducer = (
  state: ApiState = { onFetch: false, data: {}, block: {}, transaction: {}, dataList: {}, error: 'Please fetch.' },
  action: ApiActions
) => {
  switch (action.type) {
    case 'START_FETCH':
      return Object.assign({}, state, { onFetch: true });
    case 'START_FETCH_BLOCK':
      return Object.assign({}, state, { onFetch: true });
    case 'START_FETCH_TRANSACTION':
      return Object.assign({}, state, { ...state, onFetch: true });
    case 'FAILURE_FETCH':
      return Object.assign({}, state, { error: action.payload.message });
    case 'RECIEVE_FETCH':
      return Object.assign({}, state, {
        onFetch: false,
        data: action.payload,
        error: null,
      });
    case 'RECIEVE_FETCH_BLOCK':
      return Object.assign({}, state, {
        onFetch: false,
        data: action.payload,
        block: action.payload.block,
        error: null,
      });
    case 'RECIEVE_FETCH_TRANSACTION':
      return Object.assign({}, state, {
        onFetch: false,
        data: action.payload,
        transaction: action.payload.transaction,
        error: null,
      });
    case 'RECIEVE_FETCH_LIST':
      return Object.assign({}, state, {
        onFetch: false,
        dataList: action.payload,
        error: null,
      });
    default:
      return state;
  }
};
