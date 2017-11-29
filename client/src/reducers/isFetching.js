import {RECEIVE_ACTIVE_QUESTION, REQUEST_QUESTION } from "../constants/index";

const isFetching = (state = false, action) => {
  switch (action.type) {
    case REQUEST_QUESTION:
      return true;
    case RECEIVE_ACTIVE_QUESTION:
      return false;
    default:
      return state;
  }
};

export default isFetching;