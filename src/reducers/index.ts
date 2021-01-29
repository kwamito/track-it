import reviewReducer from "./addMemberToTeamReducer";
import addMemberToTeamReducer from "./addMemberToTeamReducer";
import createNewTaskReducer from "./createNewTaskReducer";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  reviewFeature: reviewReducer,
  addMember: addMemberToTeamReducer,
  createNewTask: createNewTaskReducer,
});

export default allReducers;
