import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb, Nav, NavItem } from 'react-bootstrap';

class Home extends Component{
  render() {
    return(
      <div>
        <Breadcrumb>
          <Breadcrumb.Item active>
            Home
          </Breadcrumb.Item>
        </Breadcrumb>
        <Nav bsStyle="pills" >
          <NavItem eventKey={1} href="/editor">Editor</NavItem>
          <NavItem eventKey={2} href="system">Expert system</NavItem>
          <NavItem eventKey={3} href="/help">Help</NavItem>
        </Nav>
      </div>
    );
  }
}

export default Home;