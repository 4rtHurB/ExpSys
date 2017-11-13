import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchQuestion } from "../actions/questionActions";
import DevTools from '../components/DevTools';

class Root extends Component {
  render() {
    return (
      <div>
        <h1>Hello world</h1>
        <DevTools />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { activeQuestion } = state;

  return {
    question: activeQuestion
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchQuestion: bindActionCreators(fetchQuestion, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root);