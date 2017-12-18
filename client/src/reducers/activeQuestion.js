import {RECEIVE_ACTIVE_QUESTION } from "../constants/index";

const activeQuestion = (state = { }, action) => {
  const { type, data } = action;

  switch (type) {
    case RECEIVE_ACTIVE_QUESTION:
      return Object.assign({ }, state, data);
    default:
      return state;
  }
};

export default activeQuestion;