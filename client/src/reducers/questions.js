import {
  RECEIVE_ALL_QUESTIONS,
  ADD_NEW_QUESTION,
  UPDATE_QUESTION,
  REMOVE_QUESTION,
  UPDATE_ANSWER,
  ADD_NEW_ANSWER,
  REMOVE_ANSWER } from "../constants";

const questions = (state = [], action) => {
  const { type, data, id, id_quest, id_answ } = action;

  switch (type) {
    case RECEIVE_ALL_QUESTIONS:
      return data;
    case ADD_NEW_QUESTION:
      return [
        ...state,
        data
      ];
    case UPDATE_QUESTION:
      return state.map(item =>
        item._id === id
          ? { ...data }
          : item
      );
    case REMOVE_QUESTION:
      return state.filter(item =>
        item._id !== id);
    case ADD_NEW_ANSWER:
      return state.map(item => {
        return item._id === id_quest
          ? { ...item, answers: [ ...item.answers, data] }
          : item
      });
    case UPDATE_ANSWER:
      return state.map(item => {
        return item._id === id_quest
          ? { ...data }
          : item
      });
    case REMOVE_ANSWER:
      return state.map(item => {
        return item._id === id_quest
          ? { ...data }
          : item
      });
    default:
      return state;
  }

};

export default questions;