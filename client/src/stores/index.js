import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from '../reducers';
import DevTools from '../components/DevTools'
import {
  fetchAllQuestions, fetchNewQuestion, fetchRemoveQuestion,
  fetchUpdateQuestion
} from "../actions/questionActions";
import {fetchNewAnswer, fetchRemoveAnswer, fetchUpdateAnswer} from "../actions/answerActions";

const store = createStore(
  reducer,
  DevTools.instrument(),
  applyMiddleware(
    thunkMiddleware
  )
);

//store.dispatch( fetchAllQuestions() );
//store.dispatch( fetchRemoveAnswer('5a10805d529f0314b01271df', '5a1095c5c88ef7361aa87e9f') );
/*store.dispatch( fetchUpdateAnswer('5a10805d529f0314b01271df', '5a1080c3529f0314b01271e2', {
  text: 'MyAnsw1'
}));*/
/*store.dispatch( fetchUpdateQuestion('5a10805d529f0314b01271df',{
  text: 'MyQuestion1'
}));*/
/*store.dispatch( fetchNewQuestion({
  text: "MyAnswerrr"
}));*/
/*store.dispatch( fetchNewAnswer('5a10805d529f0314b01271df', {
  text: "MyAnsw3"
}));*/
/*store.dispatch(fetchRemoveQuestion('5a1148037d8f7110aeff8d4e'));*/

export default store;