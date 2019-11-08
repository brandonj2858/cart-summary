import React, {Component} from 'react'
import {Container, Col, Row, Tooltip, OverlayTrigger}  from 'react-bootstrap';


var styles = {
  pickupSavings: {
    textDecoration: 'underline'
  },
  totalSavings: {
    color: 'red',
    fontWeight: 800
  }
}


export default class PickupSavings extends Component {
  render() {
    const tooltip =
    // Provides an overlay when someone hovers over an element.
    (<Tooltip id="tooltip">
      <p>Pickup up your order in store helps cut costs, and we pass the savings to you!</p>
    </Tooltip>)
    return(
      <Row>
        <Col md={6}>
          <OverlayTrigger placement="bottom" overlay={tooltip}>
            <div style={styles.pickupSavings}>Pickup Savings</div>
          </OverlayTrigger>
        </Col>
        <Col style={styles.totalSavings} md={6}>{`$${this.props.price}`} </Col>
      </Row>
    )
  }
}
