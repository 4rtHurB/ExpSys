import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Glyphicon, Row, Col, FormControl, FormGroup, InputGroup } from 'react-bootstrap';

class AnswerForm extends Component {
  static propTypes = {
    idQuestion: PropTypes.string.isRequired,
    createAnswer: PropTypes.func.isRequired,
    questions: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      text: '',
      next: {
        id:'',
        text: 'Немає'
      }
    };
  };

  render(){
    const nextQuestionList = this.props.questions.map(question =>
      <option
        key = { question._id }
        value = { question._id }>
        { question.text }
      </option>
    );
    nextQuestionList.push(<option key = { 'none' }>Немає</option>);

    const element = this.state.isActive
      ? (<Row>
          <Col xs={12}>
            <FormGroup>
              <InputGroup>
                <FormControl
                  onChange = { e => this.setState({ text: e.target.value  })}
                  value = { this.state.text } type = 'text' placeholder = 'Відповідь'
                />
                <InputGroup.Addon>
                  Наступне питання:
                </InputGroup.Addon>
                <FormControl
                  componentClass="select" placeholder="select"
                  onChange = { e => this.handleSelect(e) } with="200px">
                  { nextQuestionList }
                </FormControl>
                <InputGroup.Addon>
                  <a onClick={ this.handleSave } href='#'>
                    <Glyphicon glyph="ok" />
                  </a>
                </InputGroup.Addon>
              </InputGroup>

            </FormGroup>
          </Col>
        </Row>)
      : (<Row>
          <Col xs={3}>
            <FormGroup>
              <InputGroup>
                <FormControl
                  type = 'text' placeholder = 'Додати відповідь'
                  disabled = 'true'
                />
                <InputGroup.Addon>
                  <a onClick={ e => this.setState({ isActive: true }) }  href='#'>
                    <Glyphicon glyph='plus' />
                  </a>
                </InputGroup.Addon>
              </InputGroup>
            </FormGroup>
          </Col>
        </Row>);


    return(element);
  };

  handleSelect = e => {
    const questions = this.props.questions || [];
    const id = e.target.value;
    const text = questions.filter(question => question._id === id)[0].text;

    this.setState({ next:{ id, text }})
  };

  handleSave = () => {
    const { createAnswer,idQuestion } = this.props;

    createAnswer(idQuestion ,{
      text: this.state.text,
      next: this.state.next
    });

    this.setState({
      isActive: false,
      text: '',
      next: {
        id:'Немає'
      }
    });
  };
}

export default AnswerForm;