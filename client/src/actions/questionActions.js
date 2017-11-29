import {
  RECEIVE_ACTIVE_QUESTION,
  RECEIVE_ALL_QUESTIONS,
  REQUEST_QUESTION,
  ADD_NEW_QUESTION,
  REMOVE_QUESTION,
  UPDATE_QUESTION } from '../constants';
import fetch from 'isomorphic-fetch';

export const addNewQuestion = question => {
  return {
    type: ADD_NEW_QUESTION,
    data: question
  };
};

export const removeQuestion = id => {
  return {
    type: REMOVE_QUESTION,
    id
  };
};

export const updateQuestion = (id, question) => {
  return {
    type: UPDATE_QUESTION,
    id,
    data: question
  };
};

export const requestQuestion = id => {
  return {
    type: REQUEST_QUESTION,
    question: id
  };
};

export const receiveActiveQuestion = question => {
  return {
    type: RECEIVE_ACTIVE_QUESTION,
    data: question
  };
};

export const receiveAllQuestions = questions => {
  return {
    type: RECEIVE_ALL_QUESTIONS,
    data: questions
  };
};

export const fetchNewQuestion = question => {
  return dispatch => {
    return fetch('http://localhost:3001/api/question', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify(question)
    }).then(res =>  res.json())
      .then(data => dispatch( addNewQuestion(data) ));
  };
};

export const fetchUpdateQuestion = (id, question) => {
  return dispatch => {
    return fetch('http://localhost:3001/api/questions/' + id, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'put',
      body: JSON.stringify(question)
    }).then(res => res.json())
      .then(data => dispatch( updateQuestion(id, data) ));
  };
};

export const fetchRemoveQuestion = id => {
  return dispatch => {
    fetch('http://localhost:3001/api/questions/' + id, {
      method: 'delete'
    }).then(res => res.json())
      .then(data => dispatch( removeQuestion(id) ));
  };
};

export const  fetchQuestion = id => {
  return dispatch => {
    //dispatch( requestQuestion(id) );
    return fetch('http://localhost:3001/api/questions/' + id)
      .then(res => {
        const resp = res || { };
        //console.log(resp.json());
        return resp.json();
      })
      .then(data => dispatch( receiveActiveQuestion(data) ));
  };
};

export const fetchAllQuestions = () => {
  return dispatch => {
    return fetch('http://localhost:3001/api/questions')
      .then(res => res.json())
      .then(data => dispatch( receiveAllQuestions(data || []) ));
  };
};
