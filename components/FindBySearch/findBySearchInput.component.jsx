import React from "react";
import {Col, FormGroup, Input, Label, Row } from "reactstrap";

export const styles = {
  row: {
    marginTop: "2vh",
  },
};

const FindBySearchInput = () => {
  return (
    <Row style={{ marginTop: styles.row.marginTop }}>
      <Col>
        <FormGroup>
          <Label for="make" style={{fontWeight:"bold"}}>Make:</Label>
          <Input type="select" name="make" id="make">
            <option>Select Make</option>
          </Input>
        </FormGroup>
      </Col>
      <Col>
        <FormGroup>
          <Label for="exampleEmail" style={{fontWeight:"bold"}}>Model:</Label>
          <Input type="select" name="model" id="model">
            <option>Select Model</option>
          </Input>
        </FormGroup>
      </Col>
    </Row>
  );
};

export default FindBySearchInput;
