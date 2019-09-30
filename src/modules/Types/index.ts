import { ApiState, ApiActions } from './Api';

export {
    FailureFetchPayload,
    RecieveFetchPayload,
    ApiActions,
    ApiState,
} from './Api';

export type RootState = {
    api: ApiState;
};

export type RootActions = ApiActions;