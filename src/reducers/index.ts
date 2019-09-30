import { combineReducers } from "redux";
import { searchReducer } from "./searchReducers";

const rootReducer = combineReducers({
  todoSearch: searchReducer
});

export default rootReducer;
