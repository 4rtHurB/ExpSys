import { SELECT_ANSWER } from "../constants/index";

const selectedAnswer = (state = null, action) => {
  const { type, answer } = action;

  switch (type) {
    case SELECT_ANSWER:
      return answer;
    default:
      return state;
  }

};

export default selectedAnswer;