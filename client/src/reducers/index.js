import { combineReducers } from 'redux';
import isFetching from './isFetching';
import activeQuestion from './activeQuestion';
import selectedAnswer from './selectedAnswer';
import questions from './questions';

export default combineReducers({
  isFetching,
  activeQuestion,
  selectedAnswer,
  questions
});