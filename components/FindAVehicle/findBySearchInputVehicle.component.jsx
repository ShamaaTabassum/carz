import React from "react";
import { Col, FormGroup, Input, Label, Row } from "reactstrap";

export const styles = {
  row: {
    marginTop: "2vh",
  },
};
const FindBySearchInputVehicle = () => {
  return (
    <Row style={{ marginTop: styles.row.marginTop }}>
      <Col>
        <FormGroup>
          <Label for="make" style={{fontWeight:"bold"}}>Make:</Label>
          <Input type="select" name="make" id="make">
            <option>Select Make</option>
          </Input>
          <Input
            type="select"
            name="year"
            id="year"
            style={{ marginTop: styles.row.marginTop }}
          >
            <option>Year</option>
          </Input>
        </FormGroup>
      </Col>
      <Col>
        <FormGroup>
          <Label for="exampleEmail" style={{fontWeight:"bold"}}>Model:</Label>
          <Input type="select" name="model" id="model">
            <option>Select Model</option>
          </Input>
          <Input
            type="select"
            name="color"
            id="color"
            style={{ marginTop: styles.row.marginTop }}
          >
            <option>Color</option>
          </Input>
        </FormGroup>
      </Col>
    </Row>
  );
};

export default FindBySearchInputVehicle;
