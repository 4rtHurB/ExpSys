import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ActiveAnswer from './ActiveAnswer';
import { Well, ListGroup, Col } from 'react-bootstrap';

class Question extends Component {
  static propTypes = {
    text: PropTypes.string,
    answers: PropTypes.array,
    selectedAnswer: PropTypes.object,
    onClick: PropTypes.func.isRequired
  };

  render() {
    const { text, answers, onClick } = this.props;

    const answerList = answers.map(answer => <ActiveAnswer
      key = { answer._id }
      answer = { answer }
      onClick = { onClick }
    />);

    return(
      <Col xs={12} md={6} >
        <h4><b><Well bsSize="small">
          { text }
        </Well></b></h4>
        <Col xs={12} md={5} >
          <ListGroup>
            { answerList }
          </ListGroup>
        </Col>
      </Col>
    );
  }
}

export default Question;