import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Breadcrumb } from 'react-bootstrap';
import {
  fetchNewQuestion,
  fetchUpdateQuestion,
  fetchRemoveQuestion,
  fetchAllQuestions } from '../actions/questionActions';
import {
  fetchNewAnswer,
  fetchUpdateAnswer,
  fetchRemoveAnswer } from '../actions/answerActions';
import QuestionList from "../components/QuestionList";

class ExpEditor extends Component {
  static propTypes = {
    questions: PropTypes.array.isRequired,
    isFetching: PropTypes.Boolean,
    loadQuestions: PropTypes.func.isRequired,
    questionActions: PropTypes.object.isRequired,
    answerActions: PropTypes.object.isRequired
  };

  componentDidMount() {
    const { loadQuestions } = this.props;

    loadQuestions();
  }

  render() {
    const { questions, questionActions, answerActions } = this.props;
    //questionActions.add({text:'tests'});
    return(
      <div>
        <Breadcrumb>
          <Breadcrumb.Item href="/home">
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item active>
            Editor
          </Breadcrumb.Item>
        </Breadcrumb>
        <QuestionList
          questions={ questions }
          questionActions = { questionActions  }
          answerActions = { answerActions }
        />
      </div>
    );
  };
}

const mapStateToProps = state => {
  const { questions, isFetching } = state;

  return {
    questions,
    isFetching
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadQuestions: bindActionCreators(fetchAllQuestions, dispatch),
    questionActions: {
      add: bindActionCreators(fetchNewQuestion, dispatch),
      update: bindActionCreators(fetchUpdateQuestion, dispatch),
      remove: bindActionCreators(fetchRemoveQuestion, dispatch)
    },
    answerActions: {
      add: bindActionCreators(fetchNewAnswer, dispatch),
      update: bindActionCreators(fetchUpdateAnswer, dispatch),
      remove: bindActionCreators(fetchRemoveAnswer, dispatch)
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpEditor);