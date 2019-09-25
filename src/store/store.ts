import { createStore } from "redux";
// todo applyMiddleware
import rootReducer from "../reducers";

const store = createStore(rootReducer);

export default store;
