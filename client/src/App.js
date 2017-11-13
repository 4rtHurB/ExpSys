import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Root from './containers/Root';
import store from './stores';

ReactDOM.render(
  <div>
    <Provider store={store}>
      <Root />
    </Provider>
  </div>,
  document.getElementById('root')
);