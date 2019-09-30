import axios from 'axios';
import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { IBlocks, IBlocksState } from '../reducers/searchReducers';

export enum actionTypes {
  FIND = "FIND",
}

export interface IGetAllAction {
  type: actionTypes.FIND;
  blocks: IBlocks[];
}

export type SearchActions = IGetAllAction;

export const searchBlocks: ActionCreator<ThunkAction<Promise<any>, IBlocksState, null, IGetAllAction>> = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get('https://swapi.co/api/people/');
      dispatch({
        blocks: response.data.results,
        type: actionTypes.FIND,
      });
    } catch (err) {
      console.error(err);
    }
  };
};
