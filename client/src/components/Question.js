import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Answer from "./Answer";
import AnswerForm from "./AnswerForm";
import { ListGroup, Well,
  Glyphicon, InputGroup, FormGroup,
  FormControl, Col , Row, Panel, ListGroupItem} from 'react-bootstrap';

class Question extends Component {
  static propTypes = {
    question: PropTypes.object.isRequired,
    questions: PropTypes.array.isRequired,
    updateQuestion: PropTypes.func.isRequired,
    removeQuestion: PropTypes.func.isRequired,
    answerActions: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      text: props.question.text,
      isFirst: props.question.first
    };
  };

  render() {
    const { text, _id } = this.props.question;
    const answers = this.props.question.answers ||   [];
    const { answerActions, questions } = this.props;

    const answersList = answers.map(answer => <Answer
      key = { answer._id || null }
      idQuestion = { _id }
      questionIsEdit = { this.state.isEdit }
      questions = { questions }
      answer = { answer }
      onUpdate = { answerActions.update }
      onRemove = { answerActions.remove }
    />);

    const element = this.state.isEdit
      ? (<div>
        <Row>
            <Col xs={12}>
              <FormGroup>
                <InputGroup>
                  <InputGroup.Addon>
                    <input
                      type="checkbox" aria-label="isFirst"
                      id = 'isFirst'
                      onChange = { e => this.setState({ isFirst: !this.state.isFirst }) }
                      checked = { this.state.isFirst }
                    />
                    <label for='isFirst'> 1st </label>
                  </InputGroup.Addon>
                  <FormControl
                    type="text" value = { this.state.text }
                    onChange = { e => this.setState({ text: e.target.value }) }
                  />
                  <InputGroup.Addon>
                    <a onClick = { this.handleSave } href='#'>
                      <Glyphicon glyph="ok" />
                    </a>
                  </InputGroup.Addon>
                  <InputGroup.Addon>
                    <a onClick = { this.handleRemoveQuestion } href='#'>
                      <Glyphicon glyph="remove" />
                    </a>
                  </InputGroup.Addon>
                </InputGroup>
              </FormGroup>
            </Col>
        </Row>

          <AnswerForm
            createAnswer={answerActions.add}
            questions={questions}
            idQuestion={_id}
          />
        </div>)
      : (<Row>
        <Col xs={12}>
            <FormGroup>
              <InputGroup>
                <InputGroup.Addon>
                  Питання:
                </InputGroup.Addon>
               <FormControl
                  type="text" placeholder = { text }
                  disabled = 'true'
                />
                <InputGroup.Addon>
                  <a href='#' >
                    <Glyphicon onClick = { () => this.setState({ isEdit: true }) } glyph="pencil" />
                  </a>
                </InputGroup.Addon>
              </InputGroup>
            </FormGroup>
        </Col>
        </Row>);

    return(<Col xs={8}>
      <Panel bsStyle='success'>
        {element}
        { answersList }
      </Panel>
    </Col>);
  };

  handleRemoveQuestion = () => {
    const { removeQuestion, question } = this.props;

    removeQuestion(question._id);
  };

  handleAddAnswer = () => {
    const { answerActions, question } = this.props;

    answerActions.add(question._id, {
      text: 'Можливо',
      next: {
        text: 'Немає',
        id: ''
      }
    });
  };

  handleSave = () => {
    const { updateQuestion, question } = this.props;
    const { text, isFirst } = this.state;

    updateQuestion(question._id, {
      text: text,
      first: isFirst
    });

    this.setState({ isEdit: false });
  };
}

export default Question;