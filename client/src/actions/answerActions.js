import {
  SELECT_ANSWER,
  ADD_NEW_ANSWER,
  UPDATE_ANSWER,
  REMOVE_ANSWER } from "../constants/index";

export const selectAnswer = id => {
  return ({
    type: SELECT_ANSWER,
    answer: id
  });
};

export const addNewAnswer = (id_quest, answer) => {
  return {
    type: ADD_NEW_ANSWER,
    id_quest,
    data: answer
  };
};

export const updateAnswer = (id_quest, id_answ, answer) => {
  return {
    type: UPDATE_ANSWER,
    id_quest,
    id_answ,
    data: answer
  };
};

export const removeAnswer = (id_quest, id_answ, data) => {
  return {
    type: REMOVE_ANSWER,
    id_quest,
    id_answ,
    data
  };
};

export const fetchNewAnswer = (id_quest, answer) => {
  return dispatch => {
    return fetch('http://localhost:3001/api/questions/' + id_quest + "/answer", {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify(answer)
    }).then(res => res.json())
      .then(data => dispatch( addNewAnswer(id_quest, data) ));
  };
};

export const fetchUpdateAnswer = (id_quest, id_answ, answer) => {
  return dispatch => {
    const route = 'http://localhost:3001/api/questions/' + id_quest + "/answers/" + id_answ;

    return fetch(route, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(answer)
    }).then(res => res.json())
      .then(data => dispatch( updateAnswer(id_quest, id_answ, data) ));
  };
};

export const fetchRemoveAnswer = (id_quest, id_answ) => {
  return dispatch => {
    const route = 'http://localhost:3001/api/questions/' + id_quest + "/answers/" + id_answ;

    return fetch(route, {
      method: 'delete'
    }).then(res => res.json())
      .then(data => dispatch( removeAnswer(id_quest, id_answ, data) ));
  };
};