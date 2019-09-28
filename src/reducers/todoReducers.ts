import * as MyTypes from "MyTypes";
import { actionTypes } from "../actions/";

interface ITodoModel {
  list: string[];
}

export const initialState: ITodoModel = {
  list: ["X", "Y"]
};

export const todoReducer = (state: ITodoModel = initialState, action: MyTypes.RootAction) => {
  switch (action.type) {
    case actionTypes.FIND: {
      return {
        ...state,
        list: [...state.list, action.payload]
      };
    }
    default:
      return state;
  }
};
