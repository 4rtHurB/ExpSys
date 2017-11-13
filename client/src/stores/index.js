import {createStore, compose, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from '../reducers';
import DevTools from '../components/DevTools'

const store = createStore(reducer, DevTools.instrument());
/*const store = createStore(
  reducer,
  DevTools.instrument(),
  applyMiddleware(
    thunkMiddleware
  )
);*/
/*  applyMiddleware(
    thunkMiddleware,
    DevTools.instrument()
  )*/
export default store;