import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Question from "./Question";
import QuestionForm from './QuestionForm';

class QuestionList extends Component {
  static propTypes = {
    questions: PropTypes.array.isRequired,
    questionActions: PropTypes.object.isRequired,
    answerActions: PropTypes.object.isRequired
  };

  render() {
    const { questions, answerActions, questionActions } = this.props;
    const itemsList = questions.map(question => <Question
      key = { question._id }
      question = { question }
      questions = { questions }
      updateQuestion = { questionActions.update }
      removeQuestion = { questionActions.remove }
      answerActions = { answerActions }
    />);
    //questionActions.add({text:'tests1'});
    return(
      <div>
        <QuestionForm createQuestion = { questionActions.add }/>
        { itemsList }
      </div>
    );
  };
}

export default QuestionList;