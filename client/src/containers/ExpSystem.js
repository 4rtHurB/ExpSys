import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchQuestion } from '../actions/questionActions';
import { selectAnswer } from '../actions/answerActions';
import Question from '../components/ActiveQuestion';
import { Breadcrumb } from 'react-bootstrap';

class ExpSystem extends Component {

  componentDidMount() {
    const { fetchQuestion } = this.props;

    fetchQuestion('first');
  }

  componentDidUpdate(prevProps) {
    if(prevProps.selectedAnswer !== this.props.selectedAnswer) {
      const { fetchQuestion, selectedAnswer } = this.props;

      fetchQuestion(selectedAnswer.next.id);
    }
  }

  render() {
    const { question, isFetching } = this.props;

    const answers = this.props.answers || [];
    return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Item href="/home">
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item active>
            Expert system
          </Breadcrumb.Item>
        </Breadcrumb>
        <Question
          text = { question  }
          answers = { answers }
          onClick = { this.handleSelectAnswer }
        />
      </div>
    );
  }

  handleSelectAnswer = (id) => {
    const { selectAnswer } = this.props;

    selectAnswer(id);
  }
}

const mapStateToProps = state => {
  const { activeQuestion, selectedAnswer, isFetching } = state;

  return {
    question: activeQuestion.text,
    answers: activeQuestion.answers,
    selectedAnswer: selectedAnswer,
    isFetching: isFetching
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchQuestion: bindActionCreators(fetchQuestion, dispatch),
    selectAnswer: bindActionCreators(selectAnswer, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpSystem);