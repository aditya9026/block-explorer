import { SearchActions } from './../actions/actions';
import { actionTypes } from "../actions";
import { Reducer } from 'redux';

export interface IBlocks {
  id: string[];
  messages: string[];
}

export interface IBlocksState {
  readonly blocks: IBlocks[];
}

const initialBlocksState: IBlocksState = {
  blocks: [],
};

export const searchReducer: Reducer<IBlocksState, SearchActions > = (
  state = initialBlocksState,
  action
) => {
  switch (action.type) {
    case actionTypes.FIND: {
      return {
        ...state,
        blocks: action.blocks,
      };
    }
    default:
      return state;
  }
};