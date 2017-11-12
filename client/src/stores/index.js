import { createStore, compose } from 'redux';
import reducer from '../reducers';
import DevTools from '../components/DevTools'

const store = compose(
  DevTools.instrument()
)(createStore)(reducer);

export default store;