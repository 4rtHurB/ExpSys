import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import store from '../stores';
import DevTools from '../components/DevTools';
import ExpSystem from './ExpSystem';
import ExpEditor from './ExpEditor';
import ExpHelp from './ExpHelp';
import Home from '../components/Home';

class Root extends Component {
  render() {
    return(
      <Provider store = { store }>
        <div>
          <DevTools />
          <Router>
            <Route path="/system" component = { ExpSystem } />
          </Router>
          <Router>
            <Route path="/editor" component = { ExpEditor } />
          </Router>
          <Router>
            <Route path="/help" component = { ExpHelp } />
          </Router>
          <Router>
            <Route path="/home" component = { Home } />
          </Router>
        </div>
      </Provider>
    );
  };
}

export default Root;
