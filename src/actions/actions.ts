import { action } from "typesafe-actions";

// use typescript enum rather than action constants
export enum actionTypes {
  FIND = "FIND",
}

export const findBlocks = {
  findBlocks: (param: string) => action(actionTypes.FIND, param),
};
