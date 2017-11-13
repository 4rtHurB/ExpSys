import { combineReducers } from 'redux';
import isFetching from './isFetching';
import activeQuestion from './activeQuestion';

export default combineReducers({
  isFetching,
  activeQuestion
});