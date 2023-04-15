import counter from "../counterReducer";
// import auth from "./auth";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter,
  
});
export default allReducers;