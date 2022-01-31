import { combineReducers } from "redux";
import todoReducer from './todoReducer';
import counterReducer from './counterReducer';
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  todo:    todoReducer,
  counter: counterReducer,
  users:   userReducer
});

export default rootReducer;