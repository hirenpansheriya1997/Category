import category from "./category";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  category: category,
});

export default allReducers;
