import { legacy_createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import todoReducer from "../Reducer/TodoReducer";
const todoStore = legacy_createStore(todoReducer, applyMiddleware(logger));

export default todoStore;
