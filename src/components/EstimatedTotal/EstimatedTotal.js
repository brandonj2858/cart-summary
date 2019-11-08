import React, {Component} from 'react';
import {Container, Row, Col}  from 'react-bootstrap';

export default class EstimatedTotal extends Component {
  render() {
    return(
      <Row  >
        <Col md={6}><h3> Est.Total:</h3></Col>
        <Col md={6}><h4>{`$${this.props.price}`}</h4></Col>
      </Row>
    )
  }
}
