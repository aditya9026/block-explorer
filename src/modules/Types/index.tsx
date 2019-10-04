import { ApiActions, ApiState } from "./Api";

export type FailureFetchPayload = {
    message: string
  }
export type RecieveFetchPayload = {
  [key: string]: string;
};

export type RecieveFetchListPayload = {
  [key: string]: string;
}

export type RootState = {api: ApiState;};

export type RootActions = ApiActions;