import { ApiActions, ApiState } from "./Api";

export type FailureFetchPayload = {
  message: string
}

export type RecieveFetchBlockPayload = {
  [key: string]: string;
};

export type RecieveFetchTransactionPayload = {
  [key: string]: string;
};

export type RecieveFetchListPayload = {
  [key: string]: string;
}

export type RootState = { api: ApiState; };

export type RootActions = ApiActions;