import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import subject from "./subject";

export default combineReducers({
  auth,
  message,
  subject
});