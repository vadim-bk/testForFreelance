import { combineReducers } from "redux";
import { homeReducer } from "../components/Home/Home.reducer";

export default combineReducers({
  home: homeReducer,
});