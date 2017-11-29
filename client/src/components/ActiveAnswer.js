import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem } from 'react-bootstrap';

class ActiveAnswer extends Component {
  static propTypes = {
    answer: PropTypes.object.isRequired,
    selectAnswer: PropTypes.func,
    onClick: PropTypes.func.isRequired
  };

  render() {
    const { text } = this.props.answer;
    const style = {
      ['Так']: 'success',
      ['Ні']: 'danger',
      ['Можливо']: 'warning'
    };

    return (
      <ListGroupItem onClick = { this.handleClick } bsStyle={style[text] || 'default'}>
        { text }
      </ListGroupItem>
    );
  };

  handleClick = e => {
    e.preventDefault();

    const { answer: _id, onClick } = this.props;

    onClick(_id);
  };

}

export default ActiveAnswer;