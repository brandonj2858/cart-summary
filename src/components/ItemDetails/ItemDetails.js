import React, {Component} from 'react';
import {Button, Container, Collapse, Well, Media, Col, Row}  from 'react-bootstrap';


export default class ItemDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }
  render() {
    return (
      <div>
        <Button className="item-details-button" bsStyle="link" onClick={() => this.setState({open: !this.state.open})}>
          {this.state.open === false ? 'See' : 'Hide'} Item Details
          {this.state.open === false ? `+` : `-`}
        </Button>
        <Collapse in={this.state.open}>
          <div>

            <Media>

                <img
                width={100}
                height={100}
                src="https://i5.walmartimages.com/asr/a0384c4f-40db-45fe-8554-7c9e323d8ae7_1.f4629d0529dcb28e49010abafa93d628.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF"
                />
            <Media.Body>
            <p>The Greatest System Ever!</p>
            <Row>
              <Col md={6}>
                <strong>{`$${this.props.price }`}</strong>
                <br/>
                <strong className="price-strike"> {`$${this.props.price}`} </strong>

              </Col>
              <Col md={6}>

              </Col>

            </Row>
            </Media.Body>
            </Media>

          </div>
        </Collapse>
       </div>
     )
  }

}
