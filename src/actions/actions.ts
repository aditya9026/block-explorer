import { action } from "typesafe-actions";

// use typescript enum rather than action constants
export enum actionTypes {
  ADD = "ADD",
}

export const todoActions = {
  add: (item: string) => action(actionTypes.ADD, item),
};
