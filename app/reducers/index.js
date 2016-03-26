import {combineReducers} from "redux";

import {RECEIVE_USER_INFO} from "../actions/SignInActions";

function indexHeader(state="", action){
  return state;
}

function user(state={
  userId: 0
}, action){
  console.log("reducers: ", state, "-", action);
  switch(action.type){
    case RECEIVE_USER_INFO:
      return action.json.data;
    default:
      state
  }
  return state;
}

const rootReducer = combineReducers({
  indexHeader,
  user
})

export default rootReducer;
