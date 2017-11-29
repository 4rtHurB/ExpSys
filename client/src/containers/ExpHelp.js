import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchQuestion } from '../actions/questionActions';
import { selectAnswer } from '../actions/answerActions';
import Question from '../components/ActiveQuestion';
import DevTools from '../components/DevTools';
import {
  Breadcrumb, Navbar, Button, FormGroup,
  FormControl, Tab, Tabs } from 'react-bootstrap';

class ExpHelp extends Component {
  render() {
    return(
      <div>
        <Breadcrumb>
          <Breadcrumb.Item href="/home">
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item active>
            Help
          </Breadcrumb.Item>
        </Breadcrumb>
        <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
          <Tab eventKey={1} title="Робота експерної системи"></Tab>
          <Tab eventKey={2} title="Користування експерною системою"></Tab>
          <Tab eventKey={3} title="Редагування бази знань"></Tab>
        </Tabs>

        <FormGroup>
        <FormControl type="text" placeholder="Search" />
      </FormGroup>
    {' '}
    <Button type="submit">Submit</Button>
      </div>
    );
  };
}

export default ExpHelp;