import { combineReducers } from "redux";
import tasks from "./tasks";
import formNewTask from "./formNewTask";

export default combineReducers({
  tasks,
  formNewTask
});
