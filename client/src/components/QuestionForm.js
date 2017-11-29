import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Glyphicon, Row, Col, InputGroup, FormGroup, FormControl } from 'react-bootstrap';

class QuestionForm extends Component {
  static propTypes = {
    createQuestion: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      text: ''
    };
  };

  render(){
    const element = this.state.isActive
      ? (<Row>
          <Col xs={8}>
            <FormGroup>
              <InputGroup>
                <FormControl
                  onChange = { e => this.setState({ text: e.target.value  })}
                  value = { this.state.text } type = 'text' placeholder = 'Питання'
                />
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
          <Col xs={2}>
            <FormGroup>
              <InputGroup>
                <FormControl
                  type = 'text' placeholder = 'Додати питання'
                  disabled = 'true'
                />
                <InputGroup.Addon>
                  <a href='#'>
                    <Glyphicon onClick={ e => this.setState({ isActive: true }) } glyph="plus" />
                  </a>
                </InputGroup.Addon>
              </InputGroup>

            </FormGroup>
          </Col>
        </Row>);

    return(element);
  };

  handleSave = () => {
    const { createQuestion } = this.props;

    createQuestion({text: this.state.text });

    this.setState({
      isActive: false,
      text: ''
    });
  };
}

export default QuestionForm;