import {RECEIVE_QUESTION, REQUEST_QUESTION } from "../constants/index";

const activeQuestion = (state = { }, action) => {
  switch (action.type) {
    case RECEIVE_QUESTION:
      return Object.assign({ }, state, {
        activeQuestion: action.question
      });
    default:
      return state;
  }
};

export default activeQuestion;