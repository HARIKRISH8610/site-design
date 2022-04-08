import Clickreducer from "./redux/reducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  Clickval: Clickreducer,
});
export default allReducers;
