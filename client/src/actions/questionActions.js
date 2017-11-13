import { RECEIVE_QUESTION, REQUEST_QUESTION } from '../constants';
import fetch from 'isomorphic-fetch';

export const requestQuestion = id => {
  return ({
    type: REQUEST_QUESTION,
    question: id
  });
};

export const receiveQuestion = question => {
  return ({
    type: RECEIVE_QUESTION,
    question: question
  });
};

export const  fetchQuestion = id => {
  return dispatch => {
    dispatch(receiveQuestion(id));
    return fetch('localhost:3001/api/questions/' + id)
      .then(res => res.json())
      .then(question => dispatch( receiveQuestion(question) ));
  };
};
