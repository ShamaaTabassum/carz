import React from 'react'
import {Col, FormGroup, Input, Label, Row } from "reactstrap";
import {styles} from "../FindBySearch/findBySearchInput.component"

const YourInfoInputs = () => {
  return (
    <>
    <Label for="name" style={{fontWeight:"bold"}}>Your Info</Label>
    <Input type="Input" name="name" id="name" placeholder="Your Name*">
    </Input>
    <Row style={{ marginTop: styles.row.marginTop }}>
      <Col xs={4} md={2}>
      <Input type="select" name="countryNumber" id="countryNumber">
      <option>+92</option>
    </Input>
    </Col>
      <Col xs={8} md={10}>
    <Input type="Input" name="contact" id="contact" placeholder="Contact No*">
    </Input>
    </Col>
    </Row>
    <Input type="email" name="e-mail" id="e-mail" placeholder="E-mail*" style={{ marginTop: styles.row.marginTop }}>
    </Input>
    <Input type="Input" name="countryName" id="countryName" placeholder="Country*" style={{ marginTop: styles.row.marginTop }}>
    </Input>
    </>
  )
}

export default YourInfoInputs
