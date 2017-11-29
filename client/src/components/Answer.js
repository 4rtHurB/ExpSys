import React, { Component } from 'react';
import PropTypes from 'prop-types';
import questions from "../reducers/questions";
import { ListGroupItem, Glyphicon, Row, Col, FormControl, FormGroup, InputGroup } from 'react-bootstrap';

class Answer extends Component {
  static propTypes = {
    answer: PropTypes.object.isRequired,
    onUpdate: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
    idQuestion: PropTypes.string.isRequired,
    questionIsEdit: PropTypes.bool.isRequired,
    questions: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
    const { next } = props.answer || { text:'Немає', id:'' };

    this.state = {
      isEdit: false,
      text: props.answer.text,
      next: {
        id: next.id,
        text: next.text
      }
    };
  };

  render() {
    const style = {
      ['Так']: 'success',
      ['Ні']: 'danger',
      ['Можливо']: 'warning'
    };
    const { text, _id } = this.props.answer;
    const next = this.props.answer.next || { text: 'Немає' };
    const { onRemove, onUpdate, idQuestion, questions, questionIsEdit } = this.props;
    const nextQuestionList = questions.map(question =>
      question._id !== idQuestion
        ? <option
            key = { question._id }
            value = { question._id }>
            { question.text }
          </option>
        : <option key = { 'none' }>Немає</option>
    );

    const element = this.state.isEdit
      ? (<Row>
          <Col xs={12}>
            <FormGroup>
              <InputGroup>
                <FormControl
                  onChange = { e => this.setState({ text: e.target.value }) }
                  value = { this.state.text } type = 'text' placeholder = 'Питання'
                />
                <InputGroup.Addon>
                  Наступне питання:
                </InputGroup.Addon>
                <FormControl
                  componentClass="select" placeholder="select"
                  onChange = { e => this.setState({ next:{ id: e.target.value }}) }>
                  { nextQuestionList }
                </FormControl>
                <InputGroup.Addon>
                  <a onClick = { this.handleSave } href='#'>
                    <Glyphicon glyph="ok" />
                  </a>
                </InputGroup.Addon>
                <InputGroup.Addon>
                  <a onClick = { () => onRemove(idQuestion, _id) } href='#'>
                    <Glyphicon glyph="remove" />
                  </a>
                </InputGroup.Addon>
              </InputGroup>

            </FormGroup>
          </Col>
        </Row>)
      : (questionIsEdit
        ? (<Row>
              <Col xs={9}>
                <FormGroup>
                  <InputGroup>
                    <InputGroup.Addon>
                      Відповідь:
                    </InputGroup.Addon>
                    <FormControl type = 'text' placeholder = { text } disabled = 'true'/>
                    <InputGroup.Addon>
                      Наступне питання:
                    </InputGroup.Addon>
                    <FormControl type = 'text' placeholder = { next.text } disabled = 'true'/>
                    <InputGroup.Addon>
                      <a onClick = { () => this.setState({ isEdit: true }) } href='#'>
                        <Glyphicon glyph="pencil" />
                      </a>
                    </InputGroup.Addon>
                  </InputGroup>
                </FormGroup>
              </Col>
            </Row>)
          : (<Row>
            <Col xs={9}>
              <FormGroup>
                <InputGroup>
                  <InputGroup.Addon>
                    Відповідь:
                  </InputGroup.Addon>
                  <FormControl type = 'text' placeholder = { text } disabled = 'true'/>
                  <InputGroup.Addon>
                    Наступне питання:
                  </InputGroup.Addon>
                  <FormControl type = 'text' placeholder = { next.text } disabled = 'true'/>
                </InputGroup>
              </FormGroup>
            </Col>
          </Row>)

      );

    return(element);
  };

  handleSave = () => {
    const { onUpdate, idQuestion, answer, questions } = this.props;
    const { text, next } = this.state;
    const question = questions.filter(question => question._id === next.id)[0];
    console.log(question);

    onUpdate(idQuestion, answer._id, {
      text: text,
      next: {
        id: next.id,
        text: question.text
      }
    });

    this.setState({ isEdit: false });

  };
}

export default Answer;